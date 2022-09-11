import { SelectedProductContext } from "../context/selectedProduct";
import { AllProductsContext } from "../context/products";
import { CartProvider } from "../context/cart";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { UserContext } from "../context/user";
import { MenuContext } from "../context/menu";

function MyApp({ Component, pageProps: { ...pageProps } }) {
	return (
		<MenuContext>
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
		</MenuContext>
	);
}

export default MyApp;
