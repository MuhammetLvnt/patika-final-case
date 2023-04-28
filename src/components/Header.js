import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";

function Header() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      <div className="flex justify-between items-center container mx-auto text-white my-10">
        <div className="w-1/3 flex justify-center items-center">
          <Link to="/">
            <img
              className="w-auto h-8"
              alt="logo"
              src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
            />
          </Link>
        </div>

        <div className="w-1/3 flex justify-center items-center">
          <Link
            to="/StarshipList"
            className="text-xl uppercase font-semibold font-bruno hover:scale-110"
          >
            Starship List
          </Link>
        </div>
        <div className="w-1/3 flex justify-center items-center font-bruno uppercase">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center gap-x-1.5 rounded-md text-xl font-semibold">
                Profile
                <TiThMenu className="text-[#FF0000] mt-1" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#87CEFA]">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="https://www.linkedin.com/in/muhammet-levent/"
                        target="_blank"
                        className={classNames(
                          active ? " text-gray-900 flex" : "flex",
                          "block px-4 py-2 text-sm text-[#0A66C2]"
                        )}
                      >
                        <FaLinkedin className="mr-1 w-7 h-5 text-blue-500" />
                        Linkedlin
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="https://github.com/MuhammetLvnt"
                        target="_blank"
                        className={classNames(
                          active
                            ? "flex text-[#24292E]"
                            : "text-[#24292E] flex",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <FaGithub className="mr-1 w-7 h-5" />
                        Githup
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
