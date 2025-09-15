import bg from "@/public/shaker1.png";
import Image from "next/image";
import Button from "./Button";

function Title() {
  return (
    <main className="clip-slant relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        quality={100}
        priority
        placeholder="blur"
        fill
        src={bg}
        alt="bottle background"
        className="bg-primary -z-10 object-contain object-center shadow-xl shadow-green-50"
      />

      {/* Overlay */}
      <div className="bg-primary/30 absolute inset-0 -z-5"></div>

      {/* Hero Text Section */}
      <div className="text-secondary relative z-10 flex w-full max-w-5xl -translate-y-15 flex-col items-center justify-center space-y-8 px-4 text-center">
        <p className="text-sm uppercase sm:text-2xl">
          Welcome to Nepal Digital Bazar
        </p>
        <h1 className="text-2xl leading-tight font-bold sm:text-4xl">
          Let’s get a beautiful water bottle.
        </h1>
        <p className="mx-auto max-w-2xl text-sm sm:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <a href="#products" className="">
          <Button type="primary">Shop Now</Button>
        </a>
      </div>
    </main>
  );
}

export default Title;
