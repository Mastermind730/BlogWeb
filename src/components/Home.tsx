import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
// import { Icon } from "@/components/ui/icon";
import  Link  from "next/link";
import Image from "next/image";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HomeBanner from "./HomeBanner";
import Subscribe from "./Subscribe";

// Home Page Component
export default function HomePage(): JSX.Element {
  return (
    <div className="container mx-auto py-8">
      {/* Header Section */}
     <Navbar/>

      {/* Hero Section */}
  
<HomeBanner/>
      {/* Latest Posts Section */}
      <section className="py-12">
        <h3 className="text-3xl font-bold mb-6 text-center">Latest Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg rounded-lg">
            <Image src="/code.png" alt="Post 1" width={200} height={250} className="rounded-t-lg object-cover text-center" />
            <CardContent className="p-4">
              <h4 className="text-xl font-bold text-black">The Joke Tax Chronicles</h4>
              <p className="text-muted text-black mt-2">
                Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.
              </p>
              <Link href="#" className="text-primary font-medium hover:underline mt-4 block">
                Read More
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-lg">
            <Image src="/code.png" alt="Post 2" width={200} height={250} className="rounded-t-lg object-cover" />
            <CardContent className="p-4">
              <h4 className="text-xl text-black font-bold">Mastering the Art of Puns</h4>
              <p className="text-muted text-black mt-2">
                Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place.
              </p>
              <Link href="#" className="text-primary font-medium hover:underline mt-4 block">
                Read More
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-lg">
            <Image src="/code.png" alt="Post 3" width={200} height={250} className="rounded-t-lg object-cover" />
            <CardContent className="p-4">
              <h4 className="text-xl text-black font-bold">A Day in the Life of a Comedian</h4>
              <p className="text-muted text-black mt-2">
                Ever wonder what it&apos;s like to live the life of a comedian? Here&apos;s a sneak peek into the daily grind.
              </p>
              <Link href="#" className="text-primary font-medium hover:underline mt-4 block">
                Read More
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <Subscribe/>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
}
