import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { Link } from "@remix-run/react";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 font-Poppin text-black">
      {/* Left side - Contact Us and Mobile Number */}
      <div className="flex items-center">
        <div className="p-1">
          <FaPhoneAlt size={20} />
        </div>
        <div className="flex flex-col ml-2">
          <div>Contact Us : </div>
          <div>+91 73456 77789</div>
        </div>
      </div>

      {/* Middle - Logo */}
      <div className="font-extrabold text-2xl">TourBay</div>

      {/* Right side - Destination, TourType, Offers */}
      <div className="flex items-center space-x-4">
        {/* <div>Destination</div>
        <div>TourType</div>
        <div>Offers</div> */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pune
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default NavBar;
