import { NextApiRequest, NextApiResponse } from "next";

import prismadb from '@/app/libs/prismadb';
import serverAuth from "@/app/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        await serverAuth(req)

        const videos = await prismadb.video.findMany();

        return res.status(200).json(videos);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}