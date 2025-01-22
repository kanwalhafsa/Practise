
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../component/ui/button";
import { Input } from "@/components/ui/input";

const JoinUs = () => {
  return (
    <div className="flex flex-col items-center py-10 mt-28">
      {/* Nike Logo */}
      <Image
        className="pb-5"
        src="/images/img2.png"
        width={40}
        height={10}
        alt="Nike"
      />
      {/* Heading */}
      <h2 className="uppercase text-center font-bold pb-5 text-lg sm:text-xl md:text-2xl">
        BECOME A NIKE MEMBER
      </h2>
      <p className="w-80 text-center text-text-secondary-gray pb-5 text-sm sm:text-base md:text-lg">
        Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
      </p>

      {/* Form */}
      <form className="flex flex-col w-full max-w-md">
        {/* Input Fields */}
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="password"
          placeholder="Password"
        />
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="First Name"
        />
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="date"
          placeholder="Date of Birth"
        />
        <p className="pb-3 text-text-secondary-gray text-sm text-center">
          Get a Nike Member Reward every year on your Birthday.
        </p>

        {/* Country Select */}
        <select
          className="w-full border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          name="country"
          id="country"
        >
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Canada">Canada</option>
        </select>

        {/* Gender Select */}
        <div className="flex gap-5 mt-1">
          <div className="border-[#E5E5E5] rounded-md py-4 border-[2px] w-2/4 text-center text-text-secondary-gray">
            Male
          </div>
          <div className="border-[#E5E5E5] rounded-md py-4 border-[2px] w-2/4 text-center text-text-secondary-gray">
            Female
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex justify-between items-center py-7">
          <div>
            <input type="checkbox" id="remember" />
            <label
              className="ml-2 pl-2 cursor-pointer text-text-secondary-gray"
              htmlFor="remember"
            >
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
            </label>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex flex-col justify-center items-center mt-4">
          <p className="text-[#BCBCBC] text-center text-xs sm:text-sm md:text-base">
            By creating an account, you agree to Nike&apos;s
            <u>Privacy <br /></u>
          </p>
          <p className="text-[#BCBCBC] text-center text-xs sm:text-sm md:text-base">
            Policy and <u>Terms of Use</u>
          </p>
        </div>

        {/* Join Us Button */}
        <Link href={"/join us"}>
          <Button className="rounded-sm py-3 w-full mt-4">JOIN US</Button>
        </Link>

        {/* Already a Member */}
        <p className="text-center mt-4 text-xs sm:text-sm md:text-base">
          <span className="text-text-secondary-gray">Already a Member? </span>
          <Link className="underline" href="/sign in">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default JoinUs;