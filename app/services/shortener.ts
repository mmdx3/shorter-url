import { FetchOptions } from "@/type";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export default async function shortenUrl(url: string) {
  const requestOptions: FetchOptions = {
    method: "POST",
    headers: {
      apikey: API_KEY as string,
    },
    body: url,
  };

  try {
    const response = await fetch(API_URL as string, requestOptions);
    const rezult = await response.json();
    return rezult;
  } catch (error) {
    console.log(error);

    throw new Error();
  }
}
