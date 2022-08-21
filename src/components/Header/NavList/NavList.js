import NavItem from '../NavItem';
import styles from './Navlist.module.scss';

const NavList = ({ menu }) => {
	return (
		<nav className={styles.menu_nav}>
			<ul>
				{menu.map((i, index) => {
					return <NavItem navItem={i} key={index} />;
				})}
			</ul>
		</nav>
	);
};

export default NavList;
