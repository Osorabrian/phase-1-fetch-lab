function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
 let fetchData = fetch('https://anapioficeandfire.com/api/books')
  .then(response =>  {return response.json()})
  .then(books => renderBooks(books))

  return fetchData
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.titles;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
});


// {
// 	"url": "https://anapioficeandfire.com/api/characters/583",
// 	"name": "Jon Snow",
// 	"gender": "Male",
// 	"culture": "Northmen",
// 	"born": "In 283 AC",
// 	"died": "",
// 	"titles": [
// 		"Lord Commander of the Night's Watch"
// 	],
// 	"aliases": [
// 		"Lord Snow",
// 		"Ned Stark's Bastard",
// 		"The Snow of Winterfell",
// 		"The Crow-Come-Over",
// 		"The 998th Lord Commander of the Night's Watch",
// 		"The Bastard of Winterfell",
// 		"The Black Bastard of the Wall",
// 		"Lord Crow"
// 	],
// 	"father": "",
// 	"mother": "",
// 	"spouse": "",
// 	"allegiances": [
// 		"https://anapioficeandfire.com/api/houses/362"
// 	],
// 	"books": [
// 		"https://anapioficeandfire.com/api/books/5"
// 	],
// 	"povBooks": [
// 		"https://anapioficeandfire.com/api/books/1",
// 		"https://anapioficeandfire.com/api/books/2",
// 		"https://anapioficeandfire.com/api/books/3",
// 		"https://anapioficeandfire.com/api/books/8"
// 	],
// 	"tvSeries": [
// 		"Season 1",
// 		"Season 2",
// 		"Season 3",
// 		"Season 4",
// 		"Season 5",
// 		"Season 6"
// 	],
// 	"playedBy": [
// 		"Kit Harington"
// 	]
// }
