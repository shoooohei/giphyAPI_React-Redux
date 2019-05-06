import axios from "axios";

const giphyApi = word => {
  const search = word;
  const key = "iy6NrdhiDOyR3eYl9Bno47CGIUZsFz8O";
  const limit = 100;
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

  // promiseオブジェクトがreturnされるようにする
  return axios.get(url);
};

export default giphyApi;
