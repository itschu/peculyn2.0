import Link from "next/link";

const SignIn = () => {
	return (
		<div className="justify-center flex pt-10">
			<div className="m-7 md:m-10 w-full md:w-fit ">
				<h2 className="text-center mb-5 text-2xl font-semibold">
					Login
				</h2>

				<div className="border py-10 px-10 md:px-14 flex flex-col md:items-center">
					<div className="mb-6">
						<label style={{ fontSize: 15 }}>Username</label>
						<input
							className="input"
							type={"text"}
							name="username"
						/>
					</div>

					<div className="mb-6">
						<label style={{ fontSize: 15 }}>Password</label>
						<input
							className="input"
							type={"password"}
							name="password"
						/>
					</div>

					<div className="mb-6 self-center">
						<button className="bg-primary-650 px-6 py-2 font-semibold rounded-md text-sm">
							Log in
						</button>
					</div>

					<Link href={"#"}>
						<span className="self-start">Forgot password?</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
