import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";

// Function component with TypeScript typing
export default function Component(): JSX.Element {
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
            <Image
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
            <Image
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
                Sign up for our newsletter to stay up-to-date on the latest news, articles, and events.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

// Icons with SVGProps for TypeScript support
const MountainIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12 2l9 20H3L12 2zm0 4.91L5.5 20h13L12 6.91z" />
  </svg>
);

const UserIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12 12a5 5 0 100-10 5 5 0 000 10zm-8 8a8 8 0 0116 0H4z" />
  </svg>
);

const CalendarIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M7 10h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM7 14h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
  </svg>
);
