import { getHeroList } from "@/utilities/heroUtility";

const HeroList = async () => {
  const heroInfo = await getHeroList();

  return (
    <div className="w-full h-[650px] bg-gradient-to-b from-emerald-100 to-emerald-100">
      <div className="grid grid-cols-2 gap-4 px-20 py-10">
        <div className="flex-col justify-start items-start gap-[50px] inline-flex">
          <div className="px-[190px] text-black text-[50px] font-bold font-['Poppins'] leading-[50px]">
            {heroInfo.title}
          </div>
          <div className="px-[190px] my-[-25px] text-black text-xl font-medium font-['Avenir']">
            {heroInfo.description}
          </div>
          <div className="px-[30px] py-5 ml-[190px] bg-green-500 rounded-2xl justify-center items-center gap-2.5 inline-flex">
            <button className="text-white text-xl font-medium font-['Poppins']">
              Get Started
            </button>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <img
              className="w-[550px] h-[271px] rounded-[10px] m-2"
              src={heroInfo.image2}
            />
            <img
              className="w-[300px] h-[271px] rounded-[10px] m-2"
              src={heroInfo.image1}
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[300px] h-[271px] rounded-[10px] m-2"
              src={heroInfo.image4}
            />
            <img
              className="w-[550px] h-[271px] rounded-[10px] m-2"
              src={heroInfo.image3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroList;
