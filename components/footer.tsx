import Link from "next/link"

export default function Footer(){
    return(
        <footer className="bg-primary text-primary-foreground py-6 mt-auto">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-sm">&copy; 2023 Blog Site. All rights reserved.</p>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    )
}