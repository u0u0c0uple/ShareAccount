// library
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// Component
import ErrorComponent from './components/common/ErrorComponent';
import MainContainer from './container/MainContainer';
import AccountContainer from './container/AccountContainer';
// css
import './App.css';

const router = createBrowserRouter([
  { path: '/', element: <MainContainer /> },
  { path: '/account/*', element: <AccountContainer /> },
]);

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;
