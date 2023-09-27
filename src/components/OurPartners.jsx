import { getBrandLists } from "@/utilities/brandUtility";

const OurPartners = async () => {
  const partnerList = await getBrandLists();

  return (
    <div className="bg-gradient-to-b from-emerald-100 to-emerald-100 py-5">
      <div className="w-full h-[120px] pl-[115px] pr-[143.07px] bg-stone-50 justify-center items-center flex">
        {partnerList.map((partner, i) => {
          return (
            <div key={i}>
              <img className="m-5" src={partner.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurPartners;
