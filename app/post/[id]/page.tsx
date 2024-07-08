"use client"

import BlogPage from "@/components/blogPage"
import { useParams } from "next/navigation"



export default async function Blog({params}: {params: {id: string}}){

    const { id } = params;
    return(
        <div>
            <BlogPage id={id}/>
        </div>
    )
}