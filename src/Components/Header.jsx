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
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: '#64EEBC' }}>
                    <b>LITE</b>FLIX
                    </Typography>
                    <NotesOutlinedIcon sx={{ transform: '180deg' }} />
                    <NotificationsOutlinedIcon sx={{ marginLeft: '40px' }} />
                    <Avatar sx={{ marginLeft: '40px' }} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}