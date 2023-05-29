import axios from "axios";
import { apiKey } from "../constants/Constants";

export const loader = async () => {
    const {data: {results: populares}} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES`);
    const {data: {results: topRated}} = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=es-ES`);

    return { populares, topRated };
}
