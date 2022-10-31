import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import { StyledModal } from '../Styles/theme';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const AddMovieButton = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleClose = () => {
        setOpenModal(false)
    }
    return (
        <>
            <Button variant='text'
                sx={{
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '18px',
                    color: '#FFF',
                    justifyContent: 'flex-start',
                    letterSpacing: '4px',
                    padding: 0,
                }}
                onClick={() => setOpenModal(true)}
            >
                <AddIcon sx={{ marginRight: '12px' }} />
                Agregar pelicula
            </Button>
            <StyledModal open={openModal} onClose={handleClose} TransitionComponent={Transition}>
                <DialogTitle sx={{fontWeight: 700, fontSize: '20px', lineHeight: '20px', letterSpacing: '4px',color: '#64EEBC', textAlign: 'center'}}>AGREGAR PELICULA</DialogTitle>
                <DialogContent>
                    <Button variant="contained" component="label">
                        Agregá un archivo o arrastralo y soltalo aquí
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <TextField></TextField>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained">
                        SUBIR PELICULA
                    </Button>
                </DialogActions>
            </StyledModal>
        </>
    )
}