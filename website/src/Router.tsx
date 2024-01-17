import { redirect, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
import DefaultPage from './pages/DefaultPage';
import Home from './pages/Home';
import About from './pages/About';
import Academic from './pages/Academic';
import Jobs from './pages/Jobs';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Games from './pages/Games';
import * as urlPaths from './constants/paths';

const router = createBrowserRouter([
	{
		path: urlPaths.DEFAULT,
		element: <DefaultPage />,
		children: [
			{ path: urlPaths.HOME, element: <Home /> },
			{ path: urlPaths.ABOUT, element: <About /> },
			{ path: urlPaths.ACADEMIC, element: <Academic /> },
			{ path: urlPaths.JOBS, element: <Jobs /> },
			{ path: urlPaths.SKILLS, element: <Skills /> },
			{ path: urlPaths.PROJECTS, element: <Projects /> },
			{ path: urlPaths.GAMES, element: <Games /> },
		],
	},
	{ path: '*', loader: () => redirect('/') },
]);

export default function Router() {
	return <RouterProvider router={router} fallbackElement={<Spinner className="h-6 w-6" aria-hidden="true" />} />;
}
