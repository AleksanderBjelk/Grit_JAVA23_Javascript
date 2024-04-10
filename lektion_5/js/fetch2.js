const baseUrl = "https://restcountries.com/v3.1/";

const form = document.querySelector("form");
const countryContainer = document.querySelector("#countryContainer");
const errorContainer = document.querySelector("#errorMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = document.querySelector("input").value;
  const searchType = document.querySelector("select").value;
  console.log(searchTerm, searchType);

  const url = baseUrl + `${searchType}/${searchTerm}`;

  fetch(url)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      if (response.status === 404) {
        throw new Error("Country not found");
      }
    })
    .then(displayCountries)
    .catch(displayError);
});

function displayError(error) {
  console.log(error);

  const errorEl = document.createElement("h1");
  errorEl.innerText = error.message;
  errorContainer.append(errorEl);
}

function displayCountries(countries) {
  countryContainer.innerHTML = "";
  errorContainer.innerHTML = "";

  for (const { flags, name } of countries) {
    const countryDiv = document.createElement("div");
    const nameEl = document.createElement("p");
    const imgEl = document.createElement("img");

    countryDiv.append(nameEl, imgEl);
    countryContainer.append(countryDiv);

    nameEl.innerText = name.common;
    imgEl.src = flags.png;

    console.log(name.common);
    console.log(flags.png);
  }
}