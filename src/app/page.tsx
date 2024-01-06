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
import hamburgerIcon from "../assets/hamburger-menu.svg";
import personIcon from "../assets/person-icon.svg";
import messageIcon from "../assets/message-icon.svg";
import StarCircleIcon from "../assets/star-circle.svg";
import PSIcon from "../assets/adobe-photoshop-icon.png";
import LinkedIcon from "../assets/linkedin-icon.svg";
import WAIcon from "../assets/wa-icon.svg";
import BehanceIcon from "../assets/behance-icon.svg";
import FigmaIcon from "../assets/volumetric-figma-icon.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

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
    setSelectionState(false);
  };
  const caseSelection = () => {
    console.log("casebuttton");
    setSelectionState(true);
  };

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
    <main className="flex relative flex-col items-center w-screen bg-[#0F0F0F] md:px-0 space-y-[80px]  ">
    <div className="homepage flex flex-col gap-[92px] max-w-[1240px] w-[100%] px-[20px] ">
      <div className="hero-section relative w-full mt-[45px] rounded-[15px] bg-opacity-10 bg-[url('../assets/bg-image.png')] bg-center bg-cover pt-[70px] pb-[70px] items-center flex flex-col ">
        <div className="flex flex-wrap gap-[10px] text-[36px] md:text-[50px] font-bold tracking-wide md:max-w-[80%] max-w-[90%] justify-center space-y-[1px] mb-[5px] ">
          <span>Hi</span>
          <Image
            className=" w-[28px] md:w-[50px] "
            src={WaveIcon}
            alt="wave icon"
          />
          ,<span> I&lsquo;m Adesipe Tomide, a</span>
          <span className=" gradient-text ">Product Designer</span>
        </div>
        <p className=" text-[20px] text-center md:max-w-[567px] w-[80%] leading-[32px] tracking-wide mb-[34px] ">
          I create innovative and user-centered solutions to solve design
          challenges and enhance user experiences.
        </p>
        <div className="flex items-center justify-center gap-[10px] mb-[40px] ">
          <Image className=" w-[40px] " src={FigmaIcon} alt="tools used icon" />
          <Image className=" w-[50px] " src={PSIcon} alt="tools used icon" />
        </div>
        <button className=" bg-[#7046DB] rounded-[5px] py-[13px] px-[40px] ">
          See my work
        </button>
      </div>

      <div className="skills flex flex-col gap-[40px] overflow-hidden ">
        <div className=" flex flex-col gap-[5px] items-center justify-center ">
          <h1 className=" text-[30px] font-medium ">Skills</h1>
          <Image src={curveUnderIcon} alt=" underline curve " />
        </div>
        <div className=" md:flex gap-[20px] items-center justify-center text-[24px] text-nowrap hidden ">
          <p className=" w-fit ">User-Centered</p>
          <Image src={StarCircleIcon} alt=" star circle curve " />
          <p className=" w-fit  ">Problem-Solving</p>
          <Image src={StarCircleIcon} alt=" star circle curve " />
          <p className=" w-fit ">Cross-Functional</p>
          <Image src={StarCircleIcon} alt=" mcircle curve " />
          <p className=" w-fit ">Prototyping</p>
          <Image src={StarCircleIcon} alt=" star circle curve " />
          <p className=" w-fit ">Design</p>
        </div>
        <div className=" flex gap-[20px] items-center justify-center text-[24px] text-nowrap md:hidden slide-show ">
          <p className=" w-fit ">User-Centered</p>
          <Image src={StarCircleIcon} alt=" star circle curve " />
          <p className=" w-fit  ">Problem-Solving</p>
          <Image src={StarCircleIcon} alt=" star circle curve " />
          <p className=" w-fit ">Cross-Functional</p>
          <Image src={StarCircleIcon} alt=" mcircle curve " />
          <p className=" w-fit ">Prototyping</p>
          <Image src={StarCircleIcon} alt=" star circle curve " />
          <p className=" w-fit ">Design</p>
        </div>
      </div>

      <div className="what-i-do flex flex-col gap-[60px] items-center justify-center ">
        <div className=" flex flex-col gap-[5px] items-center justify-center ">
          <h1 className=" text-[30px] font-medium ">What I Do</h1>
          <Image src={curveUnderIcon} alt=" underline curve " />
        </div>
        <div className="flex flex-wrap md:gap-[27px] gap-[20px] items-center justify-center ">
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

      <div
        id="portfolio"
        className="my-works flex flex-col gap-[80px] justify-center items-center "
      >
        <div className=" flex flex-row md:text-[30px] text-[20px] px-[30px] py-[15px] font-semibold gap-[40px] mt-[20px] bg-[#141414] rounded-[10px] w-fit flex-auto items-center justify-center ">
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
              selectionState !== true
                ? " bg-[#1F1F1F] px-[20px] py-[5px] rounded-[10px] "
                : " bg-[#141414] "
            }
          >
            Design shots
          </button>
        </div>
        {selectionState !== false ? (
          <div className=" md:container mx-auto flex md:flex-col md:flex-wrap flex-col w-full md:gap-[80px] gap-[100px] justify-center space-y-[100x] ">
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
          <div className=" md:container mx-auto flex flex-wrap flex-row w-full md:gap-[20px] lg:gap-[30px] gap-[40px] justify-center space-y-[100x] ">
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
        <div className="flex gap-[128px] justify-center items-center ">
          <form
            id="contact-form"
            action="submit"
            // method="post"
            ref={null}
            onSubmit={handleSubmit}
            autoComplete="name"
            className="flex flex-col gap-[20px] md:p-0 p-[20px] w-[550px] rounded-[10px] md:text-[#EDF5FF] text-[#151C23] "
          >
            <div className="flex relative flex-col gap-[10px] ">
              <label
                className=" absolute left-[10px] top-[5px] "
                id="email"
                htmlFor=""
              >
                <Image
                  className=" m-[6px] "
                  src={personIcon}
                  alt="person icon"
                />
              </label>
              <input
                name="user_name"
                id="name"
                type="text"
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                className="  w-full h-[60px] border-solid border-[1px] md:border-[#EDF5FF] border-[#71A1FF50] rounded-[5px] p-[5px] pl-[60px] bg-[#93b9ff00]  "
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
                className=" w-full h-[60px] border-solid border-[1px] md:border-[#EDF5FF] border-[#71A1FF50] rounded-[5px] p-[5px] pl-[60px] bg-[#93b9ff00]  "
              />
            </div>

            <div className="flex relative flex-col gap-[10px] ">
              <textarea
                name="message"
                id="message"
                onChange={handleChange}
                cols={40}
                rows={20}
                placeholder="Your message here"
                className=" w-full h-[250px] text-[18px] border-solid border-[1px] md:border-[#EDF5FF] border-[#71A1FF50] rounded-[5px] p-[5px] pl-[10px] bg-[#93b9ff00]  "
              ></textarea>
            </div>
            <input
              type="submit"
              typeof="submit"
              value="Send me a message"
              onSubmit={handleSubmit}
              className=" cursor-pointer bg-[#7046DB] text-[20px] text-[#ffffff] py-[14px] px-[20px] w-fit md:mx-0 mx-auto rounded-[5px] "
            />
          </form>
          <Image
            className=" hidden md:flex "
            src={contactImage}
            alt="contact person avatar"
          />
        </div>
      </div>

      <div className="socials flex flex-col gap-[60px] ">
        <div className=" flex flex-col gap-[5px] items-center justify-center ">
          <h1 className=" text-[30px] font-medium ">Socials</h1>
          <Image src={curveUnderIcon} alt=" underline curve " />
        </div>
        <div className=" flex flex-wrap gap-[40px] md:text-[30px] text-[20px] justify-center ">
          <div className=" flex gap-[15px] items-center justify-center ">
            <Image
              className=" p-[10px] w-[50px] rounded-[5px] bg-[#474747] flex self-center "
              src={LinkedIcon}
              alt=" linkedIn social media icon "
            />
            <a
              className=" underline "
              href="https://www.linkedin.com/in/adesipe-tomide/"
            >
              John Tomide
            </a>
          </div>
          <div className=" flex gap-[15px] items-center justify-center ">
            <Image
              className=" p-[10px] w-[50px] rounded-[5px] bg-[#474747] flex self-center "
              src={WAIcon}
              alt="whatsapp social media icon"
            />
            <a className=" underline " href="https://wa.link/dbk5bf">
              +2348133905285
            </a>
          </div>
          <div className=" flex gap-[15px] items-center justify-center ">
            <Image
              className=" p-[10px] w-[50px] rounded-[5px] bg-[#474747] flex self-center "
              src={BehanceIcon}
              alt=" behance social media icon"
            />
            <a className=" underline " href="https://wa.link/dbk5bf">
              John Tomide
            </a>
          </div>
        </div>
      </div>
    </div>
      
    </main>
  );
}


const WhatDoCard = (props: any) => {
  return (
    <div className=" flex flex-col w-[160px] md:p-[24px] p-[16px] gap-[8px] border-solid border-[2px] border-[#FFFFFF1A] md:w-[270px]  md:min-h-[280px] h-[260px] flex-auto hover:bg-[#ffffff2f] bg-[#131313] rounded-[10px] ">
      <h1 className=" md:text-[20px] text-[18px] font-semibold w-full ">
        {props.title}
      </h1>
      <p className=" md:text-[16px] text-[14px] text-[#FFFFFF99] md:leading-loose leading-[30px] ">
        {props.description}
      </p>
    </div>
  );
};

const CaseStudy = (props: any) => {
  return (
    <div className=" flex md:gap-[35px] gap-[20px] md:max-w-[100%] max-w-[380px] mx-auto flex-row md:flex-nowrap flex-wrap md:text-left text-center ">
      <Image
        className=" md:max-w-[550px] md:mx-0 h-auto object-fill "
        src={props.image}
        alt=" case study image "
      />
      <div className=" flex flex-col md:gap-[22px] gap-[16px] max-w-[500px] items-left ">
        <h1 className=" text-[30px] font-medium ">{props.title}</h1>
        <p className=" md:text-[20px] text-[14px] w-[80%] md:mx-0 mx-auto leading-[30px]  ">
          {props.description}
        </p>
        <a
          href={props.link}
          className=" px-[20px] md:mx-0 mx-auto w-fit py-[15px] bg-[#7046DB] rounded-[5px] underline "
        >
          View case study
        </a>
      </div>
    </div>
  );
};
const DesignShot = (props: any) => {
  return (
    <div className=" flex flex-col object-contain md:w-[530px] max-w-[380px] flex-auto bg-[#1F1F1F] rounded-[4px] overflow-hidden ">
      <Image className=" h-[90%] " src={props.image} alt=" case study image " />
      <p className=" text-[20px] py-[10px] text-center md:h-auto h-[50px] ">
        {props.title}
      </p>
      {/* <p className=" text-[20px] py-[10px] text-center md:h-auto h-[50px] ">{props.title}</p> */}
    </div>
  );
};
