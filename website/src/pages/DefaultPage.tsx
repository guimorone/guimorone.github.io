import { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import Center from '../components/Center';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getDocumentTitle } from '../utils';
import { useDocumentTitle } from '../utils/hooks';
import { HOME } from '../constants/paths';

export default function DefaultPage() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [_, setDocumentTitle] = useDocumentTitle();

	useEffect(() => {
		if (pathname === '/') navigate(HOME);
		else setDocumentTitle(getDocumentTitle(pathname));
	}, [pathname]);

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
