'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const withAuth = (WrappedComponent) => {
  return function AuthHOC(props) {
    const [authUser, setAuthUser] = useState(null); // Start with null
    const [isLoading, setIsLoading] = useState(true); // To prevent rendering before auth check
    const router = useRouter();

    useEffect(() => {
      // Ensure localStorage is accessed only in the browser
      const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('signedInUser')) : null;

      if (!user) {
        toast.error("Access Denied!");
        router.push("/");
      } else {
        setAuthUser(user); 
      }

      setIsLoading(false);
    }, [router]);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!authUser) {
      return null; // No rendering while redirection is happening
    }

    if (authUser.role === "admin") {
      // Render the wrapped component (e.g., Dashboard) if role matches
      return <WrappedComponent {...props} />;
    } 
    else {
      // Redirect to `/Home` for non-admin users
      toast.error("Access Denied!");
      router.push("/Home");
      return null; // No rendering after redirect
    }
  };
};

export default withAuth;
