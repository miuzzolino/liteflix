import { createTheme, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: 'Bebas Neue',
        letterSpacing: '4px'
    }
});

export const CustomButton = styled(Button)({
    color: '#FFF',
    fontSize: '18px',
    width: '248px',
    height: '56px',
    letterSpacing: '4px'
})

export const CustomText = styled(Typography)({
    color: '#FFF',
    textAlign: 'center',
    letterSpacing: '4px'
})

