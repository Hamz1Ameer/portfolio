// "use client"; // Ensure this component is treated as a Client Component

// import React, { useState, FormEvent } from "react";
// import { Button } from "@/components/ui/MovingBorders"; // Adjust this import based on your project setup
// import GithubIcon from "@/public/github-icon.svg";
// import LinkedinIcon from "@/public/linkedin-icon.svg";
// import Link from "next/link";
// import Image from "next/image";
// import MagicButton from "./MagicButton";
// import { socialMedia } from "@/data";

// const Contact = () => {
//   const [emailSubmitted, setEmailSubmitted] = useState(false);

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const form = e.target as HTMLFormElement;
//     const data = {
//       email: form.email.value,
//       subject: form.subject.value,
//       message: form.message.value,
//     };

//     const JSONdata = JSON.stringify(data);
//     const endpoint = "/api/send";

//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSONdata,
//     };

//     const response = await fetch(endpoint, options);
//     const resData = await response.json();

//     if (response.status === 200) {
//       console.log("Message sent.");
//       setEmailSubmitted(true);
//     }
//   };

//   return (
//     <footer className="w-full pt-20 pb-10" id="contact">
//       <section
//         id="contact"
//         className="relative grid md:grid-cols-2 my-12 py-24 gap-4"
//       >
//         {/* background grid */}
//         <div className="w-full absolute left-0 -bottom-72 min-h-96">
//           <img
//             src="/footer-grid.svg"
//             alt="grid"
//             className="w-full h-full opacity-50 "
//           />
//         </div>

//         <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-primary-900 to-transparent blur-lg z-0"></div>
//         <div className="z-10 flex flex-col items-start">
//           <h5 className="text-xl font-bold text-white mb-2">
//             Let&apos;s Connect
//           </h5>
//           <p className="text-[#ADB7BE] mb-4 max-w-md">
//             I'm currently looking for new opportunities. Whether you have a
//             question or just want to say hi, my inbox is always open, and I'll
//             try my best to get back to you!
//           </p>
//           <div className="socials flex gap-4">
//             <Link href="https://github.com/hamz1ameer" passHref>
//               {/* <a target="_blank" rel="noopener noreferrer"> */}
//               <Image src={GithubIcon} alt="Github Icon" />
//               {/* </a> */}
//             </Link>
//             <Link href="https://linkedin.com/in/mahamzaa" passHref>
//               {/* <a target="_blank" rel="noopener noreferrer"> */}
//               <Image src={LinkedinIcon} alt="LinkedIn Icon" />
//               {/* </a> */}
//             </Link>
//           </div>
//         </div>
//         <div>
//           {emailSubmitted ? (
//             <p className="text-green-500 text-sm mt-2 justify-center items-center">
//               Email sent successfully!
//             </p>
//           ) : (
//             <form className="flex flex-col" onSubmit={handleSubmit}>
//               <div className="mb-6">
//                 <label
//                   htmlFor="email"
//                   className="text-white block mb-2 text-sm font-medium"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   name="email"
//                   type="email"
//                   id="email"
//                   required
//                   className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                   placeholder="example@domain.com"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label
//                   htmlFor="subject"
//                   className="text-white block text-sm mb-2 font-medium"
//                 >
//                   Subject
//                 </label>
//                 <input
//                   name="subject"
//                   type="text"
//                   id="subject"
//                   required
//                   className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                   placeholder="Just saying hi"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label
//                   htmlFor="message"
//                   className="text-white block text-sm mb-2 font-medium"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                   placeholder="Let's talk about..."
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-1/2 border"
//               >
//                 Send Message
//               </button>
//             </form>
//           )}
//         </div>

//         <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
//           <p className="md:text-base text-sm md:font-normal font-light">
//             Copyright © 2024 Adrian Hajdin
//           </p>

//           <div className="flex items-center md:gap-3 gap-6">
//             {socialMedia.map((info) => (
//               <div
//                 key={info.id}
//                 className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
//               >
//                 <img src={info.img} alt="icons" width={20} height={20} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </footer>
//   );
// };

// export default Contact;

"use client"; // Ensure this component is treated as a Client Component

import React, { useState, FormEvent } from "react";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { socialMedia } from "@/data";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <h2 className="font-bold text-white heading text-center">
        Let&apos;s <span className="text-purple"> Connect </span>
      </h2>
      <section
        id="contact"
        className="relative grid md:grid-cols-2 my-10 py-24 gap-4"
      >
        {/* background grid */}
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50"
          />
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-primary-900 to-transparent blur-lg z-0"></div>

        <div className="z-10 flex flex-col items-start">
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, my inbox is always open, and I&apos;ll
            try my best to get back to you!
          </p>
          {/* <div className="socials flex gap-4 mb-8">
            <Link
              href="https://github.com/hamz1ameer"
              className="flex items-center"
              passHref
            >
              <Image
                src={GithubIcon}
                alt="Github Icon"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://linkedin.com/in/mahamzaa"
              className="flex items-center"
              passHref
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn Icon"
                width={24}
                height={24}
              />
            </Link>
          </div> */}
        </div>

        <div className="z-10">
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="example@domain.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full md:w-1/2 border"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
      <div className="z-10 flex flex-col md:flex-row justify-between items-center ">
        <p className="text-sm md:text-base md:font-normal font-light text-center">
          Copyright © 2024 Adrian Hajdin
        </p>

        <div className="flex items-center gap-4 mt-6 md:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.href}>
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
