import clientPromise from "@/lib/mongodb";

export async function POST(request) {

    const { link, keyword } = await request.json();
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collect = db.collection("links");

    // Check if the URL already exists
    const existingLink = await collect.findOne({keyword: keyword});
    if (existingLink) {
        return Response.json({success:false, error:true,  message: "Link with same keyword already exists", link: existingLink });
    }
    // Insert the new link
    const newLink = {
        link: link,
        keyword: keyword,
        createdAt: new Date(),
    };
    const result = await collect.insertOne(newLink);

    return Response.json({success:true, error:false, message: 'Link Generated' })
}