//Sección de películas "Populares"
import { useState, useEffect } from 'react'
import {Box, Container, Pagination} from "@mui/material";
import Peliculas from './Peliculas';
import { apiKey } from "../constants/Constants";
import { useFetch } from "use-http";

export const Populares = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const { get } = useFetch('https://api.themoviedb.org/3')

    const obtenerPopulares = async () => {
        const response = await get(`/movie/popular?api_key=${apiKey}&language=${"es-ES"}&page=${page}`);
        const totalPages = response?.total_pages > 500 ? 500 : response?.total_pages;
        setPeliculas(response?.results || []);
        setPages(totalPages || 1);
    }

    useEffect(() => {
        obtenerPopulares();
    }, [page])

    const handleChange = (event, value) => {
        setPage(value);
    };
    

  return (
        <Container maxWidth="xl" style={{padding: 0, paddingBottom: "20px", maxWidth: "100%", width: "100%", backgroundColor:"lightBlue"}}>
            <Box sx={{backgroundColor:"red", height:"10vh", display: "flex", justifyContent:"center", alignItems:"center", fontSize:"3vh"}}>
                Populares
            </Box>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                <Peliculas 
                    peliculas={peliculas}
                />
                <Pagination count={pages} page={page} onChange={handleChange} color="secondary"/>
            </Box>
        </Container>
    )
}

export default Populares;