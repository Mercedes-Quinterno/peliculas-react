import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

export default function Peliculas({peliculas, props}) {
  return (
    <ImageList cols={5}>
      {peliculas.map((pelicula) => (
        <Link 
            key={pelicula.id}
            to={`/pelicula/${pelicula.id}`}
        >
            <ImageListItem>
                <img
                    src={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`}
                    alt={pelicula.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={pelicula.title}
                    actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${pelicula.title}`}
                        >
                            <VisibilityIcon />
                        </IconButton>
                    }
                />
            </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}
