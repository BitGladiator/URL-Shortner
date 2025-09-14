import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";
export default async function Page({ params }) {
  const shorturl = (await params).shorturl;
  const client = await clientPromise;
  const db = client.db("shortner");
  const collection = db.collection("url");
  const doc = await collection.findOne({ shortURL: shorturl });
  if (doc) {
    redirect(doc.URL)
  }
  else{
    redirect(`${process.env.NEXT_PUBLIC_HOST}`)
  }
  return <div>My Post: {url}</div>;
}
