'use client';
import React, { useEffect } from 'react'
// import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';


const withAuth = (WrappedComponent) => {
    return function AuthHOC(props) {
      const user = JSON.parse(localStorage.getItem('signedInUser'));
      const router = useRouter();
  
      useEffect(() => {
        if (!user) {
          router.push("/"); // Redirect to the sign-in page if not authenticated
        }
      }, [user, router]);
  
      if (!user) {
        // Optionally, you can render a loading spinner here
        return <p>Loading...</p>;
      }
  
      return <WrappedComponent {...props} />; // Render the wrapped component if authenticated
    };
  };

  export default withAuth;
