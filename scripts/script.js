const countries = document.querySelector(".countries");

function displayCountries() {
  const promise = fetch("https://restcountries.com/v3.1/all");

  promise.then((response) => {
    const jsonPromise = response.json();
    console.log(response);
    jsonPromise.then((data) => {
      let country = data.map(
        ({
          name: { common },
          languages,
          population,
          region,
          capital,
          flags: { png },
        }) => {
      let card = `<div class=" flex flex-col w-[100%] text-darkGray">
    <div class=""><img src = "${png}"/></div>
    <h2>${common}</h2>
    <p>Population: ${population}</p>
    <p>Region: ${region}</p>
    <p>Capital: ${capital}</p>
 </div>`;
          countries.insertAdjacentHTML("afterbegin", card);
        }
      );
    });
  });
}

document.addEventListener("click", displayCountries);
