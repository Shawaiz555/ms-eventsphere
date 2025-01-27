'use client';
import React, { useEffect } from 'react'
// import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

// Working on matching of user through role is to be done!!

const withAuth = (WrappedComponent) => {
  return function AuthHOC(props) {
    const user = JSON.parse(localStorage.getItem('signedInUser'));
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push("/"); // Redirect to the sign-in page if not authenticated
        toast.error("Access Denied!!!");

      }
    }, [user, router]);

    if (!user) {
      // Optionally, you can render a loading spinner here
      return <p>Loading...</p>;
    }
    if (user.role === "admin") {
      return <WrappedComponent {...props} />; // Render the wrapped component if authenticated
    }
    else {
      router.push("/Home");
      toast.error("Access Denied!!!");      
    }

  };
};

export default withAuth;
