
import Link from "next/link"

export default function BlogList() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Blog Post Image"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 group-hover:underline">
                    The Joys of Hiking in the Countryside
                  </h2>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    Discover the wonders of nature and the peace of mind that comes with exploring the great outdoors.
                    Join us as we embark on a journey through the lush, rolling hills and serene forests of the
                    countryside.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div>John Doe</div>
                    <div>•</div>
                    <div>May 1, 2023</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Blog Post Image"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 group-hover:underline">The Art of Mindful Cooking</h2>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    Discover the joy of cooking with intention and awareness. Learn how to create delicious, nourishing
                    meals that nourish both your body and your soul.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div>Jane Smith</div>
                    <div>•</div>
                    <div>April 15, 2023</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Blog Post Image"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 group-hover:underline">The Power of Positive Thinking</h2>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    Unlock the transformative power of positive thinking and learn how to cultivate a mindset that
                    attracts abundance, joy, and success into your life.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div>Sarah Lee</div>
                    <div>•</div>
                    <div>March 28, 2023</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Blog Post Image"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 group-hover:underline">The Importance of Self-Care</h2>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    Discover the transformative power of self-care and learn practical strategies to prioritize your
                    well-being and live a more balanced, fulfilling life.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div>Michael Johnson</div>
                    <div>•</div>
                    <div>February 12, 2023</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Blog Post Image"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 group-hover:underline">The Art of Minimalist Living</h2>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    Discover the freedom and simplicity of minimalist living. Learn how to declutter your life, focus on
                    what truly matters, and find more joy and contentment in the present.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div>Emily Chen</div>
                    <div>•</div>
                    <div>January 5, 2023</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Blog Post Image"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 group-hover:underline">The Joy of Gardening</h2>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    Discover the therapeutic and nourishing benefits of gardening. Learn how to create a thriving oasis
                    in your own backyard and connect with the natural world.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div>David Lee</div>
                    <div>•</div>
                    <div>December 1, 2022</div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        </div>
      </main>
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
    </div>
  )
}