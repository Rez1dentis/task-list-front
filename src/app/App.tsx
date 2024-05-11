import { Main } from '../pages/Main/Main';
import { AppStoreProvider } from '../store/AppStore/AppSroreProvider';

export const App = (): JSX.Element => {
  return (
    <AppStoreProvider>
      <Main />
    </AppStoreProvider>
  );
};
