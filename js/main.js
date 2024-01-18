async function getGames(query) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "47be74bc3emshd372b2a31f5edc4p156ac9jsn3d500ba311ab",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  let data = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${query}`,
    options
  );
  let response = await data.json();
  displayData(response);
}
getGames("shooter");

function displayData(response) {
  cartona = ``;
  for (let i = 0; i < response.length; i++) {
    cartona += `
       
       <div class="col-md-3  my-3 hight-300">
       <div class="item">
       <img src="${response[i].thumbnail}" class="w-100" alt="">
       </div>
       <h3 class="text-center">${response[i].title}</h3>
       <p>${response[i].short_description}</p>
       <p>${response[i].platform}</p>
    </div>
       
       
       `;
  }
  document.getElementById("demo").innerHTML = cartona;
}

var games = document.querySelectorAll("nav li");
for (let i = 0; i < games.length; i++) {
  games[i].addEventListener("click", function (e) {
    getGames(e.target.getAttribute("data-game"));
    console.log(e.target.getattribute);
  });
}
