const NigStates = ({ userDetails, setUserDetails }) => {
	return (
		<div className="flex flex-col mt-5">
			<label>
				State <span className="important">*</span>
			</label>
			<select
				className="input md:w-full pr-2"
				value={userDetails.state}
				onChange={(e) =>
					setUserDetails({
						...userDetails,
						state: e.target.value,
					})
				}
				required
			>
				<option value={""} disabled>
					Select an option...
				</option>
				<option value={"Abia"}>Abia</option>
				<option value={"Adamawa"}>Adamawa</option>
				<option value={"Akwa Ibom"}>Akwa Ibom</option>
				<option value={"Anambra"}>Anambra</option>
				<option value={"Bauchi"}>Bauchi </option>
				<option value={"Bayelsa"}>Bayelsa </option>
				<option value={"Benue"}>Benue </option>
				<option value={"Borno"}>Borno </option>
				<option value={"Cross River"}>Cross River</option>
				<option value={"Delta"}>Delta </option>
				<option value={"Ebonyi"}>Ebonyi </option>
				<option value={"Edo"}>Edo </option>
				<option value={"Ekiti"}>Ekiti </option>
				<option value={"Enugu"}>Enugu </option>
				<option value={"Imo"}>Imo </option>
				<option value={"Jigawa"}>Jigawa </option>
				<option value={"Kaduna"}>Kaduna </option>
				<option value={"Kano"}>Kano </option>
				<option value={"Katsina"}>Katsina </option>
				<option value={"Kebbi"}>Kebbi </option>
				<option value={"Kogi"}>Kogi </option>
				<option value={"Kwara"}>Kwara </option>
				<option value={"Lagos"}>Lagos </option>
				<option value={"Nasarawa"}>Nasarawa </option>
				<option value={"Niger"}>Niger </option>
				<option value={"Ogun"}>Ogun </option>
				<option value={"Ondo"}>Ondo </option>
				<option value={"Osun"}>Osun </option>
				<option value={"Oyo"}>Oyo </option>
				<option value={"Plateau"}>Plateau </option>
				<option value={"Rivers"}>Rivers </option>
				<option value={"Sokoto"}>Sokoto </option>
				<option value={"Taraba"}>Taraba </option>
				<option value={"Yobe"}>Yobe </option>
				<option value={"Zamfara "}>Zamfara </option>
				<option value={"FCT "}>FCT </option>
			</select>
		</div>
	);
};

export default NigStates;
