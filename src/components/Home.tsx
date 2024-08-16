/**
 * v0 by Vercel.
 * @see https://v0.dev/t/J2wDk3RNLzk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-background border-b px-4 md:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="size-6" />
          <span className="sr-only">Acme Blog</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Blog
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 px-4 md:px-6 py-12">
        <div className="space-y-8">
          <article className="grid gap-4">
            
              src="/placeholder.svg"
              width={800}
              height={400}
              alt="Blog post cover image"
              className="rounded-lg object-cover aspect-[2/1]"
            />
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">The Joke Tax Chronicles: When Laughter Became a Burden</h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <UserIcon className="w-4 h-4" />
                  <span>John Doe</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span>August 16, 2024</span>
                </div>
              </div>
              <p>
                Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his
                throne. One day, his advisors came to him with a problem: the kingdom was running out of money.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </div>
          </article>
          <article className="grid gap-4">
            <img
              src="/placeholder.svg"
              width={800}
              height={400}
              alt="Blog post cover image"
              className="rounded-lg object-cover aspect-[2/1]"
            />
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Mastering the Art of Puns: A Comedic Journey</h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <UserIcon className="w-4 h-4" />
                  <span>Jane Smith</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span>August 10, 2024</span>
                </div>
              </div>
              <p>
                Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
                under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't
                seem to stop Jokester.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </div>
          </article>
        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  <span>Humor</span>
                  <span className="text-muted-foreground">(12)</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  <span>Politics</span>
                  <span className="text-muted-foreground">(8)</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  <span>Technology</span>
                  <span className="text-muted-foreground">(15)</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  <span>Travel</span>
                  <span className="text-muted-foreground">(7)</span>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-muted px-3 text-sm font-medium transition-colors hover:bg-muted/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Jokes
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-muted px-3 text-sm font-medium transition-colors hover:bg-muted/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Taxes
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-muted px-3 text-sm font-medium transition-colors hover:bg-muted/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Laughter
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-muted px-3 text-sm font-medium transition-colors hover:bg-muted/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Puns
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-muted px-3 text-sm font-medium transition-colors hover:bg-muted/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Monarchy
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="mt-2 text-sm text-muted-foreground">
                Sign up for our newsletter to stay up-to-date on the latest blog posts and news.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Community
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                <InstagramIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                <LinkedinIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}