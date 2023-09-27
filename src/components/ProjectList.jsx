import { getProjectLists } from "@/utilities/projectUtility";

const ProjectList = async () => {
  const projectLists = await getProjectLists();

  return (
    <div className="w-full pl-[15px] pr-[15px] bg-white">
      <div className="pl-[105px] pr-[45px] pt-[35px] pb-[20px] flex-col justify-start items-start gap-10 inline-flex">
        <div className="flex-col justify-start items-start gap-[15px] flex">
          <div className="text-green-500 text-xl font-medium font-['Poppins'] uppercase">
            All Project
          </div>
          <div className="w-[495px] text-black text-3xl font-semibold font-['Poppins']">
            Better Agency/SEO Solution At Your Fingertips
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 px-20 py-10">
        {projectLists.map((project) => {
          return (
            <div className="w-[544px] h-[580px] px-[30px] pt-10 pb-[30px] bg-white rounded-[20px] shadow flex-col justify-end items-center inline-flex">
              <div className="self-stretch h-[545px]">
                <img
                  className="w-[544px] h-[472px] rounded-[20px]"
                  src={project.image}
                />
                <div className="text-black text-[15px] text-center pt-5 font-semibold font-['Poppins'] uppercase">
                  {project.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
