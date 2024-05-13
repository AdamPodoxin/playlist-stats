const generateRandomString = (length: number) => {
	const possible =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const values = crypto.getRandomValues(new Uint8Array(length));

	return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

const sha256 = async (plain: string) => {
	const encoder = new TextEncoder();
	const data = encoder.encode(plain);

	return await window.crypto.subtle.digest("SHA-256", data);
};

const base64encode = (input: ArrayBuffer) => {
	const inputCharArray = new Uint8Array(input);
	const inputString = String.fromCharCode(...inputCharArray);

	return btoa(inputString)
		.replace(/=/g, "")
		.replace(/\+/g, "-")
		.replace(/\//g, "_");
};

export const generateCodeVerifier = () => generateRandomString(64);

export const generateCodeChallenge = async (codeVerifier: string) => {
	const hashed = await sha256(codeVerifier);
	const codeChallenge = base64encode(hashed);

	return codeChallenge;
};
