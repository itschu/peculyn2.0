const UserOrderTable = ({
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
					<th className="th text-left">id</th>
					<th className="th">Initiated</th>
					<th className="th">Amount</th>
					<th className="th">Delivered</th>
					<th className="th">Payment Status</th>
					<th className="th">Info</th>
				</tr>
			</thead>
			<tbody>
				{orders
					.slice(productSeen, productSeen + productPerPage)
					.map((el, i) => (
						<tr key={i}>
							<td className="table-td text-left">
								<p className="text-gray-900 whitespace-no-wrap text-left">
									{el.tran_id}
								</p>
							</td>
							<td className="table-td">
								<p className="text-gray-900 whitespace-no-wrap">
									{el.date_init}
								</p>
							</td>
							<td className="table-td">
								<p className="text-gray-900 whitespace-no-wrap">
									₦
									{el.amount.toLocaleString("en-US", {
										maximumFractionDigits:
											currencyFractionDigits,
									})}
								</p>
							</td>
							<td className="table-td">
								<p className="text-gray-900 whitespace-no-wrap">
									{el.date_finished === "" &&
									el.payment_status === "pending" ? (
										<i>Awaiting payment</i>
									) : el.date_finished === "" &&
									  el.payment_status === "paid" ? (
										<i>Awaiting delivery</i>
									) : el.date_finished !== "" ? (
										el.date_finished
									) : (
										"-"
									)}
								</p>
							</td>
							<td className="table-td">
								<span className="relative inline-block px-3 py-1 font-semibold leading-tight">
									<span
										aria-hidden
										className={`absolute inset-0 opacity-70 rounded-full ${el.payment_status}`}
									></span>
									<span
										className={`relative text-${el.payment_status}`}
									>
										{el.payment_status}
									</span>
								</span>
							</td>
							<td className="table-td text-right">
								<button
									type="button"
									className="inline-block text-gray-500 hover:text-gray-700"
									onClick={() => navigate(el)}
								>
									<svg
										className="inline-block h-6 w-6 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
									</svg>
								</button>
							</td>
						</tr>
					))}
			</tbody>
		</table>
	);
};

export default UserOrderTable;
