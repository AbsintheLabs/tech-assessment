"use client";

import { useState } from "react";
import clsx from "clsx";
import { Logo } from "../Logo";
import { Avatar } from "../Avatar";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa"; // For the hamburger menu icon

type NavbarProps = { className?: string };

export const Navbar = ({ className }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={clsx(
        "bg-elevation-background-dark text-primary border-b border-b-elevation-2-dark",
        className,
      )}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Hamburger Icon */}
        {/* <div className="flex items-center space-x-4">
                  
                </div> */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/tasks">Tasks</NavLink>
          <NavLink href="/badges">Badges</NavLink>
          <NavLink href="/leaderboard">Leaderboard</NavLink>
          <NavLink href="/connections">Connections</NavLink>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="hidden lg:block border border-states-success-elevation2-dark rounded-full px-4 py-2 text-text-secondary-dark bg-elevation-2-dark hover:bg-gray-800">
            How It Works
          </button>
          <Avatar />

          <button className="text-white lg:hidden" onClick={toggleMenu}>
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-elevation-2-dark p-4 flex flex-wrap items-center justify-start gap-2">
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/tasks">Tasks</NavLink>
          <NavLink href="/badges">Badges</NavLink>
          <NavLink href="/leaderboard">Leaderboard</NavLink>
          <NavLink href="/connections">Connections</NavLink>
        </nav>
      )}
    </header>
  );
};
