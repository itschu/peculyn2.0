import { NextResponse } from "next/server";

const seceret = process.env.AUTH_SECRET;
const domain = process.env.DOMAIN;

export default async function middleware(request, response) {
	const { cookies } = request;
	const jwt = cookies.get(process.env.COOKIE_TOKEN);

	if (request.nextUrl.pathname.startsWith("/login")) {
		if (jwt) {
			try {
				const req = await fetch(`${domain}/api/loggedin`, {
					method: "POST",
					"Content-Type": "application/json",
					Accept: "application/json",
					body: JSON.stringify({ jwt }),
				});

				const res = await req.json();

				if (res.user.account == "user") {
					return NextResponse.redirect(
						new URL("/account", request.url)
					);
				} else {
					return NextResponse.redirect(
						new URL("/vendor", request.url)
					);
				}
			} catch (error) {
				// console.log(error);
				return NextResponse.next();
			}
		}
	}

	if (request.nextUrl.pathname.startsWith("/vendor/orders")) {
		if (jwt === undefined) {
			return NextResponse.redirect(new URL("/login", request.url));
		}

		try {
			const req = await fetch(`${domain}/api/loggedin`, {
				method: "POST",
				"Content-Type": "application/json",
				Accept: "application/json",
				body: JSON.stringify({ jwt }),
			});

			const res = await req.json();
			return NextResponse.next();
		} catch (error) {
			return NextResponse.redirect(new URL("/login", request.url));
		}
	}

	// if (request.nextUrl.pathname.startsWith("/account/orders")) {
	// 	return NextResponse.next();
	// }

	if (request.nextUrl.pathname.startsWith("/account")) {
		if (jwt === undefined) {
			return NextResponse.redirect(new URL("/login", request.url));
		}

		try {
			const req = await fetch(`${domain}/api/loggedin`, {
				method: "POST",
				"Content-Type": "application/json",
				Accept: "application/json",
				body: JSON.stringify({ jwt }),
			});

			const res = await req.json();
			if (res.user.account == "user") {
				return NextResponse.next();
			} else {
				return NextResponse.redirect(new URL("/vendor", request.url));
			}
		} catch (error) {
			return NextResponse.redirect(new URL("/login", request.url));
		}
	}

	if (request.nextUrl.pathname.startsWith("/vendor")) {
		if (jwt === undefined) {
			return NextResponse.redirect(new URL("/login", request.url));
		}

		try {
			const req = await fetch(`${domain}/api/loggedin`, {
				method: "POST",
				"Content-Type": "application/json",
				Accept: "application/json",
				body: JSON.stringify({ jwt }),
			});

			const res = await req.json();
			if (res.user.account == "vendor") {
				return NextResponse.next();
			} else {
				return NextResponse.redirect(new URL("/account", request.url));
			}
		} catch (error) {
			return NextResponse.redirect(new URL("/login", request.url));
		}
	}

	if (request.nextUrl.pathname.startsWith("/checkout")) {
		if (jwt === undefined) {
			return NextResponse.redirect(new URL("/login", request.url));
		}

		try {
			const req = await fetch(`${domain}/api/loggedin`, {
				method: "POST",
				"Content-Type": "application/json",
				Accept: "application/json",
				body: JSON.stringify({ jwt }),
			});

			return NextResponse.next();
		} catch (error) {
			return NextResponse.redirect(new URL("/login", request.url));
		}
	}

	return NextResponse.next();
}
