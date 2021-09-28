fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log("DATA is :", data);
    const joke = data.value;
    const jokeElement = document.getElementById('chuckJokes');

    jokeElement.innerHTML = joke;



    
  })
  .catch();