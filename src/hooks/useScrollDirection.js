import { useState, useEffect, useRef } from 'react';

const THRESHOLD = 0;

const useScrollDirection = () => {
	const [isScrollDirection, setScrollDirection] = useState('up');
	const [isScrollY, setScrollY] = useState(null);

	const blocking = useRef(false);
	const prevScrollY = useRef(0);

	useEffect(() => {
		prevScrollY.current = window.pageYOffset;

		const updateScrollDirection = () => {
			const scrollY = window.pageYOffset;
			setScrollY(scrollY);

			if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
				const newScrollDirection =
					scrollY > prevScrollY.current ? 'down' : 'up';

				setScrollDirection(newScrollDirection);

				prevScrollY.current = scrollY > 0 ? scrollY : 0;
			}

			blocking.current = false;
		};

		const onScroll = () => {
			if (!blocking.current) {
				blocking.current = true;
				window.requestAnimationFrame(updateScrollDirection);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [isScrollDirection]);

	return [isScrollDirection, isScrollY];
};

export default useScrollDirection;
