import { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { capitalizeString } from '../utils';
import { useDocumentTitle } from '../utils/hooks';
import { DEFAULT_DOCUMENT_TITLE } from '../constants';
import { HOME } from '../constants/paths';

export default function DefaultPage() {
	const location = useLocation();
	const navigate = useNavigate();
	const [_, setDocumentTitle] = useDocumentTitle();

	useEffect(() => {
		if (location.pathname === '/') navigate(HOME);
		else setDocumentTitle(capitalizeString(location.pathname.slice(1)) + ' / ' + DEFAULT_DOCUMENT_TITLE);
	}, [location]);

	return (
		<main className="mx-auto max-w-7xl min-h-screen">
			<Navbar />
			<Outlet />
			<Footer />
		</main>
	);
}
