const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  const jokeresult = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json'
    }
  });

  const joke = await jokeresult.json();
  jokeEl.innerHTML = joke.joke;
}
