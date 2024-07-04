
const About = () => {
  return (
    <div className="flex flex-col gap-6 w-[60%] z-10">
      <div className="w-full mt-6 bg-deepPurple border border-darkBlue rounded-[25px]">
        <div className="flex items-center justify-between py-6 mx-auto w-[90%]">
          <div className="flex flex-col">
            <span className="text-limeGreen text-2xl">Sound Library</span>
          </div>
        </div>
        <hr className="border-b border-darkBlue" />
        <div className="flex flex-col gap-3 py-9 w-[91%] mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum odit
          consequatur possimus earum inventore cupiditate, harum dolorum!
          Recusandae, ad! Assumenda incidunt animi odio tempora! Quia vitae
          commodi vel a voluptatem?
        </div>
      </div>
    </div>
  );
};

export default About;
