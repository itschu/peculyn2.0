const Banks = ({ userDetails, setUserDetails }) => {
	return (
		<div className="w-full">
			<label>
				Bank<span className="important">*</span>
			</label>

			<select
				className="input md:w-full"
				value={userDetails.bank}
				onChange={(e) =>
					setUserDetails({
						...userDetails,
						bank: e.target.value,
					})
				}
				required
			>
				<option value={""} disabled>
					Select a bank...
				</option>

				<option value={"Access Bank Plc"}>Access Bank Plc </option>
				<option value={"Citibank Nigeria Limited"}>
					Citibank Nigeria Limited
				</option>
				<option value={"Ecobank Nigeria Plc"}>
					Ecobank Nigeria Plc
				</option>
				<option value={"Fidelity Bank Plc"}>Fidelity Bank Plc </option>
				<option value={"FIRST BANK NIGERIA LIMITED"}>
					FIRST BANK NIGERIA LIMITED
				</option>
				<option value={"First City Monument Bank Plc"}>
					First City Monument Bank Plc
				</option>
				<option value={"Globus Bank Limited"}>
					Globus Bank Limited
				</option>
				<option value={"Guaranty Trust Bank Plc"}>
					Guaranty Trust Bank Plc
				</option>
				<option value={"Heritage Banking Company Ltd."}>
					Heritage Banking Company Ltd.
				</option>
				<option value={"Keystone Bank Limited"}>
					Keystone Bank Limited
				</option>
				<option value={"Parallex Bank Ltd"}>Parallex Bank Ltd </option>
				<option value={"Polaris Bank Plc"}>Polaris Bank Plc </option>
				<option value={"Premium Trust Bank"}>Premium Trust Bank</option>
				<option value={"Providus Bank"}>Providus Bank </option>
				<option value={"STANBIC IBTC BANK PLC"}>
					STANBIC IBTC BANK PLC
				</option>
				<option value={"Standard Chartered Bank Nigeria Ltd."}>
					Standard Chartered Bank Nigeria Ltd.
				</option>
				<option value={"Sterling Bank Plc"}>Sterling Bank Plc </option>
				<option value={"SunTrust Bank Nigeria Limited"}>
					SunTrust Bank Nigeria Limited
				</option>
				<option value={"Titan Trust Bank Ltd"}>
					Titan Trust Bank Ltd
				</option>
				<option value={"Union Bank of Nigeria Plc"}>
					Union Bank of Nigeria Plc
				</option>
				<option value={"United Bank For Africa Plc"}>
					United Bank For Africa Plc
				</option>
				<option value={"Unity Bank Plc"}>Unity Bank Plc </option>
				<option value={"Wema Bank Plc"}>Wema Bank Plc </option>
				<option value={"Zenith Bank Plc"}>Zenith Bank Plc </option>
			</select>
		</div>
	);
};

export default Banks;
