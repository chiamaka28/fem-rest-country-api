const countries = document.querySelector(".countries");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");

function checkTheme () {
  if (localStorage.theme === 'dark' ) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
};


function toggleTheme () {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
  }else{
    localStorage.theme = "dark";
  }

  checkTheme ();
}

light.addEventListener("click", () => {
  console.log("yess");
  toggleTheme()
})
// const iconToggle = () =>{
//   light.classList.toggle("display-none");
//   dark.classList.toggle("display-none");
// }

// const themeCheck = () => {
//   if (userTheme === "dark" || (!userTheme && systemTheme)) {
//     document.documentElement.classList.add("dark");
//     light.classList.add("display-none");
//     return;
//   }
//     dark.classList.add("display-none");
// };

// const themeSwitch = () => {
//   if (document.documentElement.classList.contains("dark")) {
//     document.documentElement.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//     iconToggle();
//     return;
//   }
//   document.documentElement.classList.add("dark");
//   localStorage.setItem("theme", "dark");
//   iconToggle();
// }

// light.addEventListener("click", () => {
//   themeSwitch()
// })

// dark.addEventListener("click", () => {
//   themeSwitch()
// })

// themeCheck();


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

window.addEventListener("load", displayCountries);


