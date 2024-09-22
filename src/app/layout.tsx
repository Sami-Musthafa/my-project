import type { Metadata } from 'next';
import CommonLayout from '../layouts/CommonLayout';
import { Suspense } from 'react';
import { ApolloClientProvider } from '../lib/ApolloClientProvider';
import { Container } from '@mui/material';
import { Toaster } from 'sonner';
import Favicon from '/public/favicon.ico';
import LoadingScreen from '../components/loading-screen/LoadingScreen';

export const metadata: Metadata = {
  title: 'AM Sales',
  description: 'One stop for all sales',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body>
        <ApolloClientProvider>
          <Suspense fallback={<LoadingScreen />}>
            <CommonLayout>
              <Toaster richColors position='top-right' closeButton />
              <Container maxWidth='md'>{children}</Container>
            </CommonLayout>
          </Suspense>
        </ApolloClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
