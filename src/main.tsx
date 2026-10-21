import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const mountApp = () => {
  const container = document.getElementById('root');
  if (container) {
    createRoot(container).render(<App />);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
