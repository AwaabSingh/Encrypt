import React from "react";
import { Link } from "react-router-dom";

const PricingGrid = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
        {/* col 1 */}
        <div className="bg-slate-700 rounded-xl text-white">
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-darkBlue">
            <div className="text-center uppercase">Free</div>
            <h2 className="mt-10 font-serif text-5xl text-center">&#8358;0</h2>
            <h3 className="mt-2 text-center">per Month</h3>
            <div className="flex justify-center">
              <Link
                to="#"
                className="inline-block px-10 py-3 my-6 text-center border rounded-lg hover:bg-primaryBlue hover:border-primaryBlue"
              >
                Purchase
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-700"></div>

          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-darkBlue">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">Unlimited passwords</span>
              </div>

              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">30-day Premium trial</span>
              </div>

              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 "
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                  Password generator
                </svg>
                <span className="text-sm ml-1">Password generator</span>
              </div>
            </div>
          </div>
        </div>

        {/* col 2 */}
        <div className="bg-primaryBlue rounded-xl text-white hidden md:block">
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-darkBlue">
            <div className="text-center uppercase">Standard</div>
            <h2 className="mt-10 font-serif text-5xl text-center">
              &#8358;1,500
            </h2>
            <h3 className="mt-2 text-center">per Month</h3>
            <div className="flex justify-center">
              <Link
                to="#"
                className="inline-block px-10 py-3 my-6 text-center border border-primaryBlue rounded-lg duration-200 bg-primaryBlue hover:bg-blue-800 hover:border-blue-800"
              >
                Purchase
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-700"></div>

          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-darkBlue">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">Includes all Free features</span>
              </div>

              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">Personal customer support</span>
              </div>

              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">
                  1 GB encrypted file storage
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* col 3 */}
        <div className="bg-slate-700 rounded-xl text-white hidden md:block">
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-darkBlue">
            <div className="text-center uppercase">Premium</div>
            <h2 className="mt-10 font-serif text-5xl text-center">
              &#8358;2,000
            </h2>
            <h3 className="mt-2 text-center">per Month</h3>
            <div className="flex justify-center">
              <Link
                to="#"
                className="inline-block px-10 py-3 my-6 text-center border rounded-lg hover:bg-primaryBlue hover:border-primaryBlue"
              >
                Purchase
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-700"></div>

          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-darkBlue">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">
                  Includes all Standard features
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">Security dashboard</span>
              </div>

              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">Access on all devices</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:hidden">
          <Link
            to="/pricing"
            className="inline-block px-10 py-3 my-6 text-center border rounded-full bg-darkBlue text-lightColor"
          >
            See All Pricing Plan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingGrid;
