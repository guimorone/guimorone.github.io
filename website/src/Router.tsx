import { redirect, createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage';
import Home from './pages/Home';
import * as urlPaths from './constants/paths';

const router = createBrowserRouter([
	{ path: urlPaths.DEFAULT, element: <DefaultPage />, children: [{ path: urlPaths.HOME, element: <Home /> }] },
	{ path: '*', loader: () => redirect('/') },
]);

export default function Router() {
	return <RouterProvider router={router} />;
}
