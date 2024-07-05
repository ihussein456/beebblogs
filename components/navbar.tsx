import Link from "next/link"

export default function Navbar(){
    return(
        <div>
        <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
            <div className="container mx-auto flex items-center justify-between">
            <Link href="#" className="text-2xl font-bold" prefetch={false}>
                Blog Site
            </Link>
            <nav className="hidden md:flex items-center gap-4">
                <Link href="#" className="hover:underline" prefetch={false}>
                Home
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                About
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                Contact
                </Link>
            </nav>
            </div>
      </header>
        </div>
    )
}