import { ISaleData } from '@/src/types/sales';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';

type Props = {
  id: string;
  sales: ISaleData[];
  loading: boolean;
  handleDelete: (id: string) => void;
};

const SaleCards = (props: Props) => {
  const { id, sales, loading, handleDelete } = props;
  return (
    <Stack spacing={2}>
      {sales.map((item: ISaleData, index) => (
        <Card
          key={item.id}
          sx={{
            minWidth: 275,
            bgcolor: '#ECDFCC',
            // backgroundImage: 'url(/images/silver-background.jpg)',
          }}
        >
          <Stack direction={'row'} justifyContent={'space-between'} p={2}>
            <CardHeader
              title={`Sale ${index + 1}`}
              subheader={`Date: ${new Date(item.createdAt).toLocaleDateString(
                'en',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                }
              )}`}
              sx={{ py: 0, px: 2 }}
            />
            <Stack direction={'row'} spacing={2} alignItems={'center'}>
              <Button
                component={Link}
                href={`/sales/${item.id}/edit-sale`}
                color='info'
                variant='contained'
                sx={{ height: 32 }}
              >
                <MdModeEdit />
              </Button>
              <LoadingButton
                loading={item.id === id ? loading : false}
                color='error'
                variant='contained'
                sx={{ height: 32 }}
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                <MdDelete />
              </LoadingButton>
            </Stack>
          </Stack>
          <CardContent sx={{ px: 4 }}>
            <Typography textTransform='capitalize'>
              Customer: {item.customerName}
            </Typography>
            <Typography>Quantity: {item.quantity} gm</Typography>
            <Typography>Amount: {item.cost}</Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default SaleCards;
