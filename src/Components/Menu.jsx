import { MenuItem, IconButton } from '@mui/material';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import { useState } from 'react';
import '../App.css';
import { StyledMenu } from '../Styles/theme';
import { AddMovieButton } from './AddMovieButton';

export const MenuList = () => {
    const menuOptions = [
        { label: 'Inicio', field: 'home' },
        { label: 'Series', field: 'serie' },
        { label: 'Peliculas', field: 'movie' },
        { label: 'Agregadas recientemente', field: 'add_recently' },
        { label: 'Populares', field: 'popular' },
        { label: 'Mis peliculas', field: 'my_movies' },
        { label: 'Mi lista', field: 'favs' },
        { label: <AddMovieButton />, field: 'add_movie' },
        { label: 'Cerrar Sesion', field: 'log_out' }
    ]

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
            <IconButton onClick={handleClick}>
                <NotesOutlinedIcon sx={{
                    transform: '180deg',
                    marginRight: '40px',
                    color: '#FFF'
                }} />
            </IconButton>
            <StyledMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={(theme) => ({
                    [theme.breakpoints.up("sm")]: {
                        letterSpacing: '4px',
                        width: 761,
                    }, [theme.breakpoints.down("sm")]: { '& .MuiPaper-root': { left: '0 !important' } }
                })}>
                {menuOptions.map((option, index) =>
                    option.field === 'add_movie' ?
                        <MenuItem key={index} sx={{ margin: '22px 0' }} onClick={e => handleClose(e)}>
                            {option.label}
                        </MenuItem>
                        :
                        <MenuItem key={index} onClick={e => handleClose(e)}>
                            {option.label}
                        </MenuItem>
                )}
            </StyledMenu>
        </>
    );
}