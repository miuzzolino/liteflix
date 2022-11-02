import { Box, Button, DialogActions, DialogContent, DialogTitle, Grid, InputBase, Slide, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { FileUploader } from "react-drag-drop-files";
import React, { useState } from 'react';
import { CustomText, StyledModal} from '../Styles/theme';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const fileTypes = ["JPG", "PNG", "GIF"];

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{
            display: 'flex', width: '602px',
            alignItems: 'flex-start',
            flexDirection: 'column',
            margin: 'auto',
            height: '64px'
        }}>
            <Box sx={{ minWidth: 35, letterSpacing: '4px', color: '#FFF' }}>
                <Typography>{`CARGANDO ${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
            <Box sx={{ width: '100%', mt: 2 }}>
                <LinearProgress sx={theme => ({
                    [`&.${linearProgressClasses.colorPrimary}`]: {
                        backgroundColor: theme.palette.grey[200],
                    },
                    [`& .${linearProgressClasses.bar}`]: {
                        height: '10px',
                        backgroundColor: '#64EEBC',
                        top: '-3px'
                    }, overflowX: 'clip', overflowY: 'initial'
                })} variant="determinate" {...props} />
                {props.value !== 100 ?
                    <Button variant='text' sx={{
                        color: '#FFF', fontSize: '16px', letterSpacing: '4px', marginLeft: 'auto',
                        mt: '20px', width: 'fit-content'
                    }}>cancelar</Button>
                    : <Typography sx={{
                        color: '#64EEBC', fontSize: '16px', letterSpacing: '4px', marginLeft: 'auto',
                        mt: '20px', width: 'fit-content'
                    }}>¡LISTO!</Typography>}
            </Box>
        </Box>
    );
}

export const AddMovieButton = () => {
    const [openModal, setOpenModal] = useState(false);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [progress, setProgress] = React.useState(10);
    const [upload, setUpload] = React.useState(false);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const handleChange = (newFile) => {
        setFile(newFile);
    };

    const handleClickSubmit = () => {
        if (!upload) {
            const reader = new FileReader();
            reader.onloadend = () => {
                let prev = JSON.parse(localStorage.getItem('files'))
                prev && prev.push({ img: reader.result, title: title });
                localStorage.setItem('files', prev ? JSON.stringify(prev) : JSON.stringify([{ img: reader.result, title: title }]));
            };
            reader.readAsDataURL(file);
        } else {
            handleClose()
        }
        setUpload(true)
    }

    const handleClose = () => {
        setOpenModal(false)
        setProgress(10)
        setFile(null)
    }
    const handleDisabled = () => {
        if (progress !== 100 || !title) {
            return true
        } else {
            return false
        }
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
                Agregar película
            </Button>
            <StyledModal open={openModal} onClose={handleClose} TransitionComponent={Transition}
                sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                        '& .MuiPaper-root': {
                            minWidth: '100%', minHeight: '100%'
                        }
                    }
                })}>
                <CloseIcon onClick={handleClose} sx={{ margin: '24px 24px 0 auto ', color: '#FFF' }} />
                <DialogTitle sx={{ fontWeight: 700, fontSize: '20px', lineHeight: '20px', letterSpacing: '4px', color: '#64EEBC', textAlign: 'center', marginTop: '24px' }}>AGREGAR PELICULA</DialogTitle>
                <DialogContent sx={{ padding: 0 }}>
                    {!upload ?
                        !(file) ?
                            <Grid sx={(theme) => ({
                                [theme.breakpoints.down("sm")]: {
                                    '& label': {
                                        minWidth: '90% !important'
                                    }
                                },
                                marginTop: '48px', '& label': {
                                    minWidth: '602px',
                                    minHeight: '100px', border: 'dashed 2px #FFF',
                                    fontFamily: 'bebas neue', letterSpacing: '4px',
                                    margin: 'auto', '& svg': { display: 'none' },
                                    '& div span:last-child': { display: 'none' }, '& div span:first-of-type': {
                                        color: '#FFF', fontWeight: 700,
                                        fontSize: '16px', textAlign: 'center'
                                    }, '& div': { justifyContent: 'center' }
                                }
                            })}>
                                <FileUploader label=' Agregá un archivo o arrastralo y soltalo aquí'
                                    name="file" types={fileTypes} handleChange={e => handleChange(e)} />
                            </Grid>
                            :
                            <Box sx={{ width: '100%', mt: '60px', mb: '59px' }}>
                                <LinearProgressWithLabel value={progress} />
                            </Box>
                        :
                        <Grid sx={{ marginTop: '48px' }}>
                            <CustomText>¡Felicitaciones!</CustomText>
                            <CustomText>Liteflix The Movie fue correctamente subida.</CustomText>
                        </Grid>
                    }
                    {!(file) &&
                        <InputBase
                            sx={{
                                color: '#FFF', fontSize: '16px', letterSpacing: '4px',
                                width: '100%', justifyContent: 'center', marginTop: '48px',
                                '& input': {
                                    width: '248px',
                                    textAlign: 'center', borderBottom: 'solid 1px'
                                }
                            }}
                            placeholder="Titulo"
                            inputProps={{ 'aria-label': 'title' }} onChange={e => setTitle(e.target.value)} />

                    }
                </DialogContent>
                <DialogActions sx={{ padding: 0, justifyContent: 'center' }}>
                    <Button variant="contained" disabled={handleDisabled()} onClick={() => handleClickSubmit()} sx={{ width: '248px', height: '56px', fontSize: '18px', letterSpacing: '4px', background: '#FFF', color: '#242424', justifyContent: 'center', margin: '48px 0', '&.Mui-disabled': { background: '#707070', color: '#242424' } }}>
                        {!upload ? 'Subir película' : 'Ir a home'}
                    </Button>
                </DialogActions>
            </StyledModal>
        </>
    )
}