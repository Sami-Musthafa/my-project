'use client';
import { CREATE_SALE } from '@/src/graphql/sales';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import SaleEditForm from '@/src/sections/sales/SaleEditForm';
import { ISaleData } from '@/src/types/sales';
import { toast } from 'sonner';

const CreateSalesPage = () => {
  const router = useRouter();
  const [createSale, { loading }] = useMutation(CREATE_SALE);

  const onSubmit = async (data: ISaleData) => {
    const { quantity, cost, customerName } = data;
    try {
      await createSale({
        variables: {
          input: {
            quantity: Number(quantity),
            cost: Number(cost),
            customerName,
          },
        },
      });
      router.push('/sales');
    } catch (error) {
      toast.error('Something went wrong');
      console.log('Something went wrong', error);
    }
  };

  return <SaleEditForm onSubmit={onSubmit} loading={loading} />;
};

export default CreateSalesPage;
