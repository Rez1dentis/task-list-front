import './styles/scss/_style.scss';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { ThemeProvider } from './app/provider/ThemeProvider';
import { TaskHandlerProvider } from './app/provider/TaskHandlerProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <TaskHandlerProvider>
      <App />
    </TaskHandlerProvider>
  </ThemeProvider>,
);
