import { createClient } from "@supabase/supabase-js";
import axios from "axios";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl + "", supabaseKey + "");

// Comment Request

export const readAllMessagesFetcher = (url: string) =>
  axios.get(url).then((res) => res.data);

export const addMessageRequest = (url: string, message: any) =>
  axios.post(url, { message }).then((res) => res.data);
