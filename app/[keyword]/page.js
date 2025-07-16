import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
  const { keyword } = await params
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collect = db.collection("links");

    const doc = await collect.findOne({ keyword: keyword });
    console.log(doc)
    if (doc) {
        return redirect(doc.link)
    }else{
        return redirect(process.env.NEXT_PUBLIC_HOST)
    }
}