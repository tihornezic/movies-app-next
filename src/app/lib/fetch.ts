const BASE_URL = "https://api.themoviedb.org/3";

export const fetchInstance = async <T>(
  endpoint: string,
  method = "GET",
  options = {}
) => {
  const url = `${BASE_URL}${endpoint}`;

  const fetchOptions = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TBDB_ACCESS_TOKEN}`,
    },
    method,
    ...options,
  };

  try {
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      return null;
    }

    const data: T = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch.");
  }
};
