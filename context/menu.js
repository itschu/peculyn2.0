import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

const Menu = createContext();

const MenuContext = ({ children }) => {
	const [showMenu, setShowMenu] = useState(false);

	const router = useRouter();
	const handleRouteChange = () => setShowMenu(false);

	useEffect(() => {
		router.events.on("routeChangeStart", handleRouteChange);

		return () => {
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, [router]);

	return (
		<Menu.Provider value={{ showMenu, setShowMenu }}>
			{children}
		</Menu.Provider>
	);
};

const useMenu = () => useContext(Menu);

export { MenuContext, useMenu };
