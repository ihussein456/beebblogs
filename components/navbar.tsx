import Link from "next/link"
import { getSession } from "@/actions"
import LogoutForm from "./logoutForm"

export default async function Navbar(){
    const session = await getSession()

    return(
        <div>
            <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
                <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold" prefetch={false}>
                    Blog Site
                </Link>
                <nav className="hidden md:flex items-center gap-4">
                    <Link href="/" className="hover:underline" prefetch={false}>
                    Home
                    </Link>
                    {session.isLoggedIn && <Link href="/addPost" className="hover:underline" prefetch={false}>
                    Add Post
                    </Link>}
                    {!session.isLoggedIn && <Link href="/login" className="hover:underline" prefetch={false}>
                    Login
                    </Link>}
                    {session.isLoggedIn && <LogoutForm/>}
                </nav>
                </div>
            </header>
        </div>
    )
}