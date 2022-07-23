import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const seceret = process.env.AUTH_SECRET;
const domain = process.env.DOMAIN;

export default function middleware(request) {
	const { cookies } = request;

	const jwt = cookies.peculynCom;

	if (request.nextUrl.pathname.startsWith("/login")) {
		if (jwt) {
			try {
				const user = verify(jwt, seceret);
				if (user.account == "user") {
					return NextResponse.redirect(
						new URL("/account", request.url)
					);
				} else {
					return NextResponse.redirect(
						new URL("/vendor", request.url)
					);
				}
			} catch (error) {
				return NextResponse.next();
			}
		}
	}

	if (request.nextUrl.pathname.startsWith("/account")) {
		if (jwt === undefined) {
			return NextResponse.redirect(new URL("/login", request.url));
		}

		try {
			const user = verify(jwt, seceret);
			if (user.account == "user") {
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
			const user = verify(jwt, seceret);
			if (user.account == "vendor") {
				return NextResponse.next();
			} else {
				return NextResponse.redirect(new URL("/account", request.url));
			}
		} catch (error) {
			return NextResponse.redirect(new URL("/login", request.url));
		}
	}

	return NextResponse.next();
}
