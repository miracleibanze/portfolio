// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import Rotate from "../ui/Rotate";
// import { ChevronDown, ChevronRight } from "lucide-react";

// const Skills = () => {
//   const router = useRouter();
//   const [wrap, setWrap] = useState(0);
//   const handleNavigate = (index: any) => {
//     router.push(`/skill/details/${index}`);
//   };

//   return (
//     <div
//       className="relative mb-48 h-full min-w-full justify-center gap-4"
//       id="skills"
//     >
//       <h1 className="h1 text-center font-semibold">Core Competencies</h1>
//       <p className="max-md: row-span-1 mx-auto max-w-xl p-4 px-8 text-center lg:mb-12">
//         With a solid foundation in web development, I specialize in creating
//         efficient, responsive, and user-focused solutions that deliver
//         exceptional experiences.
//       </p>
//       <div className="mb-16 flex w-full flex-col gap-3 lg:flex-row">
//         <Image
//           src="/skillsProfile.png"
//           alt="profile2"
//           height={800}
//           width={600}
//           className="float-start flex aspect-3/4 w-full justify-center max-lg:h-48 lg:max-w-120"
//         />
//         <div className="flex-center-both w-full">
//           <div className="border-primary dark-bg slide-in my-4 flex w-full flex-wrap items-center justify-between gap-4 rounded-md p-4 lg:max-w-md">
//             <h5
//               className="flex-between-hor body-1 -my-4 min-w-full cursor-pointer py-4"
//               onClick={() => setWrap(0)}
//             >
//               <span>{frontendTechnologies.name}</span>
//               <ChevronDown className="rotate-270 hide white w-3" />
//               <ChevronRight className="hide white w-3" />
//             </h5>
//             {frontendTechnologies.elements.map((subItem) => (
//               <img
//                 src={subItem.image}
//                 alt={subItem.name}
//                 key={subItem.name}
//                 className={`border-primary h-18 w-auto cursor-pointer object-contain px-2 py-1 ${wrap !== 0 && "hidden"} transition-duration hover:scale-105`}
//                 onClick={() => handleNavigate(subItem.index)}
//               />
//             ))}
//           </div>
//           <div className="border-primary dark-bg slide-in my-4 flex w-full flex-wrap items-center justify-between gap-4 rounded-md p-4 lg:max-w-md">
//             <h5
//               className="flex-between-hor body-1 -my-4 min-w-full cursor-pointer py-4"
//               onClick={() => setWrap(1)}
//             >
//               <span>{backendTechnologies.name}</span>
//               <ChevronDown className="rotate-270 hide white w-3" />
//               <ChevronRight className="hide white w-3" />
//             </h5>
//             {backendTechnologies.elements.map((subItem) => (
//               <img
//                 src={subItem.image}
//                 alt={subItem.name}
//                 key={subItem.name}
//                 className={`border-primary h-18 w-auto cursor-pointer object-contain px-2 py-1 ${wrap !== 1 && "hidden"} transition-duration hover:scale-105`}
//                 onClick={() => handleNavigate(subItem.index)}
//               />
//             ))}
//           </div>
//           <div className="border-primary dark-bg slide-in my-4 flex w-full flex-wrap items-center justify-between gap-4 rounded-md p-4 lg:max-w-md">
//             <h5
//               className="flex-between-hor body-1 -my-4 min-w-full cursor-pointer py-4"
//               onClick={() => setWrap(2)}
//             >
//               <span>{databaseTechnologies.name}</span>
//               <ChevronDown className="rotate-270 hide white w-3" />
//               <ChevronRight className="hide white w-3" />
//             </h5>
//             {databaseTechnologies.elements.map((subItem) => (
//               <img
//                 src={subItem.image}
//                 alt={subItem.name}
//                 key={subItem.name}
//                 className={`border-primary h-18 w-auto cursor-pointer object-contain px-2 py-1 ${wrap !== 2 && "hidden"} transition-duration hover:scale-105`}
//                 onClick={() => handleNavigate(subItem.index)}
//               />
//             ))}
//           </div>
//           <div className="border-primary dark-bg slide-in my-4 flex w-full flex-wrap items-center justify-between gap-4 rounded-md p-4 lg:max-w-md">
//             <h5
//               className="flex-between-hor body-1 -my-4 min-w-full cursor-pointer py-4"
//               onClick={() => setWrap(3)}
//             >
//               <span>{otherTechnologies.name}</span>
//               <ChevronDown className="rotate-270 hide white w-3" />
//               <ChevronRight className="hide white w-3" />
//             </h5>
//             {otherTechnologies.elements.map((subItem) => (
//               <img
//                 src={subItem.image}
//                 alt={subItem.name}
//                 key={subItem.name}
//                 className={`border-primary h-18 w-auto cursor-pointer object-contain px-2 py-1 ${wrap !== 3 && "hidden"} transition-duration hover:scale-105`}
//                 onClick={() => handleNavigate(subItem.index)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="bg-gray flex w-full flex-col items-center overflow-hidden border-y px-8 pt-12 text-white md:flex-row lg:items-start">
//         <div className="flex h-full w-full flex-col justify-between pb-16 md:w-max">
//           <h3 className="h3 mb-4 min-w-max font-semibold">What I bring</h3>
//           <p className="pb-8 italic md:pb-14">
//             Tap&nbsp;any&nbsp;icon&nbsp;to&nbsp;see&nbsp;my&nbsp;skills&nbsp;and
//             <br />
//             real-world applications.
//           </p>
//           <Link href="/#projects" className="button bg-blue-600/50 px-5 py-2">
//             View Projects
//           </Link>
//         </div>
//         <div className="flex-center-both w-full">
//           <div
//             className={`relative mb-12 aspect-square w-full max-w-[20rem] overflow-visible rounded-full`}
//           >
//             <div className="absolute inset-0 m-16 flex aspect-square items-center justify-center overflow-visible rounded-full bg-cover bg-center">
//               <img src={viteSvg} alt="vite" className="aspect-square w-1/3" />
//             </div>
//             <ul className="absolute inset-0 flex items-center justify-end">
//               {frontendTechnologies?.elements?.map((item) => (
//                 <Rotate index={Math.round(item.index * 30)} key={item.id}>
//                   <div
//                     className={`bg-conic-gradient opacity absolute top-1/2 aspect-square h-full -translate-y-1/2 translate-x-6 cursor-pointer rounded-full p-1`}
//                     onClick={() => handleNavigate(item.index)}
//                   >
//                     <div className="flex aspect-square h-full place-content-center items-center rounded-full bg-[#e4e4e7] p-3">
//                       <img
//                         src={item.icon}
//                         className="aspect-square h-full object-fill"
//                       />
//                     </div>
//                   </div>
//                 </Rotate>
//               ))}
//               {backendTechnologies?.elements?.map((item) => (
//                 <Rotate index={Math.round(item.index * 30)} key={item.id}>
//                   <div
//                     className={`bg-conic-gradient opacity absolute top-1/2 aspect-square h-full -translate-y-1/2 translate-x-6 cursor-pointer rounded-full p-1`}
//                     onClick={() => handleNavigate(item.index)}
//                   >
//                     <div className="flex aspect-square h-full place-content-center items-center rounded-full bg-[#e4e4e7] p-3">
//                       <img
//                         src={item.icon}
//                         className="aspect-square h-full object-fill"
//                       />
//                     </div>
//                   </div>
//                 </Rotate>
//               ))}
//               {databaseTechnologies?.elements?.map((item) => (
//                 <Rotate index={Math.round(item.index * 30)} key={item.id}>
//                   <div
//                     className={`bg-conic-gradient opacity absolute top-1/2 aspect-square h-full -translate-y-1/2 translate-x-6 cursor-pointer rounded-full p-1`}
//                     onClick={() => handleNavigate(item.index)}
//                   >
//                     <div className="flex aspect-square h-full place-content-center items-center rounded-full bg-[#e4e4e7] p-3">
//                       <img
//                         src={item.icon}
//                         className="aspect-square h-full object-fill"
//                       />
//                     </div>
//                   </div>
//                 </Rotate>
//               ))}
//               {otherTechnologies?.elements?.map((item) => (
//                 <Rotate index={Math.round(item.index * 30)} key={item.id}>
//                   <div
//                     className={`bg-conic-gradient opacity absolute top-1/2 aspect-square h-full -translate-y-1/2 translate-x-6 cursor-pointer rounded-full p-1`}
//                     onClick={() => handleNavigate(item.index)}
//                   >
//                     <div className="flex aspect-square h-full place-content-center items-center rounded-full bg-[#e4e4e7] p-3">
//                       <img
//                         src={item.icon}
//                         className="aspect-square h-full object-fill"
//                       />
//                     </div>
//                   </div>
//                 </Rotate>
//               ))}
//             </ul>
//             <LeftCurve />
//             <RightCurve />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
