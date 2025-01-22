
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { Button } from '../../../component/ui/button';
import { IoThumbsUpSharp, IoThumbsDownSharp, IoFilterSharp } from 'react-icons/io5';
import { SlMagnifier } from 'react-icons/sl';

const Help = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 mt-36">
      {/* Form Section */}
      <div className="form items-center justify-center my-6 text-center">
        <h2 className="text-3xl font-semibold uppercase">Get Help</h2>
        <div className="flex flex-col sm:flex-row justify-center mt-6">
          <input
            className="w-full sm:w-auto max-w-md text-sm px-4 py-2 border border-gray-400 rounded-md focus:outline-none"
            type="text"
            placeholder="What can we help you with?"
          />
          <button className="mt-4 sm:mt-0 sm:ml-2">
            <SlMagnifier className="text-gray-500" size={24} />
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="faqs px-4 lg:px-8">
          <h3 className="text-3xl font-semibold uppercase mb-4">
            What Payment Options Can I Use on Nike Orders?
          </h3>
          <p className="mb-4">
            We want to make buying your favorite Nike shoes and gear online fast and easy. We accept the following payment options:
          </p>
          <ul className="list-disc pl-6">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>
              PayTM or a local credit or debit card when you enter your PAN information at checkout.
            </li>
            <li>Apple Pay</li>
          </ul>
          <p className="mt-4">
            <span className="font-semibold underline">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, <Link href="#" className="underline font-semibold">join us</Link> today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/joinus" className="px-6 py-2 text-white bg-black rounded-full">Join Us</Link>
            <Link href="/" className="px-6 py-2 text-white bg-black rounded-full">Shop Nike</Link>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold">FAQs</h4>
            <div className="mt-4">
              <h5 className="font-semibold">Does my card need international purchases enabled?</h5>
              <p>
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled. Please note, some banks may charge a small transaction fee for international orders.
              </p>
            </div>
            <div className="mt-4">
              <h5 className="font-semibold">Can I pay for my order with multiple methods?</h5>
              <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
            </div>
            <div className="mt-4">
              <h5 className="font-semibold">What payment method is accepted for SNKRS orders?</h5>
              <p>You can use any accepted credit card to pay for your SNKRS order.</p>
            </div>
            <div className="mt-4">
              <h5 className="font-semibold">Why don't I see Apple Pay as an option?</h5>
              <p>
                To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p>Was this answer helpful?</p>
            <div className="flex space-x-4 mt-2">
              <IoThumbsUpSharp size={30} className="text-black" />
              <IoThumbsDownSharp size={30} className="text-black" />
            </div>
          </div>

          <div className="mt-8">
            <h5 className="text-gray-500">Related</h5>
            <ul className="underline font-semibold space-y-2 mt-2">
              <li>What are Nike's delivery options?</li>
              <li>How do I get free delivery on Nike orders?</li>
            </ul>
          </div>
        </div>

        {/* Store Locator Section */}
        <div className="w-full lg:w-[40%] bg-white p-6 rounded-lg shadow-md mx-auto mt-8 lg:mt-0">
          {/* Title */}
          <h3 className="text-3xl font-semibold text-center mb-6">Contact Us</h3>
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/mlogo.png"
              alt="Logo"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          {/* Contact Details */}
          <p className="text-lg font-bold text-center mb-4">000 800 919 0566</p>
          <div className="text-center space-y-2">
            <p className="font-medium">Products & Orders: 24 hours a day, 7 days a week</p>
            <p className="font-medium">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
          </div>

          {/* Secondary Logo */}
          <div className="flex justify-center mt-11 mb-7">
            <Image
              src="/images/mlogo2.png"
              alt="Secondary Logo"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="text-center space-y-2">
            <p className='font-bold'>24 hours a day</p>
            <p className='font-medium'>7 days a week</p>
          </div>
          <div className="flex justify-center mt-7 mb-7">
            <Image
              src="/images/mlogo3.png"
              alt="Secondary Logo"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="text-center space-y-2">
            <p className='font-bold'>We'll reply within</p>
            <p className='font-medium'>five business days</p>
          </div>
          <div className="flex justify-center mt-7 mb-7">
            <Image
              src="/images/mlogo4.png"
              alt="Secondary Logo"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="text-center space-y-2">
            <p className='font-bold'>STORE LOCATOR</p>
            <p className='font-medium'>Find Nike retail stores near you</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Help;
