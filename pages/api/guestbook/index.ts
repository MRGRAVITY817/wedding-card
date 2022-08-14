import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/database";

const WEDDING_TABLE_NAME = process.env.NEXT_PUBLIC_WEDDING_TABLE_NAME + "";

const GuestBookApi = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    // Get all messages
    case "GET":
      const { data: getData, error: getError } = await supabase
        .from(WEDDING_TABLE_NAME)
        .select("*");
      if (getError) {
        return res.status(500).json({ message: getError.message });
      }
      return res.status(200).json(getData);
    // Add comment
    case "POST":
      const { message } = req.body;
      const { data: postData, error: postError } = await supabase
        .from(WEDDING_TABLE_NAME)
        .insert(message);
      if (postError) {
        return res.status(500).json({ message: postError.message });
      }
      return res.status(200).json(postData);
    case "DELETE":
      const { message_id: deleteMessageId } = req.query;
      if (typeof deleteMessageId === "string") {
        const { data: deleteData, error: deleteError } = await supabase
          .from(WEDDING_TABLE_NAME)
          .delete()
          .eq("id", deleteMessageId + "");
        if (deleteError) {
          return res.status(500).json({ message: deleteError?.message });
        }
        return res.status(200).json(deleteData);
      }
    default:
      return res.status(405).json({
        message: "Method Not Allowed",
      });
  }
};

export default GuestBookApi;
