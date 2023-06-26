export default function Footer() {
  return (
    <footer>
      <div className="grid h-max space-y-6 divide-y divide-blue-900 bg-primary p-10 px-5 py-10  text-sm text-white ">
        <div className="space-y-5">
          <img src="" alt="" className="h-20 w-20 bg-black" />
          <div className="space-y-2">
            <p>Chelsea Football CLub</p>
            <p>Stamford Bridge</p>
            <p>Fulham Road</p>
            <p>London</p>
            <p>SW6 1HS</p>
          </div>
          <nav className="pb-8 pt-12">
            <ul className="flex justify-between text-xl">
              <li>
                <i className="fa-brands fa-square-facebook"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i className="fa-brands fa-youtube"></i>
              </li>
              <li>
                <i className="fa-brands fa-tiktok"></i>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="">
          <li className="my-2 py-2">Contact Us</li>
          <li className="my-2 py-2">Frequently Asked Questions</li>
          <li className="my-2 py-2">Junior Blues</li>
        </ul>
        <div className="space-y-5 py-8">
          <img className="h-16 w-24 bg-black"></img>
          <p>
            Get unrivalled access to all things Chelsea with our official club
            app, The 5th Stand.
          </p>
          <div>
            <button>Apple</button>
            <button>Playstore</button>
          </div>
        </div>
      </div>
      <div className="grid h-max space-y-6 divide-y divide-blue-900 bg-details p-10 text-sm text-white">
        <ul className="grid space-y-2 pt-6">
          <li>Careers</li>
          <li>Modern Slavery Act</li>
          <li>Privacy Policy</li>
          <li>Cookies Policy</li>
          <li>Terms & Conditions</li>
          <li>Enviromantal Policy</li>
        </ul>
        <p className="pt-6">
          © 2023 Chelsea FC. All rights reserved. No part of this site may be
          reproduced without our written permission.
        </p>
        <div className="pt-6">
          <button>English</button>
        </div>
      </div>
    </footer>
  );
}
