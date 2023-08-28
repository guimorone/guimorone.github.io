import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { capitalizeString } from '../utils';
import { useDocumentTitle } from '../utils/hooks';
import { DEFAULT_DOCUMENT_TITLE } from '../constants';
import { HOME } from '../constants/paths';

export default function DefaultPage() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [_, setDocumentTitle] = useDocumentTitle();
	const [showNavbar, setShowNavbar] = useState<boolean>(true);

	function controlNavbar(this: Window, ev: WheelEvent): void {
		if ('wheelDeltaY' in ev && (ev.wheelDeltaY as number) < 0) setShowNavbar(false);
		else setShowNavbar(true);
	}

	useEffect(() => {
		window.addEventListener('wheel', controlNavbar);

		return () => window.removeEventListener('wheel', controlNavbar);
	}, []);

	useEffect(() => {
		if (pathname === '/') navigate(HOME);
		else setDocumentTitle(capitalizeString(pathname.slice(1)) + ' / ' + DEFAULT_DOCUMENT_TITLE);
	}, [pathname]);

	return (
		<main className="mx-auto max-w-7xl min-h-screen">
			<Navbar show={showNavbar} />
			<Outlet />
			<Footer />
		</main>
	);
}
