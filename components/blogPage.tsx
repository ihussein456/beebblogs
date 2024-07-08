import { getBaseUrl } from "@/utils/getBaseUrl";
import { IPost } from "@/models/blog";
import { useParams, useRouter } from "next/navigation";

type BlogPageProps = {
    id: string;
  };


export default async function BlogPage({ id }: BlogPageProps) {
    const getPost = async () => {
        console.log(id);

        const baseUrl = getBaseUrl(); // Get the correct base URL
        const endpoint = `${baseUrl}/api/blogs/${id}`;
        try {
            const res = await fetch(endpoint, {
                cache: "no-store"
            });

            if (!res.ok) {
                throw new Error("Failed to fetch post");
            }
            const data: { post: IPost } = await res.json();
            console.log(data);
            const post = data
            return post;
        } catch (err) {
            console.log("Error getting post", err);
            return { post: {} }; // Return an empty object in case of error
        }
    };


    const post = await getPost();
    
    return (
        <div>
            <h1>{(post as { post: IPost }).post.title}</h1>
            <p>{(post as { post: IPost }).post.body}</p>
        </div>
    );
}
