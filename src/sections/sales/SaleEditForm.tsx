import { Card, CardContent, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateSaleDataSchema, ISaleData } from '@/src/types/sales';
import { LoadingButton } from '@mui/lab';
import { useMemo } from 'react';
import FormProvider from '@/src/components/hook-forms/FormProvider';
import { IoCaretBackOutline } from 'react-icons/io5';
import LinkButton from '@/src/components/buttons/LinkButton';
import { useRouter } from 'next/navigation';

type Props = {
  sale?: ISaleData;
  onSubmit: (data: ISaleData) => void;
  loading?: boolean;
};

const SaleEditForm = (props: Props) => {
  const { sale, onSubmit, loading = false } = props;
  const router = useRouter();
  const defaultValues = useMemo(
    () => ({
      id: sale?.id ?? '',
      customerName: sale?.customerName ?? '',
      cost: sale?.cost ?? undefined,
      quantity: sale?.quantity ?? undefined,
    }),
    [sale]
  );

  const methods = useForm<ISaleData>({
    resolver: zodResolver(CreateSaleDataSchema),
    defaultValues,
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = methods;

  return (
    <Stack sx={{ pt: 2 }}>
      <LinkButton
        name='Back'
        icon={<IoCaretBackOutline />}
        onClick={() => router.back()}
      />
      <Stack alignItems='center' justifyContent='center' pt={2}>
        <Card sx={{ bgcolor: '#ECDFCC', p: 2, width: 300 }}>
          <CardContent>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                <TextField
                  label='Customer Name'
                  type='string'
                  variant='filled'
                  {...register('customerName')}
                  error={!!errors.customerName}
                  helperText={errors.customerName?.message}
                />
                <TextField
                  label='Quantity'
                  type='number'
                  variant='filled'
                  {...register('quantity')}
                  error={!!errors.quantity}
                  helperText={errors.quantity?.message}
                />
                <TextField
                  label='Cost'
                  type='number'
                  variant='filled'
                  {...register('cost')}
                  error={!!errors.cost}
                  helperText={errors.cost?.message}
                />
                <LoadingButton
                  loading={loading}
                  type='submit'
                  variant='contained'
                  color='secondary'
                >
                  Submit
                </LoadingButton>
              </Stack>
            </FormProvider>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};

export default SaleEditForm;
