import axios from "axios";
import { apiKey } from "../constants/Constants";

export async function loader({params}) {
    const {data: pelicula} = await axios.get(`https://api.themoviedb.org/3/movie/${params.peliculaId}?api_key=${apiKey}&language=es-ES`);
    const {data: {results: videos}} = await axios.get(`https://api.themoviedb.org/3/movie/${params.peliculaId}/videos?api_key=${apiKey}`);
    
    return { pelicula, videos };
}