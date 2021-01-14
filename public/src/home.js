function totalBooksCount(books) {
  return books.length;
};

function totalAccountsCount(accounts) {
  return accounts.length;
};

function booksBorrowedCount(books) {
  let count = 0;
  const temp = books.map((book) => book.borrows);
  const result = temp.reduce((acc, book, index) => {
    (book[0].returned) ? null : count++;
    return count;
  }, 0 );
 return result;
};

//helper functions
sortResult = (result) => result.sort((itemA, itemB) => itemA.count > itemB.count ? -1 : 1);

function limitResult(result, num) {
  (result.length > num) ? result.pop() : null;
};

function getMostCommonGenres(books) {
  const result = [];
  //count instances genre appears
  for (let i = 0; i < books.length; i++) {
    if (!result.some((book) => book.name == books[i].genre)) {
      const temp = {};
      const currentGenre = books[i].genre;
      const count = books.filter((book) => book.genre == currentGenre);
      temp['name'] = currentGenre;
      temp['count'] = count.length;
      result.push(temp);
    };
  };
  sortResult(result);
  limitResult(result, 5);
  return result;
};

function getMostPopularBooks(books) {
  const result = [];
  for (let i = 0; i < books.length; i++) {
    const temp = {};
    temp['name'] = books[i].title;
    temp['count'] = books[i].borrows.length;
    result.push(temp);   
  };
  //sort by borrow count
  sortResult(result);
  for (let j = 0; j < result.length; j++) {
    limitResult(result, 5); 
  };
  return result;
};

function getMostPopularAuthors(books, authors) {
  const result = [];
  for (let i = 0; i < books.length; i++) {
    const count = books[i].borrows.length;
    for (let k = 0; k < authors.length; k++) {
      if (books[i].authorId == authors[k].id) {
        const name = `${authors[k].name.first} ${authors[k].name.last}`
        let temp = {name};
        temp['count'] = count;
        result.push(temp);
      };
    };
  };
  sortResult(result);
  for (let j = 0; j < result.length; j++) {
    limitResult(result, 5);  };
  return result;
};

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};