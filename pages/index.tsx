import Head from "next/head";
import Link from "next/link";
import { TfiAngleRight } from "react-icons/tfi";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Passenger's Club</title>
        <meta
          name="description"
          content="Experience the journey of a ridden ecosystem from its Adam. The train is what you make of it; however, the true journey begins when the eighth passenger awakes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        className="w-full h-screen bg-cover flex justify-start items-center px-5 lg:px-20 py-10"
        style={{
          backgroundImage: "url('/brand/Passengers_LandingGIF.gif')",
        }}
      >
        <div className=" p-10 rounded-2xl bg-passengerRed lg:w-[40%] md:w-[60%] w-[85%]">
          <p className="text-passengerWhite font-semibold tracking-wider">
            It’s More Than Just A Merch. It Is The Gateway To The Lifestyle. Hop
            in and see where the train goes
          </p>

          {/* Enter Button */}
          <Link href={"/welcome"}>
            <div className="mt-10 bg-passengerDarkRed hover:bg-passengerWhite text-passengerWhite hover:text-passengerRed px-5 py-2 rounded-lg flex flex-row justify-between items-center">
              <div>
                <p className="tracking-[2rem] text-[1.2rem] font-semibold">
                  ENTER
                </p>
              </div>

              <TfiAngleRight size={20} />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
