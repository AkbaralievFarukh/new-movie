import {create} from "zustand";
import axios from "axios";
import {api_key, url} from "../api/config.js";

const useStore = create((set) => ({
    movies: [],
    movie: {},
    isLoading: false,
    fetchMovies: async () => {
        set({ isLoading: true });
        const { data: { results } } = await axios.get(`${url}discover/movie?page=1&api_key=${api_key}`);
        set({ movies: results, isLoading: false });
    },
    fetchMovieById: async (id) => {
        set({ isLoading: true })
        const { data } = await axios.get(`${url}movie/${id}?api_key=${api_key}`)
        set( {movie: data, isLoading: false})
    },
    clearMovie: () => {
        set({ movie: {} });
    }
}));

export default useStore;