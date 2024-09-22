import CalculatorViewPage from '@/src/pages/calculator/CalculatorViewPage';

export const generateMetadata = () => {
  return {
    title: 'AM Calculator',
    description:
      'Calculator for gold rate check. One stop for all Business sales',
  };
};

const CalculatorPage = () => {
  return <CalculatorViewPage />;
};

export default CalculatorPage;
