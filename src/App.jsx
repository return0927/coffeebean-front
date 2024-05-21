import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

const pages = import.meta.glob('./pages/**/*.jsx', { eager: true });
const routes = [];

// eslint-disable-next-line no-restricted-syntax
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) continue;

  const normalizedPathName = fileName.includes('$')
    ? fileName.replace('$', ':')
    : fileName.replace(/\/index/, '');

  routes.push({
    path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
  console.log(routes.at(routes.length - 1));
}

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  }))
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
