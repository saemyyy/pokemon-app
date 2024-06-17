function run() {
  const search = document.querySelector("#search").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("API Response (For general information):", data); // Log the API response
      document.querySelector("#pokemon-name").innerText = data.name;
      document.querySelector("#pokedex-number").innerText = data.id;
    });

  fetch(`https://pokeapi.co/api/v2/pokemon-species/${search}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(
        "API Response (For Pokédex):",
        data.flavor_text_entries.filter(
          (element) => element.language.name === "en"
        )
      ); // Log the API response
      document.querySelector("#pokemon-name").innerText = data.name;
    })
    .catch((err) => console.error(err));
}
