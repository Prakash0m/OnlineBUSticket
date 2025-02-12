import React from "react";
import RootLayout from "../../layout/RootLayout";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import MasterCardImg from "../../assets/mastercard.png";
import CreditCardImg from "../../assets/creditcard.png";
import PaypalIMg from "../../assets/paypal.png";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-neutral-950 py-12">
      <RootLayout className="space-y-10">
        {/* Footer other content */}
        <div className="w-full grid grid-cols-5 gap-8">
          <div className="col-span-2 space-y-8 md:pr-10 pr-0">
            <div className="space-y-3">
              {/* Logo */}
              <Link to="/" className="text-6xl text-red-500 font-bold">
                Online Bus Ticket
              </Link>
              {/* Description */}
              <p className="text-sm text-neutral-500 font-normal">
                Bus is all about booking tickets through an online system. We
                provide the best bus tickets for your journey.
              </p>
            </div>
            {/* Social Links */}
            <div className="w-full flex items-center gap-x-5">
              {[FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaLinkedin].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-full h-11 rounded-xl bg-neutral-800/40 hover:bg-red-500 flex items-center justify-center cursor-pointer transition duration-500"
                  >
                    <Icon className="w-5 h-5 text-neutral-50" />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold">
              Quick Links
            </h1>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 transition duration-300"
              >
                About Us
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 transition duration-300"
              >
                My Account
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 transition duration-300"
              >
                Reserve your tickets
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 transition duration-300"
              >
                Create your account
              </Link>
            </div>
          </div>

          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold">
              Top Reserved Routes
            </h1>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 transition duration-300"
              >
                Kathmandu - Dharan
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 transition duration-300"
              >
                Pokhara - Kathmandu
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 transition duration-300"
              >
                Kathmandu - Biratnagar
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 transition duration-300"
              >
                Kathmandu - Kakarbhitta
              </Link>
            </div>
          </div>

          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold">
              Support Links
            </h1>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 transition duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 transition duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 transition duration-300"
              >
                Help & Support
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 transition duration-300"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-neutral-800/50"></div>

        {/* Copyright and Payment Options */}
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-neutral-600 font-normal">
            Copyright &copy; 2025. All Rights Reserved.
          </p>
          <div className="flex items-center gap-x-2">
            <img
              src={MasterCardImg}
              alt="MasterCard"
              className="w-12 h-9 object-contain"
            />
            <img
              src={CreditCardImg}
              alt="Credit Card"
              className="w-12 h-9 object-contain"
            />
            <img
              src={PaypalIMg}
              alt="PayPal"
              className="w-12 h-9 object-contain"
            />
          </div>
        </div>
      </RootLayout>
    </div>
  );
};

export default Footer;
