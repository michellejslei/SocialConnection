"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
// import { SignupButton } from "@/components/SignUpButton";
import { LoginButton } from "@/components/LoginButton";
import { LogoutButton } from "@/components/LogoutButton.js";
 
export const NavBarButtons = () => {
  const { user } = useUser();

  return (
    <div className="nav-bar__buttons">
      {!user && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {user && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};