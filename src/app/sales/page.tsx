import SalesViewPage from '@/src/pages/sales/SalesViewPage';

export const generateMetadata = () => {
  return {
    title: 'AM All Sales',
    description: 'One stop for all Business sales',
  };
};

const SalesPage = () => {
  return <SalesViewPage />;
};

export default SalesPage;
