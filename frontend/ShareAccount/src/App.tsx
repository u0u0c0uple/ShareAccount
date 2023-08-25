// library
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Component
import ErrorComponent from './common/ErrorComponent';
import MainContainer from './container/MainContainer';
import AccountContainer from './container/AccountContainer';
// css
import './App.css'

const router = createBrowserRouter([
  { path: '/', element: <MainContainer /> },
  { path: '/account', element: <AccountContainer /> },
])

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

export default App
