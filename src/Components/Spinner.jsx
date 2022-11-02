import { Box, CircularProgress } from '@mui/material';

export const Spinner = () => {
  return (
    <>
    <Box
          sx={{
            display: 'flex',
            backgroundColor: 'rgba(0,0,0,0.5)',
            position: 'fixed',
            width: '100%',
            height: '100%',
            opacity: '1',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '9999999',
            transition: 'all 1s ease-in-out'
          }}>
          <CircularProgress sx={{color: '#64EEBC'}}
            ></CircularProgress>
        </Box>
    </>
  );
};