import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));

import {CustomStatusBar} from '@components';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NetworkProvider} from './src/contexts';
import AppNavigation from './src/navigation';

const queryClient = new QueryClient();
const App = () => {
  return (
    <PaperProvider>
      <CustomStatusBar />
      <QueryClientProvider client={queryClient}>
        <NetworkProvider>
          <AppNavigation />
        </NetworkProvider>
      </QueryClientProvider>
    </PaperProvider>
  );
};

export default App;
