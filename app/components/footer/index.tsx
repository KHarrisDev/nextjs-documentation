"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const thresholdWidth = 768;

  return (
    <div>
      {windowWidth >= thresholdWidth ? (
        <footer className="bg-neutral-n07 pt-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <h1 className="text-neutral text-4xl mb-6">Lets Get in Touch</h1>
            </div>

            <div className="lg:flex lg:flex-row lg:gap-3 mb-4">
              <div className="lg:flex lg:flex-col">
                <div className="lg:flex lg:flex-col w-[350px] mb-2">
                  <label className="text-neutral-n02">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="bg-neutral-n02 h-10 placeholder-neutral-n13 border-transparent  rounded-sm border "
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="lg:flex lg:flex-col">
                  <label className="text-neutral-n02">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-neutral-n02 h-10 placeholder-neutral-n13 border-transparent  rounded-sm border border-gray-300"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div className="lg:flex lg:flex-col w-[350px]">
                <label className="text-neutral-n02">Message</label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  className="bg-neutral-n02 h-28 placeholder-neutral-n13 border-transparent rounded-sm border border-gray-300"
                  placeholder="Message"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary lg:ml-[33rem] text-neutral py-1 px-20 mb-12 rounded-full"
            >
              Send
            </button>
            <div className="contact-information flex flex-col text-neutral text-2xl mt-10">
              <h1 className="text-4xl mb-6">Fieldpoint Roofing</h1>
              <div className="lg:flex lg:flex-row">
                <div className="lg:flex lg:flex-row lg:gap-20 mr-10">
                  <div className="mb-6 text-sm">
                    <p>
                      318 E. White Horse Pike
                      <br />
                      Galloway
                      <br />
                      New Jersey
                      <br />
                      08205
                    </p>
                  </div>
                  <div className="mb-6 text-sm">
                    <p>HOURS</p>
                    <p>Monday - Friday - 9:00am to 5:00pm</p>
                    <p> Saturday and Sunday - Closed </p>
                  </div>
                </div>
                <div className="w-[350px]"></div>
              </div>
              <div className="mb-6">
                <p>(609) 247-7861</p>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="bg-neutral-n07 pt-20 mx-10">
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <h1 className="text-neutral text-6xl mb-6">Lets Get in Touch</h1>
            </div>

            <div className="lg:flex lg:flex-col">
              <div className="mb-3">
                <label className="text-neutral-n02">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-neutral-n02 placeholder-neutral-n13 border-transparent w-full px-6 py-2 rounded-sm border "
                  placeholder="Name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="text-neutral-n02">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-neutral-n02 placeholder-neutral-n13 border-transparent w-full px-6 py-2 rounded-sm border border-gray-300"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="text-neutral-n02">Message</label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  className="bg-neutral-n02 placeholder-neutral-n13 h-[10.125rem] border-transparent w-full px-6 py-2 mb-6 rounded-sm border border-gray-300"
                  placeholder="Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary w-full text-neutral py-1 px-20 mb-12 rounded-full"
              >
                Send
              </button>
            </div>

            <div className="contact-information flex flex-col text-neutral text-2xl mt-10">
              <h1 className="text-4xl mb-6">Fieldpoint Roofing</h1>
              <div className="mb-6">
                <p>
                  318 E. White Horse Pike
                  <br />
                  Galloway
                  <br />
                  New Jersey
                  <br />
                  08205
                </p>
              </div>
              <div className="mb-6">
                <p>(609) 247-7861</p>
              </div>
              <div className="mb-6">
                <p>HOURS</p>
                <p>Monday - Friday - 9:00am to 5:00pm</p>
                <p> Saturday and Sunday - Closed </p>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
