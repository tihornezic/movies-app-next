const BASE_URL = "https://api.themoviedb.org/3";

export const fetchInstance = async (
  endpoint: string,
  method = "GET",
  options = {}
) => {
  const url = `${BASE_URL}${endpoint}`;

  // Merge default options with the provided options
  const fetchOptions = {
    // ...defaultOptions,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TBDB_ACCESS_TOKEN}`,
    },
    method,
    ...options,
  };

  try {
    console.log("Fetching  data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(url, fetchOptions);

    // Check if the response is okay
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    console.log("Data fetch completed after 3 seconds.");

    // Parse the JSON response
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};
