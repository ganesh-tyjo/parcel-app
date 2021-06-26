// Export content to outside world
export const joke = {
  // Fetch random joke from API
  getJoke: () => {
    return new Promise((resolve, reject) => {
      fetch(
        'https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes'
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => reject(error));
    });
  },
};
