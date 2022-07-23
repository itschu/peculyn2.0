import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserDetails = createContext();

const UserContext = ({ children }) => {
	const [user, setUser] = useState({
		loggedIn: false,
		ready: false,
		info: {},
	});

	useEffect(() => {
		const userInfo = JSON.parse(sessionStorage.getItem("user"));
	}, []);

	const protectedPage = () => {
		if (!user.loggedIn) {
			const router = useRouter();
			router.push(`/account/login`);
		}
	};

	return (
		<UserDetails.Provider value={{ user, setUser, protectedPage }}>
			{children}
		</UserDetails.Provider>
	);
};

const useUser = () => useContext(UserDetails);

export { UserContext, useUser };
