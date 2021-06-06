// Export content to outside world
export const joke = {
  // Fetch random joke from API
  getJoke: () => {
    return new Promise((resolve, reject) => {
      fetch('http://api.icndb.com/jokes/random')
        .then((res) => res.json())
        .then((data) => resolve(data.value.joke));
    });
  },
};
