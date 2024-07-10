import { IPost } from "@/models/blog";
import Link from "next/link"
import pic from "@/public/Screenshot 2024-07-04 at 20.52.04.png"
import { getBaseUrl } from "@/utils/getBaseUrl";


  const getPosts = async (): Promise<{ posts: IPost[] }> => {
  const baseUrl = getBaseUrl(); // Get the correct base URL
  const endpoint = `${baseUrl}/api/blogs`;
  try {
      const res = await fetch(endpoint, {
          cache: "no-store"
      });
      if (!res.ok) {
          throw new Error("Failed to fetch posts");
      }
      const data: { posts: IPost[] } = await res.json();
      return data;
  } catch (err) {
      console.log("Error getting posts", err);
      return { posts: [] }; // Return an empty array in case of error
  }
};

export default async function BlogList() {

  const {posts} = await getPosts()
  console.log(posts)
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6">
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">  
            {posts.map((p) => (
               <div key={p._id}>
                 <Link href={`/post/${p._id}`} className="group" prefetch={false}>
                 <div  className="bg-muted rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
                   <img
                     src={pic.src}
                     alt="Blog Post Image"
                     width={400}
                     height={200}
                     className="w-full h-48 object-cover"
                   />
                   <div className="p-6">
                     <h2 className="text-2xl font-bold mb-2 group-hover:underline">
                       {p.title}
                     </h2>
                     <p className="text-muted-foreground line-clamp-3 mb-4">
                       {p.body}
                     </p>
                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                       <div>John Doe</div>
                       <div>•</div>
                       <div>likes: {p.likes}</div>
                     </div>
                   </div>
                 </div>
                  </Link>
               </div>

            ))}      
            </section>     
        </div>
      </main>
    </div>
  )
}