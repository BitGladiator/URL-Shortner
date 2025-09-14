import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";
export default async function Page({ params }) {
  const url = (await params).url;
  const client = await clientPromise;
  const db = client.db("shortner");
  const collection = db.collection("url");
  const doc = await collection.findOne({ shortURL: body.shortURL });
  if (doc) {
    
  }
  else{
    redirect(`${process.env.NEXT_PUBLIC_HOST}`)
  }
  return <div>My Post: {url}</div>;
}
