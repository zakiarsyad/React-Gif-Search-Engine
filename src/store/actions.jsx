import axios from "axios";

import { SETGIF } from "./actionTypes";

const GIPHY_API_KEY = "jhvWr2xzdfoaU7kq0QRr7I0wxwpxaoMB";
const LIMIT = 9;

export const getGifs = (keyword) => (dispatch) => {
  axios({
    method: "get",
    url: `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&limit=${LIMIT}&q=${keyword}`,
  })
    .then(({ data: response }) => {
      const gifs = response.data.map((gif) => gif.id);
      dispatch(setGif(gifs));
    })
    .catch((err) => {
      // TODO: handle error
    });
};

const setGif = (data) => ({ type: SETGIF, data });

export const clearGifs = () => (dispatch) => {
  dispatch(setGif([]));
};
