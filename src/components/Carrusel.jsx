import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Container, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

export default function Carrusel({peliculas, ...props})
{

    return (
        <Carousel>
            {
                peliculas.map( (pelicula, i) => <PreviewPelicula key={i} pelicula={pelicula} /> )
            }
        </Carousel>
    )
}

function PreviewPelicula({pelicula, ...props})
{
    return (
        <Container
            sx={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${pelicula.backdrop_path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50%",
                height: "60vh",
            }}
            maxWidth="xl"
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                height={"100%"}
                padding={"20px"}
            >
                <Grid item xs={8} alignSelf="flex-end">
                    <Container 
                        maxWidth={"lg"}
                        sx={{backgroundColor: "rgba(65, 25, 50, 0.6)", padding: "20px"}}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography color="white" variant="h6" align="center">{pelicula.title}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color="white" variant="body2" align="center">{pelicula.overview}</Typography>
                            </Grid>
                            <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                                <Link to={`/pelicula/${pelicula.id}`}>
                                    <Button variant="contained" color="secondary">
                                        Ver más
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}