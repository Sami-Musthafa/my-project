'use client';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { Drawer, Stack } from '@mui/material';
import Image from 'next/image';
import logo from '/public/images/logo3.jpg';
import Link from 'next/link';

const pages = ['sales', 'calculator', 'blog'];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack
      direction={'row'}
      spacing={2}
      position='sticky'
      top={0}
      sx={{ background: '#181c14', p: 2, zIndex: 1000 }}
    >
      <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute' }}>
        <IconButton size='large' onClick={() => setOpen(!open)} color='inherit'>
          <GiHamburgerMenu color='#ECDFCC' />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: {
            xs: '100%',
            md: 'auto',
          },
        }}
      >
        <Box component={Link} href='/'>
          <Image
            src={logo}
            width={50}
            alt='logo'
            height={50}
            priority
            style={{ borderRadius: '50%' }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
        }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            component={Link}
            href={`/${page}`}
            onClick={() => {
              setOpen(false);
            }}
            sx={{ my: 1, color: 'white', height: 1 }}
          >
            {page}
          </Button>
        ))}
      </Box>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Stack sx={{ width: 200, pt: 2, bgcolor: '#ECDFCC', height: 1 }}>
          {pages.map((page) => (
            <MenuItem
              key={page}
              component={Link}
              href={`/${page}`}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Typography variant='h6' sx={{ textTransform: 'capitalize' }}>
                {page}
              </Typography>
            </MenuItem>
          ))}
        </Stack>
      </Drawer>
    </Stack>
  );
};

export default Header;
