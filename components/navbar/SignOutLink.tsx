"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";
import { Button } from "../ui/button";

const SignOutLink = () => {
  const handleLogOut = () => {
    toast.success("Logged out successfully!");
  };
  return (
    <SignOutButton redirectUrl='/'>
      <Button
        variant='ghost'
        className='w-full justify-start'
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </SignOutButton>
  );
};

export default SignOutLink;
