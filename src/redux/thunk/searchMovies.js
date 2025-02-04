import axios from "axios";
import { BASE_URL, API_KEY } from "../../constants/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchMovies = createAsyncThunk(
  "movies/search",
  async ({ query, page = 1 }) => {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        page,
      },
    });
    return response.data;
  }
);