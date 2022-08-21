import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import styles from './NavItem.module.scss';

const NavItem = ({ navItem }) => {
	const { name, href } = navItem;
	const router = useRouter();
	const [isCurrentPage, setCurrentPage] = useState(false);

	const onRouteChangeDone = useCallback(
		(pathname) => {
			if (href === pathname) {
				return setCurrentPage(true);
			}
			return setCurrentPage(false);
		},
		[href]
	);

	useEffect(() => {
		router.events.on('routeChangeComplete', onRouteChangeDone);
		return () => {
			router.events.off('routeChangeComplete', onRouteChangeDone);
		};
	}, [onRouteChangeDone, router.events]);

	useEffect(() => {
		if (window.location.pathname === href) {
			return setCurrentPage(true);
		}
		return setCurrentPage(false);
	}, [href]);

	return isCurrentPage ? (
		<li className='menu-anim-item'>
			<p className={styles.active}>{name}</p>
		</li>
	) : (
		<li className='menu-anim-item'>
			<Link href={href}>
				<a>{name}</a>
			</Link>
		</li>
	);
};

export default NavItem;
