'use client';
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";

const Scrollimg = () => {
  let servImg = [
    { image: "/images/img-1.webp", isNew: false  },
    { image: "/images/img-2.webp", isNew: true  },
    { image: "/images/img-3.webp", isNew: false  },
    { image: "/images/img-4.webp", isNew: true  },
    { image: "/images/img-5.webp", isNew: false  },
    { image: "/images/img-6.webp", isNew: false  },
    { image: "/images/img-7.webp", isNew: false  },
    { image: "/images/img-8.webp", isNew: false  },
    { image: "/images/img-9.webp", isNew: true  },
    { image: "/images/img-10.webp", isNew: false  },
  ];

  const [position, setPosition] = useState(0);

  function rightbtn(){
    let pro = [...servImg]
    set
  }
  return (
    <div className='container mx-auto px-18 py-4'>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          What other services can we help you with?
        </h1>

        <div className="flex gap-4">
          <button  className="rounded-full w-[40px] h-[40px] cursor-pointer bg-amber-400 flex justify-center items-center hover:bg-amber-500 transition">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button onClick={()=>{rightbtn}} className="rounded-full w-[40px] h-[40px] cursor-pointer bg-amber-400 flex justify-center items-center hover:bg-amber-500 transition">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* <div className='flex gap-5 mt-5 border border-amber-800 overflow-hidden'>
        {servImg.map((elm, ind) => (
          <div
            key={ind}
            style={{ transform: `translateX(${position}px)`, transition: "transform 0.5s" }}
            className="w-[200px] h-[180px] shrink-0 rounded bg-amber-700 flex-row"
          >
            <img src={elm.image} alt="services-images" className='w-full h-full object-cover' />
          </div>
        ))}
      </div> */}




      <div className='flex gap-5 mt-5 overflow-hidden'>
        {servImg.map((elm, ind) => (
          <div
            key={ind}
            style={{ transform: `translateX(${position}px)`, transition: "transform 0.5s" }}
            className="relative w-[200px] h-[160px] shrink-0 rounded-md bg-gray-300 shadow-md hover:shadow-lg transition-all duration-200 ease-out"
          >
            <img
              src={elm.image}
              alt="services-images"
              className='w-full h-full object-cover rounded-md'
            />

            {/* Optional “New” ribbon (like original design) */}
            {elm.isNew &&(
               <div className="absolute top-10 left-[-25px]">
              <svg className="w-[81px] h-[24px]" viewBox="0 0 81 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path fill="#00C3FF" d="M7.308 16H0l7.308 8z"></path>
                  <path fill="#00C3FF" d="M0 0h81L69 7.976 81 16H0z"></path>
                </g>
              </svg>
              <span className="absolute top-[2px] left-[8px] text-xs font-semibold text-white">New</span>
            </div>
            )}
           
          </div>
        ))}
      </div>





    </div>
  );
};

export default Scrollimg;










// 'use client';

// import React, { useRef } from 'react';
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Scrollimg = () => {
//   const scrollRef = useRef(null);

//   const servImg = [
//     { image: "/images/img-1.webp" },
//     { image: "/images/img-2.webp" },
//     { image: "/images/img-3.webp" },
//     { image: "/images/img-4.webp" },
//     { image: "/images/img-5.webp" },
//     { image: "/images/img-6.webp" },
//     { image: "/images/img-7.webp" },
//     { image: "/images/img-8.webp" },
//   ];

//  const scroll = (direction) => {
//   const scrollContainer = scrollRef.current;
//   if (!scrollContainer) return; // Prevent null error

//   const scrollAmount = 420;
//   scrollContainer.scrollBy({
//     left: direction === 'left' ? -scrollAmount : scrollAmount,
//     behavior: 'smooth',
//   });
// };

//   return (
//     <div className='container mx-auto px-6 py-6'>
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
//           What other services can we help you with?
//         </h1>

//         <div className="flex gap-4">
//           <button onClick={() => scroll('left')} className="rounded-full w-[40px] h-[40px] bg-amber-400 flex justify-center items-center hover:bg-amber-500 transition">
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button onClick={() => scroll('right')} className="rounded-full w-[40px] h-[40px] bg-amber-400 flex justify-center items-center hover:bg-amber-500 transition">
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>
//       </div>

//       <div ref={scrollRef} className="flex gap-5 mt-5 overflow-x-scroll scroll-smooth">
//         {servImg.map((elm, i) => (
//           <div key={i} className="flex-none w-[380px] h-[200px] rounded-lg overflow-hidden shadow-md">
//             <img src={elm.image} alt={`service-${i}`} className="w-full h-full object-cover" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Scrollimg;










// 'use client';

// import React, { useRef } from 'react';
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Scrollimg = () => {
//   const scrollRef = useRef(null);

//   const leftbtn = () => {
//     scrollRef.current.scrollBy({
//       left: -300,
//       behavior: "smooth"
//     });
//   };

//   const rightbtn = () => {
//     scrollRef.current.scrollBy({
//       left: 300,
//       behavior: "smooth"
//     });
//   };

//   return (
//     <div className="flex items-center justify-between container mx-auto px-18 py-4">
//       <button onClick={leftbtn}>
//         <ChevronLeft />
//       </button>

//       <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth">
//         <img src="/images/img-1.webp" alt="img1" />
//         <img src="/images/img-2.webp" alt="img2" />
//         <img src="/images/img-3.webp" alt="img3" />
//         <img src="/images/img-4.webp" alt="img4" />
//       </div>

//       <button onClick={rightbtn}>
//         <ChevronRight />
//       </button>
//     </div>
//   );
// };

// export default Scrollimg;

