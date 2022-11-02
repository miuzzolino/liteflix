import { Grid, Paper } from '@mui/material';
import { useContext, useState } from 'react';
import '../App.css';
import { PageContext } from '../Contexts/PageContext';
import { CustomText } from '../Styles/theme';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

export const MovieListPreview = () => {
    const { movieList } = useContext(PageContext);
    const [hover, setHover] = useState('')

    return (
        movieList &&
        movieList.map(movie =>
            <Paper key={movie.id} onMouseOver={() => setHover(movie.id)} onMouseOut={() => setHover('')} sx={(theme) => ({
                [theme.breakpoints.up("sm")]: {
                    width: 220,
                    height: 146
                },
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: 327,
                height: 172,
                marginTop: '24px',
                borderRadius: '4px'
            })}>
                {hover === movie.id ?
                    <Paper sx={(theme) => ({
                        [theme.breakpoints.up("sm")]: {
                            width: 220,
                            height: 146
                        },
                        background: 'rgba(36, 36, 36, 0.7)',
                        borderRadius: '4px',
                        width: 327,
                        height: 172,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'end',
                        alignItems: 'center',
                    })}>
                        <Grid sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 16px 20px 16px',
                            width: '100%'
                        }}>
                            <PlayArrowOutlinedIcon sx={(theme) => ({
                                color: '#FFF',
                                background: 'rgba(36, 36, 36, 0.5)',
                                borderRadius: '50%',
                                border: 'solid 2px #FFF',
                                width: 24,
                                height: 24,
                                marginRight: '12px',
                                '&:hover': {
                                    color: '#000',
                                    background: '#64EEBC',
                                    border: 'solid 2px #000'
                                }
                            })} />
                            <CustomText sx={{ fontSize: '16px' }}>
                                {movie.title}
                            </CustomText>
                        </Grid>
                        <Grid sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 16px 16px 16px',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}>
                            <CustomText sx={{ fontSize: '14px', marginRight: 'auto' }}>
                                <StarOutlinedIcon sx={{ color: '#64EEBC', width: 12, height: 12, marginRight: '6px' }} />{movie.vote_average}
                            </CustomText>
                            <CustomText sx={{ fontSize: '14px' }}>
                                {movie.release_date?.slice(0, 4)}
                            </CustomText>
                        </Grid>
                    </Paper>
                    :
                    <Paper sx={(theme) => ({
                        [theme.breakpoints.up("sm")]: {
                            width: 220,
                            height: 146
                        },
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 22.78%, #000000 122.69%)',
                        borderRadius: '4px',
                        width: 327,
                        height: 172,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'end',
                        alignItems: 'center',
                    })}>
                        <PlayArrowOutlinedIcon fontSize='large' sx={(theme) => ({
                            [theme.breakpoints.up("sm")]: {
                                width: 40,
                                height: 40
                            },
                            marginBottom: '24px',
                            color: '#FFF',
                            background: 'rgba(36, 36, 36, 0.5)',
                            borderRadius: '50%',
                            border: 'solid 2px #FFF',
                            width: 48,
                            height: 48
                        })} />
                        <CustomText sx={{ marginBottom: '14px' }}>
                            {movie.title}
                        </CustomText>
                    </Paper>
                }
            </Paper>
        ) 
    )
}