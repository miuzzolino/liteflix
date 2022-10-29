import { Grid } from '@mui/material';
import { useContext } from 'react';
import '../App.css';
import { PageContext } from '../Contexts/PageContext';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { CustomButton, CustomText } from '../Styles/theme';
import { MovieListPreview } from '../Components/MovieListPreview';

export const AppPage = () => {
    const { title } = useContext(PageContext);

    return (
        <>
            <Grid sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {
                    background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(36,36,36,1) 16%, rgba(0,212,255,0) 100%)', display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }
            })}>
                <CustomText sx={(theme) => ({
                    [theme.breakpoints.up("sm")]: { marginTop: '460px' , textAlign: 'left'}, fontSize: '20px', color: '#FFF', marginTop: '214px'
                })}>ORIGINAL DE <b>LITEFLIX</b></CustomText>
                <CustomText sx={(theme) => ({
                    [theme.breakpoints.up("sm")]: { 
                        fontSize: '120px', 
                        marginTop: '24px', 
                        lineHeight: '120px',
                    }, 
                    fontSize: '76px', 
                    color: '#64EEBC', 
                    fontWeight: '700', 
                    width: 'max-content'
                })}>{title}</CustomText>
                <Grid container sx={(theme) => ({
                    [theme.breakpoints.up("sm")]: { justifyContent: 'flex-start', width: 'max-content' }, justifyContent: 'center'
                })}>
                    <CustomButton variant='contained' startIcon={<PlayArrowOutlinedIcon />} sx={(theme) => ({ [theme.breakpoints.down("sm")]: { marginBottom: '16px', marginRight: 0 }, background: '#242424', marginRight: '24px' })}>REPRODUCIR</CustomButton>
                    <CustomButton variant='outlined' startIcon={<AddOutlinedIcon />} sx={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}>MI LISTA</CustomButton>
                </Grid>
            </Grid>
            <Grid sx={(theme) => ({
                [theme.breakpoints.down("sm")]: { background: 'rgb(2,0,36)', alignItems: 'center'},  display: 'flex', flexDirection: 'column', width: '100%',
                alignItems: 'flex-end'
            })}>
                <MovieListPreview />
            </Grid>
        </>
    );
}