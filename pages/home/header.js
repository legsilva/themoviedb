/* This example requires Tailwind CSS v2.0+ */
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Header() {
  return (
    <Popover className="relative bg-[#032541]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start items-center lg:w-0 lg:flex-1">
            <a href="#" className="px-3">
              <span className="sr-only">Workflow</span>
              <Image
                className="h-20 w-auto sm:h-10"
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                width="150px"
                height="40px"
                alt=""
              />
            </a>

            <a
              href="#"
              className="px-3 text-base font-normal text-slate-200 hover:text-white"
            >
              Filmes
            </a>
            <a
              href="#"
              className="px-3 text-base font-normal text-slate-200 hover:text-white"
            >
              Séries
            </a>

            <a
              href="#"
              className="px-3 text-base font-normal text-slate-200 hover:text-white"
            >
              Pessoas
            </a>

            <a
              href="#"
              className="px-3 text-base font-normal text-slate-200 hover:text-white"
            >
              Mais
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-200 hover:text-white"
            >
              Entrar
            </a>
            <a
              href="#"
              className="ml-8 
              whitespace-nowrap 
              inline-flex 
              items-center
              justify-center 
              px-4 py-2 
              border 
              border-transparent 
              rounded-md 
              shadow-sm 
              text-base 
              font-medium 
              text-white 
              bg-[#07b5e1] 
              hover:bg-[#8ecea2]
              hover:text-white"
            >
              Se Registrar
            </a>
          </div>
        </div>
      </div>
    </Popover>
  );
}
