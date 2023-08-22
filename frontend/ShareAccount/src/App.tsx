// library
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Component
import ErrorComponent from './common/ErrorComponent';
import MainContainer from './container/MainContainer';
// css
import './App.css'

const router = createBrowserRouter([
  { path: '/', element: <MainContainer /> },
])

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

export default App
