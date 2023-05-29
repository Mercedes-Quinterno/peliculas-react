import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function ListaPeliculas({titulo, peliculas=[], ...props}) {
  return (
    <Grid container item xs={12}>
        <Grid item xs={12}>
            <Typography sx={{ textAlign: 'center', backgroundColor: '#2443f0', color: 'white', borderRadius: '5px 5px 0 0' }} variant="h6">
                {titulo}
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <List 
            sx={{
                overflow: 'auto',
                maxHeight: 300,
            }}
            >
                {
                    peliculas.map((pelicula) => (
                        <ListItem
                            secondaryAction={
                                <Link to={`/pelicula/${pelicula.id}`}>
                                    <IconButton edge="end" aria-label="delete">
                                        <ArrowForwardIcon color="secondary"/>
                                    </IconButton>
                                </Link>
                            }
                            key={pelicula.id}
                        >
                            <ListItemAvatar>
                                <Avatar src={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={pelicula.title}
                                secondary={null}
                            />
                        </ListItem>
                    ))
                }
            </List>
        </Grid>
    </Grid>
  );
}