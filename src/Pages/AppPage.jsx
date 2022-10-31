import { Button, Grid, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { useContext, useState } from 'react';
import '../App.css';
import { PageContext } from '../Contexts/PageContext';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { CustomButton, CustomText } from '../Styles/theme';
import { MovieListPreview } from '../Components/MovieListPreview';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Check } from '@mui/icons-material';

export const AppPage = () => {
    const { title } = useContext(PageContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const [selected, setSelected] = useState('POPULARES');

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        setSelected(e.currentTarget.innerText ? e.currentTarget.innerText : selected)
    };

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
                    [theme.breakpoints.up("sm")]: { marginTop: '460px', textAlign: 'left' }, fontSize: '20px', color: '#FFF', marginTop: '214px'
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
                [theme.breakpoints.down("sm")]: { background: 'rgb(2,0,36)', alignItems: 'center' }, display: 'flex', flexDirection: 'column', width: '100%',
                alignItems: 'flex-end'
            })}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant='text'
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{ fontSize: '18px', color: '#FFF', letterSpacing: '4px', marginTop: '80px' }}
                >
                    VER:  <b>{selected}</b>
                </Button>
                <Grid sx={{ position: 'relative' }}>
                    {anchorEl &&
                        <Grid sx={(theme) => ({
                            [theme.breakpoints.down("sm")]: { top: '-4px', left: '-50px'},
                            width: '10px',
                            height: '10px',
                            position: 'absolute',
                            top: '-4px',
                            rotate: '45deg',
                            zIndex: 1,
                            left: '-150px',
                            background: '#242424'
                        })}></Grid>}
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        sx={{
                            color: '#FFF',
                            letterSpacing: '4px',
                            fontSize: '18px',
                            justifyContent: 'space-between'
                        }}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button', 'style': { background: '#242424', width: '241px', color: '#FFF' }
                        }}>
                        <MenuItem onClick={e => handleClose(e)}>
                            POPULARES
                            {selected === 'POPULARES' &&
                                <ListItemIcon sx={{ color: '#FFF', marginLeft: 'auto' }}>
                                    <Check />
                                </ListItemIcon>}
                        </MenuItem>
                        <MenuItem onClick={e => handleClose(e)}>
                            MIS PELICULAS
                            {selected === 'MIS PELICULAS' &&
                                <ListItemIcon sx={{ marginLeft: 'auto', color: '#FFF' }}>
                                    <Check />
                                </ListItemIcon>}
                        </MenuItem>
                    </Menu>
                </Grid>
                <MovieListPreview />
            </Grid>
        </>
    );
}