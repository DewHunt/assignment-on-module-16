import Link from "next/link";

const Navbar = () => {
  return (
    <section className="w-full h-[90px] px-10 py-5 justify-between items-center inline-flex bg-gradient-to-b from-emerald-100 to-emerald-100">
      <div className="p-2.5 justify-start items-start gap-2.5 flex">
        <div>
          <span className="text-black text-xl font-bold font-['Poppins']">
            DEW
          </span>
          <span className="text-orange-600 text-xl font-bold font-['Poppins']">
            &nbsp;HUNT
          </span>
        </div>
      </div>
      <div className="justify-center items-center gap-[30px] flex">
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
          <Link
            href={"/"}
            className="text-black text-base font-medium font-['Poppins']">
            Home
          </Link>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
          <Link
            href={"/team"}
            className="text-black text-base font-medium font-['Poppins']">
            Team
          </Link>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
          <Link
            href={"/service"}
            className="text-black text-base font-medium font-['Poppins']">
            Service
          </Link>
          <div></div>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
          <Link
            href={"/projects"}
            className="text-black text-base font-medium font-['Poppins']">
            Projects
          </Link>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
          <Link
            href={"/testimonials"}
            className="text-black text-base font-medium font-['Poppins']">
            Testimonials
          </Link>
        </div>
        <div className="h-11 p-2.5 rounded-[10px] border border-green-500 justify-center items-center gap-2.5 flex">
          <div className="text-black text-base font-medium font-['Poppins']">
            Login
          </div>
        </div>
        <div className="h-11 p-2.5 bg-green-500 rounded-[10px] justify-center items-center gap-2.5 flex">
          <div className="text-white text-base font-medium font-['Poppins']">
            Register
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
