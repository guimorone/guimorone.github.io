import { Spinner } from 'flowbite-react';
import { RouterProvider, createHashRouter, redirect } from 'react-router-dom';

import * as urlPaths from './constants/paths';
import About from './pages/About';
import Certifications from './pages/Certifications';
import DefaultPage from './pages/DefaultPage';
import Education from './pages/Education';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Warehouse from './pages/Warehouse';

import type { FC } from 'react';

const router = createHashRouter([
	{
		path: urlPaths.DEFAULT,
		element: <DefaultPage />,
		children: [
			{ path: urlPaths.HOME, element: <Home /> },
			{ path: urlPaths.ABOUT, element: <About /> },
			{ path: urlPaths.EDUCATION, element: <Education /> },
			{ path: urlPaths.JOBS, element: <Jobs /> },
			{ path: urlPaths.SKILLS, element: <Skills /> },
			{ path: urlPaths.PROJECTS, element: <Projects /> },
			{ path: urlPaths.CERTIFICATIONS, element: <Certifications /> },
			{ path: urlPaths.WAREHOUSE, element: <Warehouse /> },
		],
	},
	{ path: '*', loader: () => redirect(urlPaths.DEFAULT) },
]);

const FallbackElement: FC = () => <Spinner className="w-6 h-6" aria-hidden="true" />;

export default function Router() {
	return <RouterProvider router={router} fallbackElement={<FallbackElement />} />;
}
