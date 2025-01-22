
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../component/ui/button";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center py-10 mt-28 px-4 sm:px-8 md:px-16 lg:px-20">
      {/* Nike Logo */}
      <Image
        src="/images/img2.png"
        alt="Nike"
        width={40}
        height={10}
        className="pb-5"
      />

      {/* Title */}
      <h2 className="uppercase w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl pb-5">
        YOUR ACCOUNT FOR EVERYTHING NIKE
      </h2>

      {/* Form */}
      <form className="flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        {/* Email Input */}
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray text-sm md:text-base"
          type="text"
          placeholder="Email Address"
        />

        {/* Password Input */}
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray text-sm md:text-base"
          type="password"
          placeholder="Password"
        />

        {/* Remember Me and Forgot Password */}
        <div className="flex justify-between items-center py-5 text-xs sm:text-sm md:text-base">
          <div>
            <input type="checkbox" id="remember" />
            <label
              className="ml-2 cursor-pointer text-text-secondary-gray text-[#8D8D8D]"
              htmlFor="remember"
            >
              Keep me signed in
            </label>
          </div>
          <div>
            <a href="#" className="text-[#BCBCBC]">
              Forgotten your password?
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-4">
          <p className="text-[#8D8D8D] text-center text-xs sm:text-sm md:text-base">
            By creating an account, you agree to Nike&apos;s
            <u>Privacy <br /></u>
          </p>
          <p className="text-[#8D8D8D] text-center text-xs sm:text-sm md:text-base">
            Policy and <u>Terms of Use</u>
          </p>
        </div>

        {/* Sign In Button */}
        <Button className="rounded-sm py-3 w-full mt-8 text-sm md:text-base">
          SIGN IN
        </Button>

        {/* Join Us */}
        <p className="text-center mt-4 text-xs sm:text-sm md:text-base">
          <span className="text-text-secondary-gray">Not a Member? </span>
          <Link className="underline" href="/joinus">
            Join Us.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn