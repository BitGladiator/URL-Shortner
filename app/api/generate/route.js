import clientPromise from "@/lib/mongodb";
export async function POST(request) {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("shortner")
    const collection = db.collection("url")
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