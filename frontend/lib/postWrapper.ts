import { BASEURL } from "./constant";

export async function postWrapper(path: string, body: any): Promise<any> {
  const response = await fetch(`${BASEURL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `HTTP error! status: ${response.status}, message: ${errorText}`
    );
  }
}
