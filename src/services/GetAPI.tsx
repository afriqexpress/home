import axios from "axios";
import { useEffect, useState } from "react";

const url = "http://localhost:8000/v1/preregisters";

async function GetAPI(): Promise<any[]> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    return error.message;
  }
}

export default GetAPI;
