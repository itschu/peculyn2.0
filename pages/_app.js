import { SelectedProductContext } from "../context/selectedProduct";
import { AllProductsContext } from "../context/products";
import { CartProvider } from "../context/cart";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { UserContext } from "../context/user";

function MyApp({ Component, pageProps: { ...pageProps } }) {
	return (
		<UserContext>
			<SelectedProductContext>
				<AllProductsContext>
					<CartProvider>
						<NextNProgress />
						<Component {...pageProps} />
					</CartProvider>
				</AllProductsContext>
			</SelectedProductContext>
		</UserContext>
	);
}

export default MyApp;
