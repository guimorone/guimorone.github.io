import Center from '@/components/Center';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { getDocumentTitle } from '@/utils';
import { useDocumentTitle } from '@/utils/hooks';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

export default function DefaultPage() {
	const { pathname } = useLocation();

	useDocumentTitle(getDocumentTitle(pathname));

	return (
		<div className="flex flex-col justify-between min-h-screen mx-auto">
			<ScrollRestoration />
			<Navbar />
			<Center className="flex-col w-full px-6 py-12 lg:px-8 max-w-7xl" HtmlTag="main">
				<Outlet />
			</Center>
			<Footer />
		</div>
	);
}
