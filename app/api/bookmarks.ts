import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/app/libs/prismadb"
import getCurrentUser from "../actions/getCurrentUser";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET'){
        return res.status(405).end();
    }

    try{
        const currentUser = await getCurrentUser();
        const bookMarks = await prismadb.video.findMany({
            where: {
                id: {
                    in: currentUser?.bookmarkIds,
                }
            }
        });

        return res.status(200).json(bookMarks);
    } catch(error){
        console.log(error)
        return res.status(400).end();
    }
}