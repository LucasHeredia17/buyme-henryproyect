"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const optionsUser = ["Orders", "Cart", "Signout"];
const optionsGuest = ["Signin", "Signup"];

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [profileOptions, setProfileOptions] = useState(optionsGuest);

  const { token, setToken } = useAuth();

  useEffect(() => {
    token ? setProfileOptions(optionsUser) : setProfileOptions(optionsGuest);
  }, [token]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    toggleMenu();
    Cookies.remove("token");
    setToken(null);
    router.push("/home");
  };

  return (
    <div className="relative flex flex-col items-center justify-center rounded-full">
      <button onClick={toggleMenu}>
        <FaUserCircle className="w-12 h-12 text-secondaryColor" />
      </button>
      {isOpen && (
        <div className="absolute w-32 top-14 flex items-center justify-center bg-tertiary text-tertiary shadow-xl rounded-lg bg-secondaryColorLight">
          <div className="bg-text rounded-lg p-2 ">
            <ul className="space-y-2 text-center">
              {(token ? optionsUser : optionsGuest).map((name) => (
                <li
                  onClick={
                    name.toLowerCase() === "signout" ? handleLogout : toggleMenu
                  }
                  key={name}
                  value={name}
                  className="py-2 px-6 hover:bg-tertiary text-textColor hover:bg-secondaryColorStrong hover:cursor-pointer transition-colors duration-200"
                >
                  {
                    <Link href={`/${name.toLowerCase()}`} key={name}>
                      {name}
                    </Link>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
