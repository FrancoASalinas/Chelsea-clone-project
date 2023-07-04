export default function Footer() {
  return (
    <footer>
      <Footer1 />
      <Footer2 />
    </footer>
  );
}

function Footer1() {
  return (
    <div className="grid h-max space-y-6 divide-y divide-blue-900 bg-primary p-10 px-5 py-10  text-sm text-white lg:grid-cols-3 lg:space-x-6 lg:space-y-0 lg:divide-x lg:divide-y-0">
      <div className="space-y-5 px-5">
        <img
          src="src/assets/logo.png"
          alt="Chelsea logo"
          className="h-20 w-20 "
        />
        <div className="space-y-2">
          <p>Chelsea Football CLub</p>
          <p>Stamford Bridge</p>
          <p>Fulham Road</p>
          <p>London</p>
          <p>SW6 1HS</p>
        </div>
        <nav className="px-5 pb-8 pt-12">
          <ul className="flex w-max justify-between space-x-6 text-xl">
            <li>
              <i className="fa-brands fa-square-facebook cursor-pointer"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter cursor-pointer"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram cursor-pointer"></i>
            </li>
            <li>
              <i className="fa-brands fa-youtube cursor-pointer"></i>
            </li>
            <li>
              <i className="fa-brands fa-tiktok cursor-pointer"></i>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="px-5">
        <li className="my-2 cursor-pointer py-2">Contact Us</li>
        <li className="my-2 cursor-pointer py-2">Frequently Asked Questions</li>
        <li className="my-2 cursor-pointer py-2">Junior Blues</li>
      </ul>
      <div className="space-y-5 px-5 py-8">
        <img
          src="src/assets/the-fifth-stand.webp"
          className="w-24 cursor-pointer"
        ></img>
        <p>
          Get unrivalled access to all things Chelsea with our official club
          app, The 5th Stand.
        </p>
        <div>
          <a className="cursor-pointer">
            <img src="src/assets/googleplay.webp" className="m-2 w-24"></img>
          </a>
          <a className="cursor-pointer">
            <img src="src/assets/appstore.webp" className="m-2 w-24"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer2() {
  return (
    <div className="grid h-max space-y-6 divide-y divide-blue-900 bg-details p-10 text-sm text-white">
      <ul className="grid space-y-2 pt-6">
        <li className="cursor-pointer">Careers</li>
        <li className="cursor-pointer">Modern Slavery Act</li>
        <li className="cursor-pointer">Privacy Policy</li>
        <li className="cursor-pointer">Cookies Policy</li>
        <li className="cursor-pointer">Terms & Conditions</li>
        <li className="cursor-pointer">Enviromantal Policy</li>
      </ul>
      <p className="pt-6">
        © 2023 Chelsea FC. All rights reserved. No part of this site may be
        reproduced without our written permission.
      </p>
    </div>
  );
}
