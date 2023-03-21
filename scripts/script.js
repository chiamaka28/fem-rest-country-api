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
          flags: { svg },
        }) => {
          let card = `<div class=" flex flex-col w-[250px] my-10 rounded-lg overflow-hidden  shadow-lg">
   <img class ="object-cover h-52 w-full" src = "${svg}"/>
    <div class="px-[15px] mb-20 text-darkBlueText ">
      <h2 class="text-xl font-bold my-[30px]">${common}</h2>
      <p><span class="font-medium">Population:</span> ${population}</p>
      <p><span class="font-medium">Region:</span> ${region}</p>
      <p><span class="font-medium">Capital:</span> ${capital}</p>
    </div>
 </div>`;
          countries.insertAdjacentHTML("afterbegin", card);
        }
      );
    });
  });
}

window.addEventListener("load", displayCountries);

//darkMode
