export const spotify = {
	clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
	clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
	scope: "playlist-read-private",
	redirectUriBase: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI_BASE!,
} as const;
