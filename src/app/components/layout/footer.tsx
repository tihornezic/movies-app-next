import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-darkblue-900 text-white py-10 text-center my-20">
      <div className="text-6xl mb-4">👋</div>

      <h4 className="text-4xl font-bold mb-4">That&lsquo;s it for today.</h4>

      <p className="mb-6 text-lg">
        Didn&lsquo;t find something to watch yet? We got you. Try discovering movies:
      </p>

      <div className="flex justify-center gap-4">
        <Link href="/discovery">
          <button
            type="button"
            className="h-12 px-9 mb-2 text-md font-bold text-main transition-colors duration-150 bg-primary-100 rounded-lg focus:shadow-outline hover:bg-primary-200"
          >
            Discover Movies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
