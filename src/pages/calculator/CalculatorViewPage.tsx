'use client';
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const CalculatorViewPage = () => {
  const [fieldState, setFieldState] = useState({
    rate: 0,
    karat: 0,
  });

  return (
    <Card sx={{ mt: 2, minWidth: 275, bgcolor: '#ECDFCC' }}>
      <CardHeader title='Gold Rate Calculator' />
      <CardContent>
        <Stack spacing={2}>
          <TextField
            label='Rate'
            type='number'
            variant='filled'
            onChange={(e) => {
              setFieldState({
                karat: fieldState.karat,
                rate: parseInt(e.target.value),
              });
            }}
          />
          <TextField
            label='Karat'
            type='number'
            variant='filled'
            onChange={(e) => {
              setFieldState({
                rate: fieldState.rate,
                karat: parseInt(e.target.value),
              });
            }}
          />
          <Typography>
            Final Rate:{' '}
            {fieldState.rate && fieldState.karat
              ? Math.round(fieldState.rate * (fieldState.karat / 100))
              : 0}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CalculatorViewPage;
