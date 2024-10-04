import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";

const ContactForm = () => {
  const menuItems = (
    <Menu
      items={[
        {
          label: "1 to 5 members",
          key: "1",
        },
        {
          label: "5 to 20 members",
          key: "2",
        },
        {
          label: "More than 20 members",
          key: "3",
        },
      ]}
    />
  );
  return (
    <div className="w-full max-w-2xl mx-auto  h-96 flex flex-col items-center">
      <form action="" className="min-md:w-2/4  bg-shadow px-2 py-2 rounded-xl">
        <div className="flex flex-row items-center px-3 py-1 w-full gap-1 bg-white rounded-lg mb-2 overflow-hidden">
          <svg
            className="fill-svgColor"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path d="M14.9 0c-.3 0-8.4.8-11.6 4-2.8 2.8-2.2 6.5-1.2 8.5L.3 14.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l1.8-1.8c.9.4 2.2.8 3.6.8 1.6 0 3.3-.5 4.9-2 3.4-3.4 4-11.3 4-11.6 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3Zm-4.3 11.3c-1.9 1.9-4.2 1.5-5.5 1.1L9.4 8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L3.6 11c-.4-1.4-.8-3.7 1.1-5.6 1.9-1.9 6.5-2.9 9.2-3.3-.3 2.3-1.1 7-3.3 9.2Z"></path>
          </svg>
          <input
            placeholder="Your Name.."
            className="focus:outline-none px-2 py-1"
          />
        </div>
        <div className="flex flex-row items-center px-3 py-1 w-full gap-1 bg-white rounded-lg mb-2 overflow-hidden">
          <svg
            className="fill-svgColor"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
          >
            <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z"></path>
          </svg>
          <input
            placeholder="Your Email.."
            className="focus:outline-none px-2 py-1"
          />
        </div>
        <div
          className="flex flex-row items-center px-3 py-1
         w-full gap-1 bg-white rounded-lg mb-2"
        >
          <svg
            className="fill-svgColor"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path d="m5.2.02 10 2A1 1 0 0 1 16 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3V1A1 1 0 0 1 5.2.02ZM2 12v2h4v-2H2Zm0-4v2h4V8H2Zm6 6h6V3.82l-8-1.6V6h1a1 1 0 0 1 1 1v7Zm2-8h2v6h-2V6Z"></path>
          </svg>

          <span className="w-full cursor-default">
            <Dropdown overlay={menuItems} trigger={["click"]}>
              <span className="flex justify-between">
                <span className="px-2 text-gray-500">Company Size</span>
                <DownOutlined />
              </span>
            </Dropdown>
          </span>
        </div>
        <textarea
          rows={3}
          placeholder="Your message.."
          className="focus:outline-none px-2 py-1 w-full rounded-lg"
        />
        <div className="flex flex-row items-center  py-1 w-full gap-3 mb-2">
          <input
            type="checkbox"
            placeholder="Your Name.."
            className="focus:outline-none px-2 py-1"
          />
          <span className="text-sm">
            I'd like to receive updates & product news.
          </span>
        </div>
        <button className="text-center px-3 py-2 bg-slate-900 text-white font-bold w-full rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
