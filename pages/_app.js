import { SelectedProductContext } from "../context/selectedProduct";
import { AllProductsContext } from "../context/products";
import { CartProvider } from "../context/cart";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { UserContext } from "../context/user";
import { MenuContext } from "../context/menu";
import { SearchContext } from "../context/search";

function MyApp({ Component, pageProps: { ...pageProps } }) {
	return (
		<MenuContext>
			<UserContext>
				<SelectedProductContext>
					<SearchContext>
						<AllProductsContext>
							<CartProvider>
								<NextNProgress color="#18b7ff" />
								<Component {...pageProps} />
							</CartProvider>
						</AllProductsContext>
					</SearchContext>
				</SelectedProductContext>
			</UserContext>
		</MenuContext>
	);
}

export default MyApp;
