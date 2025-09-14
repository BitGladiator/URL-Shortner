import clientPromise from "@/lib/mongodb";
export async function POST(request) {
    const body = await request.json();
     
    //check if the short URL exists
    const doc = await collection.findOne({shortURL:body.shortURL})
    if(doc){
        return Response.json({success:false,error:true,message:"URL Already Exists"});
    }

    const result = await collection.insertOne({
        URL: body.URL,
        shortURL:body.shortURL
    })
    return Response.json({success:true,error:false,message:"URL Generated Successfully!"});
}