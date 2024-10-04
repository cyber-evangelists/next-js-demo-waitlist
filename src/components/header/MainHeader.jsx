import React from "react";

const MainHeader = () => {
  return (
    <div className=" px-6 min-md:mt-6 flex justify-center mb-10 bg-custom_gradient">
      <div className="w-full max-w-3xl">
        <div className="rounded-lg flex gap-2 h-12 justify-between items-center px-3 shadow-cf0cr bg-gradient relative">
          <div className="bg-shadow rounded-sm -z-10 -inset-[0.375rem] absolute">
            {/* <div className="bg-cr2ij rounded-sm  -inset-1 absolute ">
              <span className="after:content-['*'] top-0 bg-couhs"></span>
              <span className="after:content-['*'] bottom-0  "></span>
            </div> */}
          </div>
          {/* site branding */}
          <div className="flex grow shrink ">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32}>
                <path
                  className="fill-[#a5b4fc]"
                  d="M16.975 3.036c6.402.475 11.514 5.586 11.99 11.989H24.32a7.345 7.345 0 0 1-7.345-7.345V3.036Zm-1.95 21.284v4.644c-6.402-.475-11.514-5.587-11.989-11.99H7.68a7.345 7.345 0 0 1 7.345 7.346Z"
                ></path>
                <path
                  className="fill-[#6366f1]"
                  d="M3.036 15.025c.475-6.403 5.587-11.514 11.99-11.99V7.68a7.345 7.345 0 0 1-7.346 7.345H3.036Zm21.284 1.95h4.644c-.475 6.402-5.586 11.514-11.989 11.989V24.32a7.345 7.345 0 0 1 7.345-7.345Z"
                ></path>
              </svg>
            </a>
          </div>
          {/* navigation links */}
          <nav className="">
            <ul className="flex justify-center items-center gap-3">
              <li className="font-medium min-md:px-6 min-md:py-1 hover:bg-shadow hover:cursor-pointer hover:rounded">
                Updates
              </li>
              <li className="min-md:px-6 min-md:py-1 hover:bg-shadow hover:cursor-pointer hover:rounded">
                FAQ
              </li>
              <li className="min-md:px-6 min-md:py-1 hover:bg-shadow hover:cursor-pointer hover:rounded">
                Contact us
              </li>
            </ul>
          </nav>
          {/* dark/ light mode */}
          <div className="flex justify-end grow shrink">
            <input type="checkbox" className="absolute hidden" />
            <label className="cursor-pointer p-2">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-primary"
                  d="M9 0H7v2h2V0ZM14.294 3.052 12.88 1.637 11.466 3.05l1.413 1.414 1.415-1.413ZM16 7h-2v2h2V7ZM11.535 13.02l1.415 1.413 1.414-1.415-1.415-1.413-1.414 1.414ZM9 14H7v2h2v-2ZM1.566 12.948l1.414 1.415 1.415-1.413-1.414-1.415-1.415 1.413ZM2 7H0v2h2V7ZM4.465 3.12 3.05 1.707 1.636 3.12l1.415 1.414L4.465 3.12Z"
                ></path>
                <path
                  className="fill-dark"
                  d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
