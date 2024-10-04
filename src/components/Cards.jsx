import React from "react";

const Cards = ({ viewMode }) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto pb-10 mb-10">
      <div
        className={`grid gap-6 mx-5 ${
          viewMode === "mobile" ? "grid-cols-1" : "min-md:grid-cols-3"
        }`}
      >
        {/* card 1 */}
        <div className="p-5 rounded-lg bg-cardBg   flex flex-col">
          <div className=" grow">
            <div className="mb-3">
              <p className="font-semibold text-primary">Email</p>
              <p className="text-sm text-primary">
                Email us your queries and we'll get back to you ASAP.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                class="text-svg"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0a8 8 0 1 0 3.2 15.335l.916-.4-.8-1.833-.916.4A6 6 0 1 1 14 8v1a1 1 0 1 1-2 0V8a4.033 4.033 0 1 0-1.286 2.92A2.987 2.987 0 0 0 16 9V8a8.009 8.009 0 0 0-8-8Zm0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"></path>
              </svg>
              <p className="text-sm text-primary">hello@cruip.com</p>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="p-5 rounded-lg bg-cardBg flex flex-col">
          <div className=" grow">
            <div className="mb-3">
              <p className="font-semibold">Phone</p>
              <p className="text-sm">
                Would you like to have a chat? Feel free to give us a call.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                class="c81ef ct630"
                width="12"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 13V3h8v10H2Z"></path>
              </svg>
              <p className="text-sm text-primary">+447359510000</p>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="p-5 rounded-lg bg-cardBg  flex flex-col">
          <div className=" grow">
            <div className="mb-3">
              <p className="font-semibold">Address</p>
              <p className="text-sm text-primary">
                Prefer to visit? We're located in London, United Kingdom.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                class="c81ef ct630"
                width="14"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.591 15.069c.404.358.684.606.709.631.4.4 1 .4 1.4.1.05-.05 1.075-.975 2.1-1.9 1.025-.925 2.05-1.85 2.1-1.9 1.4-1.3 2.1-3.1 2.1-5 0-3.9-3.1-7-7-7S0 3.1 0 7c0 1.9.7 3.7 2.1 4.9 0 .075 2.293 2.107 3.491 3.169ZM7 13.7l-3.4-3C2.6 9.7 2 8.4 2 7c0-2.8 2.2-4.9 5-4.9s5 2.2 5 5c0 1.4-.6 2.6-1.6 3.6l-3.4 3ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
              </svg>
              <p className="text-primary text-sm">London, SW1Y 4AH, UK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
