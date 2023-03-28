import { search } from "@/src/lib/cloudinary";

export default async function handlerImg(req:any,res:any){
    const results = await search();
    res.status(200).json({
      ...results
    })
  } 