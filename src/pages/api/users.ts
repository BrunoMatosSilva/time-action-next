import { connectToDatabase } from "../../util/mongodb";
import { NowRequest, NowResponse } from "@vercel/node";

export default async (req: NowRequest, res: NowResponse) => {

    const { db } = await connectToDatabase();
    const users = await db
        .collection("users")
        .find({})
        .limit(20)
        .sort({ totalExperience: -1 })
        .toArray();

    res.json(users);
};