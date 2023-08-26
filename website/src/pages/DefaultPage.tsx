import { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HOME } from '../constants/paths';

export default function DefaultPage() {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === '/') navigate(HOME);
	}, [location]);

	return (
		<main className="mx-auto max-w-7xl min-h-screen">
			<Navbar />
			<Outlet />
			<Footer />
		</main>
	);
}
