import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section>
      <div className="flex justify-center items-center py-10 flex-col space-y-5">
        <h6 className="text-primaryBlue font-semibold">PLANS & PRICING</h6>
        <h2 className="font-bold  text-xl md:text-4xl tracking-wider">
          Choose a plan that works for you
        </h2>
        <h4 className="font-medium text-lg  md:text-2xl tracking-wide">
          Try it for free, no credit card required.
        </h4>
      </div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
          {/* col 1 */}
          <div className="bg-slate-700 rounded-xl text-white">
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-darkBlue">
              <div className="text-center uppercase">Free</div>
              <h2 className="mt-10 font-serif text-5xl text-center">
                &#8358;0
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
                  <span className="text-sm ml-1"> limit of 15 passwords</span>
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
          <div className="bg-primaryBlue rounded-xl text-white ">
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
                  <span className="text-sm ml-1">
                    Includes all Free features
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
                  <span className="text-sm ml-1">
                    Personal customer support
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
                  <span className="text-sm ml-1">
                    1 GB encrypted file storage
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* col 3 */}
          <div className="bg-slate-700 rounded-xl text-white ">
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

          {/* col 4 */}
          <div className="bg-slate-700 rounded-xl text-white ">
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-darkBlue">
              <div className="text-center uppercase">Business Plan</div>
              <h2 className="mt-10 font-serif text-5xl text-caenter">
                &#8358;3,000
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
                    Includes all Premium features
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
                  <span className="text-sm ml-1">team management</span>
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
                  <span className="text-sm ml-1">multiple users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Free Basic Plan: Includes basic password management features such as password generation and storage, with a limit of 15 passwords.

// Premium Plan: $2.99/month or $29.99/year. Includes all features of the free plan, plus advanced features such as 2-factor authentication, password sharing, and unlimited password storage.

// Business Plan: Starts at $4.99/user/month. Includes all features of the Premium Plan, plus team management, reporting, and audit tools for businesses with multiple users.

// Educational and Non-Profit Discount: 25% off any of the plans for qualifying organizations.

// Free Trial: A 14-day free trial is available for all plans.

// Money-back Guarantee: 30-day money-back guarantee for all paid plans.

export default Pricing;
