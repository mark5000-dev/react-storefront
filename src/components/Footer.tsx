import { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => (
  <div className="bg-black text-gray-400 p-4 text-center mt-auto">
    <div>&copy; Copyright | All Rights Reserved</div>
    <div>
      <Link
        to="https://alim1496.github.io/"
        className="hover:underline hover:font-bold opacity-85 hover:opacity-100"
      >
        M A Alim
      </Link>
    </div>
  </div>
);

export default Footer;
