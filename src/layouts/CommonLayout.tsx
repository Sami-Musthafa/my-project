import { Box, Stack } from '@mui/material';
import { HEADER } from '../constants/ui-constants';
import Header from '../components/header/Header';
// import Footer from '@/components/Footer';
import '../app/globals.css';

type Props = {
  children: React.ReactNode;
};

const CommonLayout = (props: Props) => {
  const { children } = props;

  return (
    <Stack zIndex={1}>
      <Header />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          px: 2,
          pt: `${HEADER.desktopHeight}px`,
          '@media (max-width: 600px)': {
            px: 0,
            pt: 0,
          },
        }}
      >
        {children}
      </Box>
      {/* <Footer /> */}
    </Stack>
  );
};

export default CommonLayout;
