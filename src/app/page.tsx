"use client";
import AboutPage from "./about/page";

import WaveIcon from "../assets/wave-icon.svg";
import casestudy1 from "../assets/casestudy-1.png";
import casestudy2 from "../assets/casestudy-2.png";
import casestudy3 from "../assets/casestudy-3.png";
import casestudy4 from "../assets/casestudy-4.png";
import casestudy5 from "../assets/casestudy-5.png";
import dshot1 from "../assets/dshot-1.png";
import dshot2 from "../assets/dshot-2.png";
import dshot3 from "../assets/dshot-3.png";
import dshot4 from "../assets/dshot-4.png";
import dshot5 from "../assets/dshot-5.png";
import dshot6 from "../assets/dshot-6.png";
import contactImage from "../assets/contact-image.png";
import curveUnderIcon from "../assets/curve-underline-icon.svg";
import personIcon from "../assets/person-icon.svg";
import messageIcon from "../assets/message-icon.svg";
import StarCircleIcon from "../assets/star-circle.svg";
import PSIcon from "../assets/adobe-photoshop-icon.png";
import FigmaIcon from "../assets/volumetric-figma-icon.png";
import Image from "next/image";
import { useState } from "react";

const caseStudies = [
  {
    image: casestudy1,
    title: "Study Inc",
    description:
      "Studyinc is an innovative eLearning website that provides a comprehensive platform for students to enhance their knowledge and skills in various academic fields. With its user-friendly interface and interactive features, Studyinc makes learning easy and engaging. ",
    link: "https://www.behance.net/gallery/166448315/STUDYINCCASE-STUDY",
  },
  {
    image: casestudy2,
    title: "Go Sounds",
    description:
      "Go sounds is an online music streaming application which users can stream any music genre of their choice with different artist.",
    link: "https://www.behance.net/gallery/162145343/GOSOUNDS-CASE-STUDY",
  },
  {
    image: casestudy3,
    title: "Alpha Designs",
    description:
      "Alpha designs is a website designed for companies, business owners and entrepreneurs to easily get their business the graphics presence it needs it solves the challenge people usually go through when contacting the right designers when design services are needed.",
    link: "https://www.behance.net/gallery/162905137/ALPHA-DESIGNS-CASE-STUDY",
  },
  {
    image: casestudy4,
    title: "Fitmeal",
    description:
      "Fitmeal is a mobile application designed to be used by users to choose and order meals that best suite their taste which include varieties of meal with different categories.",
    link: "https://www.behance.net/gallery/162464963/FITMEAL-(CASE-STUDY)",
  },
  {
    image: casestudy5,
    title: "Agile.co",
    description:
      "Agile.co is a platform that helps workers communicate and work  together effectively it provides a central location for team members to communicate, share files and communicate on projects.",
    link: "https://www.behance.net/gallery/167600553/Agileco-UX-case-study",
  },
];
const designShots = [
  {
    image: dshot1,
    title: "Study Inc; An e-learning website",
  },
  {
    image: dshot2,
    title: "A mobile streaming application website",
  },
  {
    image: dshot3,
    title: "Cadence: a cryptocurrency website ",
  },
  {
    image: dshot4,
    title: "E-commerce website for furniture",
  },
  {
    image: dshot5,
    title: "Hackerace: A cybersecurity website",
  },
  {
    image: dshot6,
    title: "Cadence: a cryptocurrency website",
  },
];

export default function Home() {
  const [selectionState, setSelectionState] = useState(true);
  const [validationState, setValidatiionState] = useState(true);
  //   const [buttonStyle, setButtonStyle] = useState(false);

  const designSelection = () => {
    console.log("design buttton");
    return setSelectionState(false);
  };
  const caseSelection = () => {
    console.log("design buttton");
    return setSelectionState(true);
  };

  // form validation and the likes

  // FORM VALIDATION
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear previous errors on change
  };

  const handleSubmit = (e: any) => {
    if (validationState) {
      // e.target.reset();
      // window.location.reload(false);
      console.log("Form submitted successfully:", formData);
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  function validateForm() {
    let valid = true;
    setValidatiionState(true);
    // Name validation
    if (!formData.user_name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_name: "Name is required",
      }));
      valid = false;
      setValidatiionState(false);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.user_email.trim() || !emailRegex.test(formData.user_email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_email: "Enter a valid email address",
      }));
      valid = false;
      setValidatiionState(false);
    }

    // Message validation
    if (!formData.message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message is required",
      }));
      valid = false;
      setValidatiionState(false);
    }
  }
  return (
    <div className="flex relative -z-50  flex-col items-center justify-between mx-auto max-w-[1440px] bg-[#0F0F0F] pt-[35px] md:px-[60px] px-[20px] space-y-[80px]  ">
      <div className="navbar flex justify-between flex-auto w-full  max-h-[50px]  mb-[45px] ">
        <h1 className=" text-[24px] font-medium ">Adesipe Tomide</h1>
        <ul className=" flex gap-[40px] items-center flex-row ">
          <li className="flex">My works</li>
          <li className="flex">About me</li>
          <li>
            <div className="flex border-solid fill-none p-[2px] bg-gradient-to-r from-[#F07175] to-[#6B58EF]  rounded-[6px] ">
              <button className="flex px-[15px] py-[8px] bg-[#0F0F0F] rounded-[6px] ">
                Contact me
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="homepage w-full flex flex-col gap-[92px] ">
        <div className="hero-section relative w-full  rounded-[15px] bg-[url('../assets/bg-image.png')] bg-center bg-cover pt-[70px] pb-[70px] items-center flex flex-col ">
          <div className="flex flex-wrap gap-[10px] text-[22px] md:text-[50px] font-bold tracking-wide max-w-[80%] justify-center space-y-[1px] mb-[5px] ">
            <span>Hi</span>
            <Image
              className=" w-[28px] md:w-[50px] "
              src={WaveIcon}
              alt="wave icon"
            />
            <span>, I’m Adesipe Tomide, a</span>
            <span className=" text-[#FF4C72] ">Product Designer</span>
          </div>
          <p className=" text-[20px] text-center md:max-w-[567px] leading-[32px] tracking-wide mb-[34px] ">
            I create innovative and user-centered solutions to solve design
            challenges and enhance user experiences.
          </p>
          <div className="flex items-center justify-center gap-[10px] mb-[60px] ">
            <Image
              className=" w-[40px] "
              src={FigmaIcon}
              alt="tools used icon"
            />
            <Image className=" w-[50px] " src={PSIcon} alt="tools used icon" />
          </div>
          <button className=" bg-[#7046DB] rounded-[5px] py-[15px] px-[20px] ">
            See my work
          </button>
        </div>

        <div className="skills flex flex-col gap-[40px] ">
          <div className=" flex flex-col gap-[5px] items-center justify-center ">
            <h1 className=" text-[30px] font-medium ">Skills</h1>
            <Image src={curveUnderIcon} alt=" underline curve " />
          </div>
          <div className=" flex gap-[20px] items-center justify-center text-[24px] ">
            <p>User-Centered</p>
            <Image src={StarCircleIcon} alt=" star circle curve " />
            <p>Problem-Solving</p>
            <Image src={StarCircleIcon} alt=" star circle curve " />
            <p>Cross-Functional</p>
            <Image src={StarCircleIcon} alt=" mcircle curve " />
            <p>Prototyping</p>
            <Image src={StarCircleIcon} alt=" star circle curve " />
            <p>Design</p>
          </div>
        </div>
        <div className="what-i-do flex flex-col gap-[60px] items-center justify-center ">
          <div className=" flex flex-col gap-[5px] items-center justify-center ">
            <h1 className=" text-[30px] font-medium ">What I Do</h1>
            <Image src={curveUnderIcon} alt=" underline curve " />
          </div>
          <div className="flex flex-wrap gap-[27px] items-center justify-center ">
            <WhatDoCard
              title="Concept Development"
              description="Generate creative ideas and concepts for new products or enhancements to existing ones."
            />
            <WhatDoCard
              title="Solve problems"
              description="I contribute to crafting products that are tailored to tackle challenges and fulfill distinct requirements for both individuals and businesses through design."
            />
            <WhatDoCard
              title="Prototyping"
              description="Create prototypes or mockups to visualize and test design concepts before moving to production."
            />
            <WhatDoCard
              title="User Research"
              description="Conduct research to understand user needs, preferences, and pain points, often involving surveys, interviews, and observation"
            />
            <WhatDoCard
              title="Iterative Design"
              description="Continuously refine designs based on feedback and testing, ensuring the final product meets user expectations."
            />
            <WhatDoCard
              title="UI/UX Design"
              description="Design the product's interface and user interactions to ensure a seamless and user-friendly experience."
            />
            <WhatDoCard
              title="Collaboration"
              description="Work closely with cross-functional teams, including engineers, marketers, and project managers, to bring the product from concept to reality."
            />
            <WhatDoCard
              title="Design Validation"
              description="Conduct usability testing and gather user feedback to validate and improve the design."
            />
          </div>
        </div>

        <div className="my-works flex flex-col gap-[80px] justify-center items-center ">
          <div className=" flex flex-row md:text-[30px] text-[14px] px-[30px] py-[15px] font-semibold gap-[40px] mt-[20px] bg-[#141414] rounded-[10px] w-fit flex-auto items-center justify-center ">
            <button
              onClick={caseSelection}
              className={
                selectionState !== false
                  ? " bg-[#1F1F1F] px-[20px] py-[5px] rounded-[10px] "
                  : " bg-[#141414] "
              }
            >
              Case Studies
            </button>

            <button
              onClick={designSelection}
              className={
                selectionState !== false
                  ? " bg-[#141414] "
                  : "bg-[#1F1F1F] px-[20px] py-[5px] rounded-[10px]  "
              }
            >
              Design shots
            </button>
          </div>
          {selectionState !== false ? (
            <div className=" md:container mx-auto flex md:flex-row md:flex-wrap flex-col w-full h-full md:gap-[80px] gap-[40px] justify-center space-y-[100x] md:scroll ">
              {caseStudies.map((content, index) => (
                <CaseStudy
                  key={index}
                  image={content.image}
                  title={content.title}
                  description={content.description}
                  link={content.link}
                />
              ))}
            </div>
          ) : (
            <div className=" md:container mx-auto flex md:flex-row md:flex-wrap flex-col w-full h-full md:gap-[20px] lg:gap-[30px] gap-[40px] justify-center space-y-[100x] md:scroll ">
              {designShots.map((content, index) => (
                <DesignShot
                  key={index}
                  image={content.image}
                  title={content.title}
                />
              ))}
            </div>
          )}
        </div>
        <div className="contact-me flex flex-col gap-[80px] ">
          <div className=" flex flex-col gap-[5px] items-center justify-center ">
            <h1 className=" text-[30px] font-medium ">Contact me</h1>
            <Image src={curveUnderIcon} alt=" underline curve " />
          </div>
          <div className="flex gap-[128px] justify-between items-center ">
            <form
              id="contact-form"
              action="submit"
              // method="post"
              ref={null}
              onSubmit={handleSubmit}
              autoComplete="name"
              className="flex flex-col gap-[20px] md:p-0 p-[20px] w-[550px] rounded-[10px] md:bg-transparent bg-[#EDF5FF] md:text-[#EDF5FF] text-[#151C23] "
            >
              <div className="flex relative flex-col gap-[10px] ">
                  <label
                    className=" absolute left-[10px] top-[5px] "
                    id="email"
                    htmlFor=""
                  >
                    <Image className=" m-[6px] " src={personIcon} alt="person icon" />
                  </label>
                <input
                  name="user_name"
                  id="name"
                  type="text"
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  className="  w-full h-[50px] border-solid border-[1px] md:border-[#EDF5FF] border-[#71A1FF50] rounded-[5px] p-[5px] pl-[60px] bg-[#93b9ff00]  "
                />
              </div>
              <div className="flex relative flex-col gap-[10px] ">
                <label
                  className=" absolute left-[10px] top-[5px] "
                  id="email"
                  htmlFor=""
                >
                  <Image src={messageIcon} alt="message icon" />
                </label>
                <input
                  name="user_email"
                  id="email"
                  type="text"
                  onChange={handleChange}
                  placeholder="Your email address"
                  autoComplete="email"
                  className=" w-full h-[50px] border-solid border-[1px] md:border-[#EDF5FF] border-[#71A1FF50] rounded-[5px] p-[5px] pl-[60px] bg-[#93b9ff00]  "
                />
              </div>

              <div className="flex relative flex-col gap-[10px] ">
                <textarea
                  name="message"
                  id="message"
                  onChange={handleChange}
                  cols={30}
                  rows={10}
                  placeholder="Your message here"
                  className=" w-full h-[150px] text-[18px] border-solid border-[1px] md:border-[#EDF5FF] border-[#71A1FF50] rounded-[5px] p-[5px] pl-[10px] bg-[#93b9ff00]  "
                ></textarea>
              </div>
              <input
                type="submit"
                typeof="submit"
                value="Send me a message"
                onSubmit={handleSubmit}
                className=" cursor-pointer bg-[#7046DB] p-[14px] w-full rounded-[5px] "
              />
            </form>
            <Image src={contactImage} alt="contact person avatar" />
          </div>
        </div>
        <div className="socials">
          <div className=" flex flex-col gap-[5px] items-center justify-center ">
            <h1 className=" text-[30px] font-medium ">Socials</h1>
            <Image src={curveUnderIcon} alt=" underline curve " />
          </div>
        </div>
      </div>

      <footer></footer>
    </div>
  );
}

const WhatDoCard = (props: any) => {
  return (
    <div className=" flex flex-col p-[24px] gap-[8px] border-solid border-[2px] border-[#FFFFFF1A] w-[270px]  min-h-[280px] flex-auto hover:bg-[#ffffff2f] bg-[#131313] rounded-[10px] ">
      <h1 className=" text-[20px] font-semibold w-full ">{props.title}</h1>
      <p className=" text-[16px] text-[#FFFFFF99] leading-loose ">
        {props.description}
      </p>
    </div>
  );
};

const CaseStudy = (props: any) => {
  return (
    <div className=" flex gap-[35px] flex-wrap ">
      <Image
        className=" w-[550px] object-fill "
        src={props.image}
        alt=" case study image "
      />
      <div className=" flex flex-col gap-[22px] max-w-[500px] ">
        <h1 className=" text-[30px] font-medium ">{props.title}</h1>
        <p className=" text-[20px] ">{props.description}</p>
        <a
          href={props.link}
          className=" px-[20px] w-fit py-[15px] bg-[#7046DB] rounded-[5px] underline "
        >
          View case study
        </a>
      </div>
    </div>
  );
};
const DesignShot = (props: any) => {
  return (
    <div className=" flex flex-col bg-[#1F1F1F] ">
      <Image
        className=" max-w-[530px]  "
        src={props.image}
        alt=" case study image "
      />
      <p className=" text-[20px] py-[10px] ">{props.title}</p>
    </div>
  );
};
