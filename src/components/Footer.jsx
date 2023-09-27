import Link from "next/link";

const Footer = () => {
  return (
    <section className="w-full bg-black">
      <div className="grid grid-cols-3 gap-4 px-20 py-10">
        <div>
          <div className="text-white text-[39.20px] font-bold font-['Poppins']">
            DEW HUNT
          </div>
          <div className="text-white text-xl font-normal font-['Avenir']">
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </div>
        </div>

        <div className="mt-2">
          <div className="text-white text-xl font-semibold font-['Poppins']">
            Quick Links
          </div>
          <div className="flex-col justify-start items-start gap-[5px] inline-flex">
            <Link
              href={"/team"}
              className="text-white text-lg font-medium font-['Avenir']">
              Team
            </Link>
            <Link
              href={"/service"}
              className="text-white text-lg font-medium font-['Avenir']">
              Services
            </Link>
            <Link
              href={"/projects"}
              className="text-white text-lg font-medium font-['Avenir']">
              Projects
            </Link>
            <Link
              href={"/testimonials"}
              className="text-white text-lg font-medium font-['Avenir']">
              Testimonials
            </Link>
          </div>
        </div>

        <div className="mt-2">
          <div className="text-white text-xl font-semibold font-['Poppins']">
            Address
          </div>
          <div className="text-white text-xl font-medium font-['Avenir']">
            Dew Software Head Office.
            <br />
            Mirpur Road
            <br />
            Bangladesh
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
