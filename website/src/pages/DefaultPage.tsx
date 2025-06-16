import { useEffect } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Center from '../components/Center';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { HOME, SKILLS } from '../constants/paths';
import { getDocumentTitle } from '../utils';
import { useDocumentTitle } from '../utils/hooks';

export default function DefaultPage() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [_, setDocumentTitle] = useDocumentTitle();

	useEffect(() => {
		if (pathname !== SKILLS) window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		if (pathname === '/') navigate(HOME);
		else setDocumentTitle(getDocumentTitle(pathname));
	}, [navigate, pathname, setDocumentTitle]);

	return (
		<div className="flex flex-col justify-between min-h-screen mx-auto">
			<Navbar />
			<Center className="flex-col w-full px-6 py-12 lg:px-8 max-w-7xl" HtmlTag="main">
				<Outlet />
			</Center>
			<Footer />
		</div>
	);
}
