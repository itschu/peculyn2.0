import { truncate } from "../../data";

const VendorOrderTable = ({
	orders,
	productSeen,
	productPerPage,
	currencyFractionDigits,
	navigate,
}) => {
	return (
		<table className="min-w-full leading-normal">
			<thead>
				<tr>
					<th className="th text-left">Product</th>
					<th className="th">Quantity</th>
					<th className="th">Price</th>
					<th className="th">Payment Status</th>
					<th className="th">Amount</th>
					<th className="th">View</th>
				</tr>
			</thead>
			<tbody>
				{orders
					.slice(productSeen, productSeen + productPerPage)
					.map((el, i) => (
						<tr key={i}>
							<td className="table-td text-left">
								<p className="text-gray-900 whitespace-no-wrap text-left">
									{truncate(el.product_name, 26)}
								</p>
							</td>
							<td className="table-td">
								<p className="text-gray-900 whitespace-no-wrap">
									{el.qty}
								</p>
							</td>
							<td className="table-td">
								<p className="text-gray-900 whitespace-no-wrap">
									₦
									{el.price.toLocaleString("en-US", {
										maximumFractionDigits:
											currencyFractionDigits,
									})}
								</p>
							</td>
							<td className="table-td">
								<span className="relative inline-block px-3 py-1 font-semibold leading-tight">
									<span
										aria-hidden
										className={`absolute inset-0 opacity-70 rounded-full ${el.status}`}
									></span>
									<span
										className={`relative text-${el.status}`}
									>
										{el.status}
									</span>
								</span>
							</td>
							<td className="table-td">
								<p className="text-gray-900 whitespace-no-wrap">
									₦
									{(
										parseFloat(el.price) * el.qty
									).toLocaleString("en-US", {
										maximumFractionDigits:
											currencyFractionDigits,
									})}
								</p>
							</td>
							<td className="table-td text-right">
								<button
									type="button"
									className="inline-block text-gray-500 hover:text-gray-700"
									onClick={() => navigate(el, true)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										/>
									</svg>
								</button>
							</td>
						</tr>
					))}
			</tbody>
		</table>
	);
};

export default VendorOrderTable;
