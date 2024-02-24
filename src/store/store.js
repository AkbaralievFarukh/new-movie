import {create} from "zustand";
import axios from "axios";
import {api_key, url} from "../api/config.js";

const useStore = create((set) => ({
    movies: [],
    fetchMovies: async () => {
        const { data: { results } } = await axios.get(`${url}discover/movie?page=1&api_key=${api_key}`);
        set({ movies: results });
    },
}));

export default useStore;