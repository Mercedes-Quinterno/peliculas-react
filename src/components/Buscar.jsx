//Buscador de películas
import {useState, useEffect} from 'react'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import {Box, Container, Pagination} from "@mui/material";
import Peliculas from './Peliculas';
import { apiKey } from "../constants/Constants";
import { useFetch } from 'use-http';
import { useSearchParams, createSearchParams } from 'react-router-dom';

const SearchBar = ({searchQuery, setSearchQuery}) => (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Busca tu película"
        variant="outlined"
        size="large"
        value={searchQuery}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: " #2443f0" }} />
      </IconButton>
    </form>
  );


  function Buscar() {
    const [peliculas, setPeliculas] = useState([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const { get } = useFetch('https://api.themoviedb.org/3')
    let [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get("query"));

    const buscarPeliculas = async () => {
        const response = await get(`/search/movie?api_key=${apiKey}&language=es-ES&page=${page}&query=${searchQuery}`);
        const totalPages = response?.total_pages > 500 ? 500 : response?.total_pages;
        setPeliculas(response?.results || []);
        setPages(totalPages || 1);
    }

    useEffect(() => {
      buscarPeliculas();
      if (searchQuery) {
        setSearchParams(createSearchParams({
          query: searchQuery
        }).toString());
      }
    }, [searchQuery, page]);

    const handleChange = (event, value) => {
        setPage(value);
    };
  
    return (
      <Container maxWidth="xl" style={{padding: 0, paddingBottom: "20px", maxWidth: "100%", width: "100%"}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop:"5vh"
            }}
          >
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </Box>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
              <Peliculas 
                  peliculas={peliculas}
              />
              <Pagination count={pages} page={page} onChange={handleChange} color="secondary"/>
          </Box>
      </Container>
    );
  }

  export default Buscar;