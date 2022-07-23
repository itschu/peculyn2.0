import Link from "next/link";
import ErrorMsg from "../errorMsg";
import SuccessMsg from "../successMsg";
import { useState } from "react";
import { useRouter } from "next/router";

const SignIn = ({ setLoading, setUploadStatus }) => {
	const initialState = {
		show: false,
		status: false,
		message: "",
	};

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState(initialState);

	const data = { email, password };
	const router = useRouter();

	const handleLogin = async (e) => {
		e.preventDefault();

		setLoading(true);
		setUploadStatus("logging you in");
		setMessage(initialState);

		const res = await fetch(`/api/auth/login`, {
			method: "Post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const response = await res.json();

		if (response.status !== "ok") {
			setMessage({
				...message,
				show: true,
				status: false,
				message: response.message,
			});

			setLoading(false);
			setUploadStatus("");
			return;
		}

		if (response.message === "success") {
			setMessage({
				...message,
				show: true,
				status: true,
				message: "Login was successful, you will be rediected",
			});

			router.push("/account");
		} else {
			setMessage({
				...message,
				show: true,
				status: false,
				message: "Incorrect email or password",
			});
		}

		setLoading(false);
		setUploadStatus("");
	};

	return (
		<div className="justify-center flex pt-10">
			<div className="m-7 md:m-10 w-full md:w-fit ">
				<h2 className="text-center mb-5 text-2xl font-semibold">
					Login
				</h2>

				{message.status === false && (
					<ErrorMsg error={message} setError={setMessage} />
				)}

				{message.status === true && (
					<SuccessMsg success={message} setSuccess={setMessage} />
				)}

				<form
					onSubmit={(e) => handleLogin(e)}
					method={"post"}
					className="border py-10 px-10 md:px-14 flex flex-col md:items-center mt-5"
				>
					<div className="mb-6">
						<label style={{ fontSize: 15 }}>Email</label>
						<input
							className="input"
							type={"email"}
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>

					<div className="mb-6">
						<label style={{ fontSize: 15 }}>Password</label>
						<input
							className="input"
							type={"password"}
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					<div className="mb-6 self-center">
						<button
							type="submit"
							className="bg-primary-650 px-6 py-2 font-semibold rounded-md text-sm"
						>
							Log in
						</button>
					</div>

					<Link href={"/api/login"}>
						<span className="self-start">Forgot password?</span>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
