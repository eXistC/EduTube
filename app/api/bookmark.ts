import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";

import prismadb from "@/app/libs/prismadb"
import getCurrentUser from "../actions/getCurrentUser";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try{
        if(req.method=== 'POST'){
            const  currentUser  = await getCurrentUser();
    
            const { videoID } = req.body;
    
            const existingVideo = await prismadb.video.findUnique({
                where :{
                    id: videoID,
                }
            });
    
            if(!existingVideo){
                throw new Error('Invalid ID')
            }
    
            const user = await prismadb.user.update({
                where: {
                    email: currentUser?.email || '',
                },
                data: {
                    bookmarkIds: {
                        push: videoID
                    }
                }
            });
            return res.status(200).json(user);
        }
        if(req.method=== 'DELETE'){
            const  currentUser  = await getCurrentUser();
    
            const { videoID } = req.body;
    
            const existingVideo = await prismadb.video.findUnique({
                where :{
                    id: videoID,
                }
            });
    
            if(!existingVideo){
                throw new Error('Invalid ID')
            }
    
            const updateBookmarkIds = without(currentUser?.bookmarkIds, videoID);

            const updateUser = await prismadb.user.update({
                where: {
                    email: currentUser?.email || '',
                },
                data: {
                    bookmarkIds: updateBookmarkIds,
                }
            });

            return res.status(200).json(updateUser);
        }


        return res.status(405).end();
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}