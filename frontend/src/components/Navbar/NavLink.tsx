import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <a
      href={href}
      className={clsx(
        "hover:text-brands-hover-dark",
        isActive ? "text-brands-hover-dark" : "text-text-primary-dark",
      )}
    >
      {children}
    </a>
  );
};

export default NavLink;
