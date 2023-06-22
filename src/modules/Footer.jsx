export default function Footer() {
  return (
    <footer className="grid h-max space-y-6 divide-y divide-blue-900 bg-details p-10 text-sm text-white">
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
    </footer>
  );
}
