import React from "react";

const GetInTouch = () => {
  return (
    <section>
      <div className="pt-6 flex justify-center">
        <div className="px-4 sm:px-6 w-full max-w-3xl">
          <div className="mb-12 md:mb-20 flex flex-col justify-center items-center">
            <div className=" bg-shadow shadow-cf0cr px-2 py-1 rounded-lg">
              <div className=" py-1 px-3 bg-primary rounded-lg ">
                <span>Contact us</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold pb-4 mt-4">
              Get in touch
            </h1>
            <p className="text-xl text-center">
              Fill out the form below to set up a call, or keep reading to get
              in touch with us for customer support, partnerships, or media
              enquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
