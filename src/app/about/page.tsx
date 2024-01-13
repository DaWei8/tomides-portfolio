"use client";
import curveUnderIcon from "../../assets/curve-underline-icon.svg";
import PSIcon from "../../assets/adobe-photoshop-icon.png";
import LinkedIcon from "../../assets/linkedin-icon.svg";
import WAIcon from "../../assets/wa-icon.svg";
import BehanceIcon from "../../assets/behance-icon.svg";
import FigmaIcon from "../../assets/volumetric-figma-icon.png";
import messageIcon from "../../assets/message-icon.svg";
import profileImage from "../../assets/profile-picture.png";
import resumeImage from "../../assets/cand-res-brief.png";
import Image from "next/image";
import { useState } from "react";

import dynamic from 'next/dynamic';

export default function AboutPage() {
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
  const [validationState, setValidatiionState] = useState(true);

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
  return (
    <main className="flex flex-auto flex-col w-screen mx-auto gap-[92px] max-w-[1240px] px-[20px] ">
      <div className=" flex gap-[30px] md:flex-row flex-gap flex-col-reverse md:justify-normal items-center ">
        <div className=" flex flex-col  gap-[11px] md:justify-center md:mx-0 md:items-start items-center ">
          <h1 className=" md:text-[50px] text-[24px] font-semibold md:w-[70%] md:text-left text-center md:leading-normal w-[80%] ">
            Adesipe Tomide, is a{" "}
            <span className=" gradient-text ">Product Designer</span>
          </h1>
          <p className=" leading-[32px] md:text-[16px] text-[14px] md:text-left text-center mb-[20px] md:w-[90%] w-[80%] ">
            I have a passion for crafting and streamlining digital experiences
            that resonate with everyday users. Over my three-year professional
            journey, I&lsquo;ve contributed to the design of products that meet
            industry standards. Outside of my creative endeavors, you&lsquo;ll
            often find me playing video games, enjoying a movie, or in web3,
            getting myself some NFTS and cryptocurrencies. I&lsquo;m currently
            located in Ondo, Nigeria, but I&lsquo;m open to relocating for the
            right opportunity. I&lsquo;d be thrilled to learn more about your
            project and how I can be a part of it.
          </p>
          <a className=" h-[60px] px-[60px] bg-[#7046DB] text-[#fff]  rounded-[10px] flex justify-center items-center " href="/resume.pdf" ><p>View Resume</p></a>
        </div>
        <Image
          className=" md:w-[35%] rounded-[10px] "
          src={profileImage}
          alt=" personal profile image "
        />
      </div>
      <div></div>
      <div>
        <div className=" flex flex-col gap-[5px] items-center justify-center mb-[30px] ">
          <h1 className=" text-[30px] font-medium ">Tools I work with</h1>
          <Image src={curveUnderIcon} alt=" underline curve " />
        </div>
        <div className="flex items-center justify-center gap-[40px] mb-[40px]  ">
          <div className=" flex flex-col items-center justify-center gap-[10px] ">
            <Image
              className=" md:w-[120px] md:p-[13.5px] w-[40px] "
              src={FigmaIcon}
              alt="tools used icon"
            />
            <p>Figma</p>
          </div>
          <div className=" flex flex-col items-center justify-center gap-[10px] ">
            <Image
              className=" md:w-[120px] w-[52px] "
              src={PSIcon}
              alt="tools used icon"
            />
            <p>Adobe Ps</p>
          </div>
        </div>
      </div>
      <div className="socials flex flex-col md:gap-[60px] gap-[50px] text-[14px] ">
        <div className=" flex flex-col gap-[5px] items-center justify-center ">
          <h1 className=" text-[30px] font-medium ">Socials</h1>
          <Image src={curveUnderIcon} alt=" underline curve " />
        </div>
        <div className=" flex flex-wrap md:gap-[40px] gap-[20px] md:text-[20px] text-[16px] justify-center ">
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
      <div className="socials flex flex-col md:gap-[60px] gap-[30px] text-[14px]  ">
        <div className=" flex flex-col gap-[5px] items-center justify-center ">
          <h1 className=" text-[30px] font-medium ">My Resume</h1>
          <Image src={curveUnderIcon} alt=" underline curve " />
        </div>
        <div className="flex gap-[128px] justify-center items-center ">
          <Image
            className=" hidden md:flex "
            src={resumeImage}
            alt="contact person avatar"
          />
        </div>
        <a className=" h-[60px] px-[60px] bg-[#7046DB] text-[#fff]  rounded-[10px] mx-auto flex justify-center items-center " href="/resume.pdf"><p>View Resume</p></a>
        {/* <FileViewer filePath="/resume.pdf" /> */}
      </div>
    </main>
  );
}
