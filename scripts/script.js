const countries = document.querySelector(".countries");
const light = document.getElementById("light");
const input = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const cities = [];

function checkTheme() {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function toggleTheme() {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
  } else {
    localStorage.theme = "dark";
  }

  if (light.getAttribute("src") == "images/moon-regular.svg") {
    console.log("yep");
    light.src = "images/icon-solid.svg";
  } else {
    light.src = "/images/moon-regular.svg";
  }
  checkTheme();
}

light.addEventListener("click", () => {
  toggleTheme();
});

function displayCountries() {
  const promise = fetch("https://restcountries.com/v3.1/all");

  promise.then((response) => {
    const jsonPromise = response.json();
    console.log(response);
    jsonPromise.then((data) => {
      cities.push(...data);
      let country = cities.map(
        ({
          name: { common },
          languages,
          population,
          region,
          capital,
          flags: { svg },
        }) => {
          let card = `<div class=" flex flex-col w-[250px] my-10 rounded-lg overflow-hidden  shadow-lg dark:bg-darkBlueEl text-white">
   <img class ="object-cover h-52 w-full" src = "${svg}"/>
    <div class="px-[15px] mb-20 text-darkBlueText dark:text-white">
      <h2 class="text-xl font-bold my-[30px]  text-white">${common}</h2>
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

console.log(cities);
function search() {
  console.log(cities);
 
};

function findMatches (){
  const matchArray = search(this.value, cities)
  console.log(matchArray);
}

window.addEventListener("load", displayCountries);
searchBtn.addEventListener("click", search);



  // cities.filter(() => {
  //   if (input === "") {
  //     console.log("yess");
  //     return data;
  //   } else if (data.common.toLowerCase().includes(keyWord.toLowerCase())) {
  //     return data;
  //   }
  // });