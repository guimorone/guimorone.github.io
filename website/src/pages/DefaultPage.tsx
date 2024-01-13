import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import Center from '../components/Center';
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
	const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
	const [showNavbar, setShowNavbar] = useState<boolean>(true);

	/* function controlNavbar(this: Window, ev: WheelEvent): void {
		if ('wheelDeltaY' in ev && (ev.wheelDeltaY as number) < 0) setShowNavbar(false);
		else setShowNavbar(true);
	} */

	function handleScroll(this: Window, _ev: Event) {
		const currentScrollPos = this.scrollY;

		if (currentScrollPos > prevScrollPos) setShowNavbar(false);
		else setShowNavbar(true);

		setPrevScrollPos(currentScrollPos);
	}

	useEffect(() => {
		// window.addEventListener('wheel', controlNavbar);
		window.addEventListener('scroll', handleScroll);

		return () => {
			// window.removeEventListener('wheel', controlNavbar);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (pathname === '/') navigate(HOME);
		else setDocumentTitle(capitalizeString(pathname.slice(1)) + ' / ' + DEFAULT_DOCUMENT_TITLE);
	}, [pathname]);

	return (
		<div className="flex flex-col mx-auto justify-between max-w-7xl min-h-screen">
			<Navbar show={showNavbar} />
			<Center className="flex-col w-full px-6 lg:px-8 py-12" HtmlTag="main">
				<Outlet />
			</Center>
			<Footer />
		</div>
	);
}
