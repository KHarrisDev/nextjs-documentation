import Link from "next/link";
import Image from "next/image";
import React from "react";
import { HiBars3 } from "react-icons/hi2";
import Logo from "../../../../public/logo/fpr-logo.png";

export default function Navigation() {
  return (
    <>
      <nav className="bg-transparent py-7 lg:py-9 w-full">
        {/* navbar */}
        <div className="container px-7 mx-auto">
          {/* container */}

          <div className="flex justify-between items-center">
            {/* container for logo and nav so that space-between applies */}
            {/* items-center aligns all child in the center of x-axis */}

            {/* logo - child 1 */}
            <div>
              <Link href="/">
                <Image src={Logo} alt="Fieldpoint Roofing" className="logo" />
              </Link>
            </div>

            {/* child 2 -navigation -button*/}
            <div className="flex items-center">
              {/* child 1 - navigation */}
              <div className="hidden lg:block mr-7">
                <ul className="flex space-x-7">
                  <li>
                    <Link href="/" className="text-neutral text-xl">
                      (609)247-7861
                    </Link>
                  </li>
                  <li>
                    <Link href="/finance" className="text-neutral text-xl">
                      Financing
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-neutral text-xl">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                {/* child - 2 - button */}
                <Link
                  href="#"
                  className="px-10 py-1 bg-primary rounded-full hidden lg:inline-block text-neutral text-xl"
                >
                  Contact
                </Link>
                {/* phone number and hamburger menu */}
                <div className="flex items-center">
                  <div className="xl:hidden lg:hidden text-neutral text-xl mr-8">
                    <Link href="/">(609)247-7861</Link>
                  </div>
                  <button className="xl:hidden lg:hidden text-neutral text-2xl pb-1">
                    <HiBars3 />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div></div>
    </>
  );
}
