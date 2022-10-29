import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import * as React from 'react';
import { Grid } from '@mui/material';

export default function Header() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar sx={(theme) => ({
                    [theme.breakpoints.up("sm")]: {
                        marginTop: '20px'
                    }, justifyContent: 'space-between', marginTop: '9px'
                })}>
                    <Grid sx={(theme) => ({
                        [theme.breakpoints.up("sm")]: {
                            display: 'none',
                        }, display: 'flex', alignItems: 'center'
                    })}>
                        <NotesOutlinedIcon sx={{
                            transform: '180deg'
                        }} />
                    </Grid>
                    <Typography variant="h4" component="div" sx={(theme) => ({
                        [theme.breakpoints.down("sm")]: {
                            textAlign: 'center',
                            fontSize: '28px'
                        },
                        fontFamily: 'Bebas Neue',
                        letterSpacing: '4px',
                        color: '#64EEBC',
                        flexGrow: 1
                    })} >
                        <b>LITE</b>FLIX
                    </Typography>
                    <Grid sx={(theme) => ({
                        [theme.breakpoints.down("sm")]: {
                            display: 'none',
                        }, display: 'flex', alignItems: 'center', position: 'relative'
                    })}>
                        <NotesOutlinedIcon sx={{
                            transform: '180deg',
                            marginRight: '40px'
                        }} />
                        <NotificationsOutlinedIcon sx={{
                            marginRight: '40px'
                        }} />
                        <div style={{
                            background: '#64EEBC', 
                            borderRadius: '50%', 
                            width: 9, 
                            height: 9, 
                            position: 'absolute',
                            top: 0,
                            left: '60.5%'
                        }}></div>
                    </Grid>
                    <Avatar />
                </Toolbar>
            </AppBar>
        </Box>
    );
}