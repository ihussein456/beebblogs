'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddBlogForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const router = useRouter()

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            const res = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({title, body})
            })
            if(res.ok){
                router.push('/')
            }
            else{
                throw new Error('Failed to create a topic')
            }
        }
        catch(err){
            console.error('Error posting todos')

        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                className="border border-black rounded pl-2 pr-16 text-black" 
                type="text" 
                placeholder="write title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <input className="border border-black rounded pl-2 pr-16 text-black" type="text" placeholder="write description" 
                id="description"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
                <button type="submit" className="bg-green-400 font-bold text-black w-fit">Add</button>
            </form>
        </div>
    )
}