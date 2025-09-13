import Image from "next/image";
import localfont from "next/font/local";
import Link from "next/link";
const poppins = localfont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100 ">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL Shortener in the world
          </p>
          <p> We are the most straightforward URL Shortener in the world</p>
         
          <div className="flex gap-3 ">
            <Link href="/generate">
              <button className="bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold text-white">
                Try Now
              </button>
            </Link>
            <Link href="/github">
            
                <button className="bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold text-white">
                  Github
                </button>
              
            </Link>
          </div>
        
        </div>
        <div className=" flex justify-start relative">
          <Image
            src={"/vector.jpg"}
            width={600}
            height={300}
            alt="An Image of a vector"
          />
        </div>
      </section>
    </main>
  );
}
