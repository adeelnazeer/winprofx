import Link from "next/link";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative">
      <div className="inner-container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className=" w-full mx-auto  md:py-32 py-16 ">

          <h1 className="text-2xl font-semibold text-primary md:text-[35px] xl:text-[40px] 3xl:text-[65px] md:leading-[60px] pb-5">
            Trading Accounts:
          </h1>
          <p className="text-lg text-white font-normal">
            Unlock feature-packed, commission-free trading accounts designed<br />
            for today’s traders. Sign up now and enjoy the benefits of our most<br />
            popular account.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
