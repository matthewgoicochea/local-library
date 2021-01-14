const { partitionBooksByBorrowedStatus } = require("./books");

function findAccountById(accounts, id) {
return accounts.find((account) => account.id === id);
};

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name['last'] > accountB.name['last'] ? 1 : -1) );
};

function numberOfBorrows(account, books) {
  let count = 0;
  let temp = books.map((book) => book.borrows);
  for (let i = 0; i < temp.length; i++) {
    book = temp[i];
      //cycle through borrows
      for (let j = 0; j < book.length; j++) {
        if (book[j].id == account.id) {
          count++;
        };        
      };
  };
 return count;
};

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  for (let p = 0; p < books.length; p++) {
    let book = books[p].borrows;
    for (let q = 0; q < book.length; q++) {
      let currentId = book[q].id 
      if (currentId == account.id && book[q].returned == false ) {
        result.push(books[p]);
      };
    };
  };
  //match books.authorId to authors.name
  for (let j = 0; j < result.length; j++) {
    for (let k = 0; k < authors.length; k++){
      if (result[j].authorId == authors[k].id) {
        result[j]['author'] = authors[k];
      }; 
    };
  };  
  return result;
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
