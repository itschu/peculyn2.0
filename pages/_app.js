// import { SessionProvider } from "next-auth/react";
import { SelectedProductContext } from "../context/selectedProduct";
import { AllProductsContext } from "../context/products";
import { CartProvider } from "../context/cart";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		// <SessionProvider session={session}>
		<SelectedProductContext>
			<AllProductsContext>
				<CartProvider>
					<NextNProgress />
					<Component {...pageProps} />
				</CartProvider>
			</AllProductsContext>
		</SelectedProductContext>
		// </SessionProvider>
	);
}

export default MyApp;
