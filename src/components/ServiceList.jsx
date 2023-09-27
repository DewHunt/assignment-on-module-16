import { getServiceLists } from "@/utilities/serviceUtility";

const ServiceList = async () => {
  const serviceList = await getServiceLists();

  return (
    <div className="w-full pl-[15px] pr-[15px] bg-white">
      <div className="pl-[105px] pr-[45px] pt-[35px] pb-[20px] flex-col justify-start items-start gap-10 inline-flex">
        <div className="flex-col justify-start items-start gap-[15px] flex">
          <div className="text-green-500 text-xl font-medium font-['Poppins'] uppercase">
            Our All Services
          </div>
          <div className="w-[495px] text-black text-3xl font-semibold font-['Poppins']">
            We Provide BestWeb design services
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 px-20 py-10">
        {serviceList.map((service) => {
          return (
            <div className="w-[550px] h-[694px] justify-center items-center inline-flex">
              <div className="w-[550x] h-[694px] bg-white rounded-[20px] shadow">
                <div className="px-5 py-3 text-black text-[20px] font-semibold font-['Poppins'] uppercase">
                  {service.title}
                </div>
                <div className="px-5 text-neutral-400 text-base font-normal font-['Poppins'] capitalize">
                  {service.des}
                </div>
                <div className="grid grid-cols-2 gap-2 px-5 py-5">
                  <div>
                    <img
                      className="w-[358px] h-[263px] rounded-[10px] shadow"
                      src={service.image1}
                    />
                  </div>
                  <div>
                    <img
                      className="w-[358px] h-[263px] rounded-[10px] shadow"
                      src={service.image2}
                    />
                  </div>
                  <div>
                    <img
                      className="w-[248px] h-[263px] rounded-[10px] shadow"
                      src={service.image3}
                    />
                  </div>
                  <div>
                    <img
                      className="w-[257px] h-[263px] rounded-[10px] shadow"
                      src={service.image4}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="w-[604px] h-[694px] left-[100px] top-[252px] absolute flex-col justify-center items-center inline-flex">
        <div className="w-[604px] h-[694px] relative">
          <div className="w-[604px] h-[694px] left-0 top-0 absolute bg-white rounded-[20px] shadow"></div>
          <div className="left-[30px] top-[40px] absolute text-black text-[26px] font-semibold font-['Poppins'] uppercase">
            Build & Launch without problems
          </div>
          <div className="w-[527px] left-[30px] top-[99px] absolute text-neutral-400 text-base font-normal font-['Poppins'] capitalize">
            Increase your team’s productivity and save time with a bot that
            answers and fields customer inquiries
          </div>
          <img
            className="w-[358px] h-[164px] left-[34px] top-[201px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/358x164"
          />
          <img
            className="w-[143px] h-[164px] left-[425px] top-[201px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/143x164"
          />
          <img
            className="w-[248px] h-[263px] left-[320px] top-[385px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/248x263"
          />
          <img
            className="w-[257px] h-[263px] left-[30px] top-[385px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/257x263"
          />
        </div>
      </div>
      <div className="w-[604px] h-[694px] left-[100px] top-[996px] absolute flex-col justify-center items-center inline-flex">
        <div className="w-[604px] h-[694px] relative">
          <div className="w-[604px] h-[694px] left-0 top-0 absolute bg-white rounded-[20px] shadow"></div>
          <div className="left-[30px] top-[40px] absolute text-black text-[26px] font-semibold font-['Poppins'] uppercase">
            Build & Launch without problems
          </div>
          <div className="w-[527px] left-[30px] top-[99px] absolute text-neutral-400 text-base font-normal font-['Poppins'] capitalize">
            Increase your team’s productivity and save time with a bot that
            answers and fields customer inquiries
          </div>
          <img
            className="w-[358px] h-[164px] left-[34px] top-[201px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/358x164"
          />
          <img
            className="w-[143px] h-[164px] left-[425px] top-[201px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/143x164"
          />
          <img
            className="w-[248px] h-[263px] left-[320px] top-[385px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/248x263"
          />
          <img
            className="w-[257px] h-[263px] left-[30px] top-[385px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/257x263"
          />
        </div>
      </div>
      <div className="w-[604px] h-[694px] left-[735px] top-[252px] absolute flex-col justify-center items-center inline-flex">
        <div className="w-[604px] h-[694px] relative">
          <div className="w-[604px] h-[694px] left-0 top-0 absolute bg-white rounded-[20px] shadow"></div>
          <div className="left-[30px] top-[40px] absolute text-black text-[26px] font-semibold font-['Poppins'] uppercase">
            Build & Launch without problems
          </div>
          <div className="w-[527px] left-[30px] top-[99px] absolute text-neutral-400 text-base font-normal font-['Poppins'] capitalize">
            Increase your team’s productivity and save time with a bot that
            answers and fields customer inquiries
          </div>
          <img
            className="w-[358px] h-[164px] left-[34px] top-[201px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/358x164"
          />
          <img
            className="w-[143px] h-[164px] left-[425px] top-[201px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/143x164"
          />
          <img
            className="w-[248px] h-[263px] left-[320px] top-[385px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/248x263"
          />
          <img
            className="w-[257px] h-[263px] left-[30px] top-[385px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/257x263"
          />
        </div>
      </div>
      <div className="w-[604px] h-[694px] left-[735px] top-[996px] absolute flex-col justify-center items-center inline-flex">
        <div className="w-[604px] h-[694px] relative">
          <div className="w-[604px] h-[694px] left-0 top-0 absolute bg-white rounded-[20px] shadow"></div>
          <div className="left-[30px] top-[40px] absolute text-black text-[26px] font-semibold font-['Poppins'] uppercase">
            Build & Launch without problems
          </div>
          <div className="w-[527px] left-[30px] top-[99px] absolute text-neutral-400 text-base font-normal font-['Poppins'] capitalize">
            Increase your team’s productivity and save time with a bot that
            answers and fields customer inquiries
          </div>
          <img
            className="w-[358px] h-[164px] left-[34px] top-[201px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/358x164"
          />
          <img
            className="w-[143px] h-[164px] left-[425px] top-[201px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/143x164"
          />
          <img
            className="w-[248px] h-[263px] left-[320px] top-[385px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/248x263"
          />
          <img
            className="w-[257px] h-[263px] left-[30px] top-[385px] absolute rounded-[10px] shadow"
            src="https://via.placeholder.com/257x263"
          />
        </div>
      </div> */}
    </div>
  );
};

export default ServiceList;
