import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import * as React from 'react';
import { Grid } from '@mui/material';
import { MenuList } from './Menu';
import { AddMovieButton } from './AddMovieButton';

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
                        <MenuList />
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
                            display: 'none'
                        }, marginLeft: '64px', width: '100%'
                    })}>
                        <AddMovieButton />
                    </Grid>
                    <Grid sx={(theme) => ({
                        [theme.breakpoints.down("sm")]: {
                            display: 'none',
                        }, display: 'flex', alignItems: 'center', position: 'relative'
                    })}>
                        <MenuList />
                        <NotificationsOutlinedIcon sx={{
                            marginRight: '40px',
                            zIndex: '10000'
                        }} />
                        <div style={{
                            background: '#64EEBC',
                            borderRadius: '50%',
                            width: 9,
                            height: 9,
                            position: 'absolute',
                            top: 10,
                            left: '65.5%',
                            zIndex: '10000'
                        }}></div>
                    </Grid>
                    <Avatar sx={(theme) => ({ [theme.breakpoints.up("sm")]: { zIndex: '10000' } })} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}