//Página principal, se usará el Framework MUI (Material UI), por eso están las importaciones de Box y Grid


import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import ListaPeliculas from "./ListaPeliculas";
import { useLoaderData } from "react-router-dom";
import Carrusel from "./Carrusel";

const Home = () => {
  const { populares, topRated } = useLoaderData();

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Container maxWidth="xl" style={{padding: 0, maxWidth: "100%", width: "100%"}}>
            <Carrusel
              peliculas={populares}
            />
          </Container>
        </Grid>

        <Grid
          container item xs={12} spacing={12} height="80vh"
        >
          <Grid item xs={1}/>
          <Grid item xs={5}>
            <Paper elevation={3}>
              <ListaPeliculas 
                titulo={"Películas Populares"}
                peliculas={populares}
              />
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper elevation={3}>
              <ListaPeliculas 
                titulo={"Películas Mejor Puntuadas"}
                peliculas={topRated}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;