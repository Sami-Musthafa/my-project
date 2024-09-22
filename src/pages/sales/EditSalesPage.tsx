'use client';
import { SINGLE_SALE, UPDATE_SALE } from '@/src/graphql/sales';
import SaleEditForm from '@/src/sections/sales/SaleEditForm';
import { ISaleData } from '@/src/types/sales';
import { useMutation, useSuspenseQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

const EditSalesPage = () => {
  const params = useParams();
  const id = params.id;
  const [updateSale, { loading }] = useMutation(UPDATE_SALE);

  const { data } = useSuspenseQuery<{ findOneSale: ISaleData }>(SINGLE_SALE, {
    fetchPolicy: 'no-cache',
    variables: {
      id,
    },
  });

  const onSubmit = async (data: ISaleData) => {
    const { quantity, cost, customerName } = data;
    try {
      await updateSale({
        variables: {
          id,
          input: {
            quantity,
            cost,
            customerName,
          },
        },
      });
      toast.success('Sale updated successfully');
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };

  return (
    <SaleEditForm
      onSubmit={onSubmit}
      sale={data?.findOneSale}
      loading={loading}
    />
  );
};

export default EditSalesPage;
