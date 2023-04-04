import './index.css';
import Header from './layout/Header';
import TodoInput from './components/TodoInput';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
  <>
    <Provider store={store}>
      <Header />
      <TodoInput />
    </Provider>   
  </>
);