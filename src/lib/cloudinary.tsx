export async function search(){
    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,{
    headers: {
      Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
    }
  }).then(r=>r.json());
  
  return results;
}

export function mapImageResources(resources:any){
    return resources.map(resource=>{
        const {width, height} = resource;
        return{
          id: resource.asset_id,
          title: resource.public_id,
          image: resource.secure_url,
          width,
          height
        } 
    })
}