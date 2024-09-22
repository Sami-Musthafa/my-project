import CreateSalesPage from '@/src/pages/sales/CreateSalesPage';
import React from 'react';

export const generateMetadata = () => {
  return {
    title: 'AM Create Sales',
    description: 'Create sales in AM. One stop for all Business sales',
  };
};

const AddSalePage = () => {
  return <CreateSalesPage />;
};

export default AddSalePage;
