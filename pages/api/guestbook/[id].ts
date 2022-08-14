import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/database";

const WEDDING_TABLE_NAME = process.env.NEXT_PUBLIC_WEDDING_TABLE_NAME + "";

const GuestBookApi = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    // Delete given message
    default:
      return res.status(405).json({
        message: "Method Not Allowed",
      });
  }
};

export default GuestBookApi;
