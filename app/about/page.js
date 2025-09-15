import about1 from "@/public/about.jpg";
import Image from "next/image";

function About() {
  return (
    <main className="text-text sm:text-md my-10 grid place-content-center items-center gap-10 px-6 py-4">
      {/* about us 1 */}
      <div className="flex flex-col flex-wrap items-center justify-center gap-10 md:flex-row">
        {/* image */}
        {/* <Image
          src={about1}
          alt="about 1 picture"
          placeholder="blur"
          quality={100}
          height="300"
          width="300"
          className="object-cover"
        /> */}
        <div className="relative h-[300px] w-full max-w-lg md:h-[400px] md:min-w-lg">
          <Image
            src={about1}
            alt="about 1 picture"
            placeholder="blur"
            fill
            className="rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* text */}
        <div className="max-w-2xl">
          <h1 className="text-primary font-bold">Trust & Mission Focused</h1>
          <p>
            At Nepal Digital Bazar, we believe shopping should be simple,
            affordable, and reliable. Our mission is to bring you
            premium-quality products that make everyday life easier—without ever
            compromising on quality or value. From durable thermos bottles to
            stylish kitchen essentials, every product is carefully chosen to
            meet your expectations for performance, design, and affordability.
            <br></br>
            <br></br>
            We work directly with trusted suppliers so that you can enjoy
            authentic products at the best prices. As a proudly Nepali company,
            we are more than just an online store—we are a community-driven
            marketplace dedicated to creating lasting value for our customers.
            When you shop with us, you’re not just buying a product—you’re
            joining a family that values quality, savings, and trust.
          </p>
        </div>
      </div>
      <hr></hr>
      {/* about us 2 */}
      <div className="flex flex-col flex-wrap items-center justify-center gap-10 md:flex-row">
        {/* image */}

        <div className="relative h-[300px] w-full max-w-lg md:h-[400px] md:min-w-lg">
          <Image
            src={about1}
            alt="about 1 picture"
            placeholder="blur"
            fill
            className="rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* text */}
        <div className="max-w-2xl">
          <h1 className="text-primary font-bold">
            Customer & Experience Focused
          </h1>
          <p>
            Welcome to Nepal Digital Bazar, your go-to online destination for
            everyday essentials and lifestyle products. We are passionate about
            making online shopping easy, secure, and enjoyable for every
            customer across Nepal.<br></br>
            <br></br>
            <span className="text-primary font-bold">What sets us apart?</span>
            <ol className="list-inside list-disc" type="a">
              <li>
                <strong> Handpicked Products:</strong> Only the best and most
                reliable items make it to our shelves.
              </li>
              <li>
                <strong>Affordable Pricing:</strong> We ensure you get
                unbeatable value for your money.
              </li>
              <li>
                <strong> Customer Satisfaction :</strong> Your happiness is our
                top priority, and we back every purchase with care and service.
              </li>
            </ol>
            <br></br>
            Our journey started with a simple vision: to deliver quality
            products at fair prices, right to your doorstep. Today, we continue
            to grow with the trust of thousands of happy customers who choose
            Nepal Digital Bazar for their daily shopping needs. Together, let’s
            redefine online shopping in Nepal—with trust, transparency, and
            unbeatable service.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
