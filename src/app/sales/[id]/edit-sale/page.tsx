import EditSalesPage from '@/src/pages/sales/EditSalesPage';
import React from 'react';

export const generateMetadata = () => {
  return {
    title: 'AM Edit Sale',
    description: 'Edit sale in AM. One stop for all Business sales',
  };
};

const page = () => {
  return <EditSalesPage />;
};

export default page;
