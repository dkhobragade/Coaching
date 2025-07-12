const BASEURL = "https://api.example.com";

export async function fetchWrapper(
  path: string,
  options: RequestInit = {}
): Promise<any> {
  const response = await fetch(`${BASEURL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `HTTP error! status: ${response.status}, message: ${errorText}`
    );
  }
  return response.json();
}
