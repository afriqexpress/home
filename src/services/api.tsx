import axios from "axios";

const baseUrl = "http://localhost:8000/v1";

export interface Preregister {
  id: number,
  avatar: string | null,
  companyName: string,
}

export async function getPreregisters(): Promise<Preregister[] | null> {
  try {
    const response = await axios.get(`${baseUrl}/preregisters`);
    return response.data as Preregister[];
  } catch (error: any) {
    return null;
  }
}

export function transformAvatarToUrl(avatar: string) {
  return `${baseUrl}/preregisters/avatar/${avatar}`;
}
