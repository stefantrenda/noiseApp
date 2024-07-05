import personOne from "../../assets/Images/personOne.jfif";
import personTwo from "../../assets/Images/personTwo.jfif";
import personLast from "../../assets/Images/personLast.jfif";

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
        <div className="flex flex-col gap-6 py-9 w-[91%] mx-auto">
          <div className="flex flex-col gap-2.5">
            <p className="text-[#D9D9D9] font-semibold">Our story</p>
            <div className="flex flex-col gap-5">
              <p className="text-[#FFFFFF] font-light text-[15px]  opacity-70">
                Our story begins with a simple realization: the power of sound
                to transform our daily lives. We believe that amidst the hustle
                and bustle of modern life, everyone deserves moments of
                tranquility and focus. That's why we set out to create a
                platform where users can effortlessly craft their own
                personalized soundscapes.
              </p>
              <p className="text-[#FFFFFF] font-light text-[15px]  opacity-70">
                Driven by a passion for enhancing well-being through immersive
                auditory experiences, our team is dedicated to curating a
                diverse range of natural and artificial sounds. From the gentle
                patter of rain to the soothing hum of a coffee shop, each sound
                in our library is carefully selected to evoke a sense of calm
                and inspiration.
              </p>
              <p className="text-[#FFFFFF] font-light text-[15px]  opacity-70">
                But our journey doesn't stop there. We're constantly innovating
                and refining our platform to ensure a seamless and enjoyable
                experience for our users. Whether you're seeking relaxation,
                concentration, or simply a moment of peace, [Noise app] is here
                to help you create the perfect ambiance for every occasion.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-[#D9D9D9] font-semibold">
              Meet the team behind the product
            </p>
            <p className="text-[#FFFFFF] font-light text-[15px]   opacity-70">
              We're the dedicated minds behind [Noise app], driven by a shared
              passion for sound and its impact on well-being. Together, we're
              here to help you craft your perfect ambiance.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[30%]  flex flex-col gap-3">
              <img src={personOne} alt="personOne" className="w-full h-auto aspect-[4/3] rounded-2xl object-cover" />
              <p className="text-[#D9D9D9]">Antonina Khodzhaeva</p>
            </div>
            <div className="w-[30%]  flex flex-col gap-3">
              <img src={personTwo} alt="personTwo" className="w-full h-auto aspect-[4/3] rounded-2xl object-cover" />
              <p className="text-[#D9D9D9]">Tom Harris</p>
            </div>
            <div className="w-[30%]  flex flex-col gap-3">
              <img src={personLast} alt="personLast" className="w-full h-auto aspect-[4/3] rounded-2xl object-cover" />
              <p className="text-[#D9D9D9]">Lisa Doe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
