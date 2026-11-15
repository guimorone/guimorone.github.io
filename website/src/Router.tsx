import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
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

const redirectHome = <Navigate to={urlPaths.HOME} replace />;

const router = createHashRouter([
	{
		path: urlPaths.DEFAULT,
		element: <DefaultPage />,
		children: [
			{ index: true, element: redirectHome },
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
	{ path: '*', element: redirectHome },
]);

export default function Router() {
	return <RouterProvider router={router} future={{ v7_startTransition: false }} />;
}
