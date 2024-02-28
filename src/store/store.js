import {create} from "zustand";
import axios from "axios";
import {api_key, url} from "../api/config.js";

const useStore = create((set) => ({
    movies: [],
    movie: {},
    movieTrailers: [],
    credits: [],
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
    fetchmovieTrailers: async (id) => {
        set({isLoading: true})
        const {data: { results }} = await  axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`)
        set( {movieTrailers: results, isLoading: false })
    },
    fetchCredits: async (id) => {
        set({isLoading: true})
        const {
            data: {
                cast,
            }
        } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
        set({credits: cast, isLoading: false})
    },
    clearMovie: () => {
        set({ movie: {} });
    }
}));

export default useStore;