const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");
const loadingImg = document.querySelector("#loading");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.group("Fetch all books");
      //console.log("Data", data);
      data.forEach((item) => {
        /*console.log(
          `${item.name} - ${item.authors[0]} - ${item.numberOfPages} pages`
        );*/
        createEntry(item);
      });
      //console.groupEnd();
    })
    .catch((error) => {
      console.error(error);
      let div = document.createElement("div");
      div.textContent = `An error occurred. Please try again.`;
      app.append(div);
    })
    .finally(() => {
      app.removeChild(loadingImg);
    });
};

function createEntry(item) {
  //console.log(item.name);
  let newBookEntry = document.createElement("div");
  let title = document.createElement("h4");
  let author = document.createElement("p");
  let published = document.createElement("p");
  let pages = document.createElement("p");

  newBookEntry.style.display = "flex";
  newBookEntry.style.flexDirection = "column";
  newBookEntry.style.alignItems = "center";
  newBookEntry.style.marginTop = "20px";

  title.textContent = item.name;
  author.textContent = `by ${item.authors[0]}`;
  published.textContent = item.released.substr(0, 4);
  pages.textContent = `${item.numberOfPages} pages`;

  newBookEntry.append(title);
  newBookEntry.append(author);
  newBookEntry.append(published);
  newBookEntry.append(pages);

  app.append(newBookEntry);
}

fetchData(url);
