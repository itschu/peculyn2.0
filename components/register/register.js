import Link from "next/link";
import ErrorMsg from "../errorMsg";
import SuccessMsg from "../successMsg";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

const initialState = {
	show: false,
	status: false,
	message: "",
};

const Register = ({ setLoading, setUploadStatus }) => {
	const router = useRouter();

	const isVendor = router.query.vendor || "no";

	const email = useRef(null);
	const phone = useRef(null);
	const password = useRef(null);
	const rePassword = useRef(null);

	const [message, setMessage] = useState(initialState);
	const handleRegister = async (e) => {
		e.preventDefault();

		if (
			email.current.value === "" ||
			phone.current.value === "" ||
			password.current.value === "" ||
			rePassword.current.value === ""
		)
			return setMessage({
				...message,
				show: true,
				status: false,
				message: "No field can be left empty",
			});

		if (password.current.value !== rePassword.current.value)
			return setMessage({
				...message,
				show: true,
				status: false,
				message: "Passwords do not match",
			});

		setLoading(true);
		setUploadStatus("Creating your account");

		const data = {
			email: email.current.value,
			phone: phone.current.value,
			password: password.current.value,
			rePassword: rePassword.current.value,
			vendor: isVendor,
		};

		setMessage(initialState);

		const res = await fetch(`/api/auth/register`, {
			method: "Post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const response = await res.json();

		if (response.message === "Account created successfully") {
			setMessage({
				...message,
				show: true,
				status: true,
				message: "Account was created successfully, please log in",
			});
		} else {
			setMessage({
				...message,
				show: true,
				status: false,
				message: response.message,
			});
		}

		setLoading(false);
		setUploadStatus("");
	};

	return (
		<div className="justify-center flex pt-10">
			<div className="m-7 md:m-10 w-full md:w-fit ">
				<h2 className="text-center mb-5 text-2xl font-semibold">
					{`Create ${
						isVendor === "true" ? "a Vendor" : "an"
					} Account`}
				</h2>

				{message.status === false && (
					<ErrorMsg error={message} setError={setMessage} />
				)}

				{message.status === true && (
					<SuccessMsg success={message} setSuccess={setMessage} />
				)}

				<form
					onSubmit={(e) => handleRegister(e)}
					method={"post"}
					className="border py-10 px-5 md:px-10 flex flex-col md:items-center mt-5"
				>
					<div className="mb-6">
						<label style={{ fontSize: 15 }}>Email</label>
						<input
							className="input"
							type={"email"}
							name="email"
							ref={email}
							required
						/>
					</div>

					<div className="mb-6">
						<label style={{ fontSize: 15 }}>Phone Number</label>
						<input
							className="input"
							type={"text"}
							name="phone_num"
							ref={phone}
							required
						/>
					</div>

					<div className="mb-6">
						<label style={{ fontSize: 15 }}>Password</label>
						<input
							className="input"
							type={"password"}
							name="password"
							ref={password}
							required
						/>
					</div>

					<div className="mb-6">
						<label style={{ fontSize: 15 }}>Re-Type Password</label>
						<input
							ref={rePassword}
							className="input"
							type={"password"}
							name="password"
							required
						/>
					</div>

					<div className="mb-6 self-center">
						<button
							type="submit"
							className="bg-primary-650 px-6 py-2 font-semibold rounded-md text-sm"
						>
							Create Account
						</button>
					</div>

					<div className="flex justify-between w-full">
						<Link passHref href={"/login"}>
							<span className="self-start cursor-pointer">
								Already have an account? Login here
							</span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
