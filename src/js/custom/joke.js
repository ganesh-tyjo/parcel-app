// Export content to outside world
export const joke = {
  // Fetch random joke from API
  getJoke: (jokeType) => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/${jokeType}`
      )
        .then((res) => res.json())
        .then((data) => resolve(data[0]))
        .catch((error) => reject(error));
    });
  },
};
