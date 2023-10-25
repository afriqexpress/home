import axios, { AxiosError } from "axios";

const baseUrl = "http://localhost:8000/v1";

export interface Preregister {
  id: number;
  avatar: string | null;
  companyName: string;
  phoneNumber: string;
  appName: string;
}

export interface Error {
  error: string;
}

export async function getPreregisters(): Promise<
  Partial<Preregister>[] | null
> {
  try {
    const response = await axios.get(`${baseUrl}/preregisters`);
    return response.data as Partial<Preregister>[];
  } catch (error: any) {
    return null;
  }
}

export async function postPreregisters(
  companyName: string,
  phoneNumber: string,
  appName: string,
  avatar: File | null
): Promise<Preregister | Error> {
  try {
    const response = await axios.post(
      `${baseUrl}/preregisters`,
      {
        companyName: companyName,
        phoneNumber: phoneNumber,
        appName: appName,
        avatar: avatar,
      },

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(`${response.status}: response.data`);
    return response.data as Preregister;
  } catch (error: unknown) {
    if (error instanceof AxiosError)
      return (
        (error.response?.data as Error) ?? { error: "Unknown error occured" }
      );

    return { error: "Unknown error occured" };
  }
}

export function transformAvatarToUrl(avatar: string) {
  return `${baseUrl}/preregisters/avatar/${avatar}`;
}
