import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));

import {CustomStatusBar} from '@components';
import ThemeProvider from '@contexts/ThemeProvider';
import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {Provider as PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NetworkProvider} from './src/contexts';
import i18next from './src/i18n';
import AppNavigation from './src/navigation';

const queryClient = new QueryClient();
const App = () => {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18next}>
        <PaperProvider>
          <CustomStatusBar />
          <QueryClientProvider client={queryClient}>
            <NetworkProvider>
              <AppNavigation />
            </NetworkProvider>
          </QueryClientProvider>
        </PaperProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
