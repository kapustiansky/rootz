import styles from './Header.module.scss';
import Link from 'next/link';
import NavList from './NavList';
import Button from '../../ui/Button';
import Logo from '../../ui/Icons/Logo';
import MenuBtn from './MenuBtn';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { menuNavigation, randomColor } from '../../features/mainAnimations';

const data = {
	menu: [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'Our mission',
			href: '/mission',
		},
		{
			name: 'Places',
			href: '/places',
		},
		{
			name: 'Team',
			href: '/team',
		},
	],
};

const Header = () => {
	const [isActiveMenu, setActiveMenu] = useState(false);
	const [isMobile, setMobile] = useState(false);
	const router = useRouter();

	const toggleMenu = () => {
		if (isMobile) setActiveMenu(!isActiveMenu);
	};

	const onRouteChangeDone = useCallback(() => {
		if (isMobile) setActiveMenu(false);
	}, []);

	useEffect(() => {
		router.events.on('routeChangeComplete', onRouteChangeDone);
		return () => {
			router.events.off('routeChangeComplete', onRouteChangeDone);
		};
	}, [useRouter.events]);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');

		if (mediaQuery.matches) {
			setMobile(true);
		} else {
			setMobile(false);
		}

		const resizeThrottler = () => {
			if (mediaQuery.matches) {
				menuNavigation(false);
				setActiveMenu(false);
				setMobile(true);
			} else {
				setActiveMenu(false);
				menuNavigation(true);
				setMobile(false);
			}
		};
		window.addEventListener('resize', resizeThrottler);
		return () => window.removeEventListener('resize', resizeThrottler);
	}, []);

	useEffect(() => {
		if (isActiveMenu && isMobile) {
			menuNavigation(true);
			document.querySelector('body').style.overflow = 'hidden';
		} else if (!isActiveMenu && isMobile) {
			menuNavigation(false);
			document.querySelector('body').style.overflow = 'auto';
		}
	}, [isActiveMenu]);

	useEffect(() => {
		const colorizeEl = document.querySelector('.logo');
		colorizeEl.addEventListener('mouseenter', randomColor);
		return () => {
			colorizeEl.removeEventListener('mouseenter', randomColor);
		};
	}, []);

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header_container}>
					<Link href='/'>
						<a className={styles.logo}>
							<Logo />
						</a>
					</Link>
					<div
						className={`menu-anim-wrapper ${
							styles.menu_container
						} ${isActiveMenu ? 'active' : ''}`}>
						<NavList menu={data.menu} />
						<Button
							type='button'
							text='Apply'
							clazz={'header_apply'}
							animation={'menu-anim-item'}
						/>
					</div>
					<MenuBtn
						toggleMenu={toggleMenu}
						isActiveMenu={isActiveMenu}
					/>
				</div>
				<hr></hr>
			</div>
		</header>
	);
};

export default Header;
