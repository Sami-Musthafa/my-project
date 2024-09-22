import { CircularProgress, Stack } from '@mui/material';

const LoadingScreen = () => {
  return (
    <Stack
      zIndex={10000}
      height={'100vh'}
      width={'100vw'}
      alignItems='center'
      justifyContent='center'
    >
      <CircularProgress color='inherit' />
    </Stack>
  );
};

export default LoadingScreen;
