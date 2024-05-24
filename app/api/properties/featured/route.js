import connectDB from "@/config/database";
import Property from "@/models/Property";


// Get /api/properties/featured
export const GET = async (request) => {
  
    await connectDB();

    const properties = await Property.find({is_featured: true})

    return new Response(JSON.stringify(properties), { status: 200 }); // result is now an object!

 
    return new Response("Something went wrong", { status: 500 });
  
};
