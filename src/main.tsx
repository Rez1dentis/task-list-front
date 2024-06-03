import './styles/scss/_style.scss';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { ThemeProvider } from './app/provider/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
);
