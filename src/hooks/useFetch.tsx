"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

type FetchParams = Parameters<typeof fetch>;

const useFetch = () => {
	const router = useRouter();

	const fetchWrapper = useCallback(
		async (...args: FetchParams) => {
			const res = await fetch(...args);

			if (res.status === 401) {
				router.push("/login");
			}

			return res;
		},
		[router]
	);

	return { fetchWrapper };
};

export default useFetch;
