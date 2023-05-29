import React, { useState } from "react";
import { Box,Card, CardMedia, Chip, Grid, Modal, Typography, Stack, IconButton } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';

const colors = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "error"
]

const style = {
  maxWidth: 600,
  width: 600,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: "transparent",
  boxShadow: 24,
};

const Pelicula = () => {
  const { pelicula, videos } = useLoaderData();
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <Grid container sx={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${pelicula.backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
        height: "100vh",
      }}
    >
      <Grid container item xs={12} sx={{backgroundColor: "rgba(65, 25, 50, 0.6)", padding: "20px"}}>
        <Grid item xs={2} />
        <Grid container item xs={8} spacing={3}>
          <Grid item xs={4}>
            <img src={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`} height={"400px"}/>
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={12} sx={{display: "inline-flex", columnGap: "5px", alignItems: "center"}}>
              <Typography color={"white"}>{pelicula.title}</Typography>
              <Typography color={"white"}>-</Typography>
              <Typography color={"white"}>{pelicula.release_date}</Typography>
              <Box>
                {
                  videos.length >= 1 ? <>
                    <IconButton aria-label="delete" onClick={() => setOpenVideo(true)}>
                      <YouTubeIcon sx={{color: "white"}}/>
                    </IconButton>
                    <Modal
                      open={openVideo}
                      onClose={() => setOpenVideo(false)}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Card sx={style}>
                        <CardMedia
                            component='iframe'
                            sx={{ height: 400, bgcolor: "transparent", border: "transparent" }}
                            image={`https://www.youtube.com/embed/${videos[0].key}?autoplay=1&mute=1`}
                            autoPlay
                        />
                      </Card>
                    </Modal>
                  </> : <></>
                }
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography color={"white"}>Sumario</Typography>
              <Typography color={"white"}>{pelicula.overview}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color={"white"}>Géneros</Typography>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1}>
                  {
                    pelicula.genres.map((genre, index) => (
                      <Chip key={genre.id} label={genre.name} color={colors[index % colors.length]} />
                    ))
                  }
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pelicula;