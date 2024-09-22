'use client';
import { ALL_SALES, REMOVE_SALE } from '@/src/graphql/sales';
import SaleCards from '@/src/components/sales/SaleCards';
import { ISaleData } from '@/src/types/sales';
import { useLazyQuery, useMutation } from '@apollo/client';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { IoAddCircleOutline } from 'react-icons/io5';
import DateFilterDialog from '@/src/components/sales/DateFilterDialog';
import dayjs from 'dayjs';
import LoadingScreen from '@/src/components/loading-screen/LoadingScreen';
import LinkButton from '@/src/components/buttons/LinkButton';

const SalesView = () => {
  const [sales, setSales] = useState<ISaleData[]>([]);
  const [deleteState, setDeleteState] = useState({
    loading: false,
    id: '',
  });
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState<string | null>(
    dayjs().format('YYYY-MM-DD')
  );
  const [endDate, setEndDate] = useState<string | null>(
    dayjs().format('YYYY-MM-DD')
  );
  const [removeSale, { loading: deleteLoading }] = useMutation(REMOVE_SALE);

  // const { data } = useSuspenseQuery<{ findSales: ISaleData[] }>(ALL_SALES, {
  //   fetchPolicy: 'no-cache',
  // });
  // console.log(data);
  //why in terminal

  const [findSales, { loading }] = useLazyQuery(ALL_SALES, {
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      setSales(data.findSales);
      setDeleteState({ loading: false, id: '' });
    },
  });

  const fetchSales = useCallback(() => {
    findSales();
  }, [findSales]);

  const toggleDialog = () => {
    setOpen(!open);
  };

  const onDateChange = (date: string | null, type: 'start' | 'end') => {
    if (type === 'start') {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const onDateSubmit = () => {
    findSales({
      variables: {
        filter: {
          startDate,
          endDate,
        },
      },
    });
  };

  const handleDelete = async (id: string) => {
    setDeleteState({ loading: true, id });
    try {
      await removeSale({
        variables: {
          id,
        },
      });
      toast.success('Sale deleted successfully');
      fetchSales();
    } catch (error) {
      toast.error('Something went wrong');
      setDeleteState({ loading: false, id: '' });
      console.log('Something went wrong', error);
    }
  };

  useEffect(() => {
    fetchSales();
  }, [fetchSales]);

  useEffect(() => {
    const length = sales.length;
    if (length > 0) {
      setStartDate(dayjs(sales[0]?.createdAt).format('YYYY-MM-DD'));
      setEndDate(dayjs(sales[length - 1]?.createdAt).format('YYYY-MM-DD'));
    }
  }, [sales]);

  const deleteloading = deleteLoading || deleteState.loading;

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Stack sx={{ p: 2 }}>
      <Typography variant='h4' textAlign='center'>
        Sales
      </Typography>
      <Stack>
        <Button
          variant='contained'
          color='info'
          sx={{
            py: 1,
            width: { xs: 1, md: 150 },
            alignSelf: 'flex-end',
          }}
          onClick={() => setOpen(true)}
        >
          Filter By Date
        </Button>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          py={2}
        >
          <Stack
            justifyContent='center'
            sx={{
              bgcolor: '#3C3D37',
              color: '#ffffff',
              fontSize: 14,
              py: 0.5,
              px: 1,
              borderRadius: 1,
            }}
          >
            <Box>Total Sales: {sales.length}</Box>
            <Box>Total Amount: {sales.reduce((a, b) => a + b.cost, 0)}</Box>
          </Stack>

          <LinkButton
            name='Add Sale'
            link='/sales/create-sale'
            icon={<IoAddCircleOutline size={20} />}
          />
        </Stack>
        <SaleCards
          sales={sales}
          id={deleteState.id}
          loading={deleteloading}
          handleDelete={handleDelete}
        />
      </Stack>
      <DateFilterDialog
        open={open}
        startDate={startDate}
        endDate={endDate}
        onDateChange={onDateChange}
        toggleDialog={toggleDialog}
        onSubmit={onDateSubmit}
      />
    </Stack>
  );
};

export default SalesView;
