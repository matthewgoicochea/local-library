function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
};

function findBookById(books, id) {
  return books.find((book) => book.id === id);
};

function partitionBooksByBorrowedStatus(books) {
  const result = [];
  const arrayA = [];
  const arrayB = [];
  const temp = books.filter((book) => book.borrows)
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].borrows[0].returned == false) {
      arrayA.push(temp[i]);
    };
    if (temp[i].borrows[0].returned == true) {
      arrayB.push(temp[i]);
    };
  };
  result.push(arrayA, arrayB);
  return result;
};

function getBorrowersForBook(book, accounts) {
  const result = [];
  const temp = book.borrows;
  for (let i = 0; i < temp.length; i++) {
    //cycle through accounts
    if ( result.length <= 9 ) {
      for (let j = 0; j < accounts.length; j++) {
        if (temp[i].id == accounts[j].id) {
          accounts[j]['returned'] = temp[i].returned;
          result.push(accounts[j]);       
        };
      };
    };
  };
  return result;
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};