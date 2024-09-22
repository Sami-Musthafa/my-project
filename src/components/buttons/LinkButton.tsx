/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Link, Stack } from '@mui/material';
import React from 'react';

type Props = {
  name: string;
  link?: string;
  icon?: any;
  onClick?: () => void;
};

const LinkButton = (props: Props) => {
  const { name, link, icon, onClick } = props;
  return (
    <Button
      variant='contained'
      sx={{
        width: 150,
        py: 1,
        bgcolor: '#3C3D37',
        ':hover': { bgcolor: 'rgba(60, 61, 55, 0.7)' },
      }}
      component={Link}
      href={link ?? '#'}
      onClick={onClick}
    >
      <Stack
        direction='row'
        spacing={1}
        width={1}
        height={1}
        alignItems='center'
        justifyContent='center'
      >
        {icon}
        <Box>{name}</Box>
      </Stack>
    </Button>
  );
};

export default LinkButton;
