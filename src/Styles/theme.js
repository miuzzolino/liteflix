import { createTheme, Button, Typography, Menu, Dialog } from '@mui/material';
import { styled } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: 'Bebas Neue',
        letterSpacing: '4px'
    },
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

export const StyledModal = styled(Dialog)({
    '& .MuiPaper-root': {
        minWidth: '730px', minHeight: '440px', background: '#242424', margin: 'auto'
    }
})

export const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(() => ({
    '& .MuiPaper-root': {
        top: '0 !important',
        width: 761,
        left: '100% !important',
        background: 'rgba(36, 36, 36, 0.9)',
        height: '100%',
        maxHeight: '97vh',
        maxWidth: '100%',
        paddingRight: '40px',
        '& .MuiMenu-list': {
            marginTop: '157px',
            marginLeft: '88px',
            padding: 0
        },
        '& .MuiMenuItem-root': {
            color: '#FFF',
            fontSize: '22px',
            padding: '0 0 40px 0',
            '&:active': {
                fontWeight: '700',
            },
        },
    }
}));

