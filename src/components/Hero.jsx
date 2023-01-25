import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Hero = () => {
	const { user } = useSelector((state) => state.auth);
	return (
    <section id="hero" className="md:h-[500px] bg-primaryBlue md:pt-5">
      <div className="max-w-6xl container flex flex-col-reverse md:flex-row items-center p-8 md:px-6 mx-auto">
        <div className="flex flex-col mb-10 space-y-12 md:w-1/2 md:pt-10 md:mb-32">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-lightColor space-y-2">
            Password Management from Anywhere
          </h1>
          <p className="max-w-sm text-center  md:text-left text-lightColor px-2 md:px-0">
            Say goodbye to forgotten passwords with Encrpt. Keep all your login
            information safe and secure in one convenient location
          </p>
          <div className="flex justify-center md:justify-start">
            {user ? (
              <Link
                to="/dashboard"
                className="md:block p-3 px-6 pt-2 text-white bg-darkBlue rounded-full baseline hover:bg-secondaryBlue"
              >
                Go to DashBoard
              </Link>
            ) : (
              <Link
                to="/register"
                className="md:block p-3 px-6 pt-2 text-white bg-darkBlue rounded-full baseline hover:bg-secondaryBlue"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
        {/*image  */}
        <div className="md:w-1/2 md:pb-28">
          <img src="/img/heroImg.svg" alt="" className="p-14" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
