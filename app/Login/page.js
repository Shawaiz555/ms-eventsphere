"use client";
import TextField from "@mui/material/TextField";
import Image from "next/image";
// import { useRouter } from "next/navigation"; 
import { useState } from "react";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

export default function Page() {
    const [adminLogin, setAdminLogin] = useState({
        Email: "",
        Password: "",
    });
    const [userLogin, setUserLogin] = useState({
        Email: "",
        Password: "",
    });
    const [emailError, setEmailError] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(null);
    // const router = useRouter(); 

    const emailValidation = (em) => {
        setAdminLogin({ ...adminLogin, Email: em });
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(em)) {
            setEmailError("Email is valid");
            setIsEmailValid(true);
        } else {
            setEmailError("Email is Invalid");
            setIsEmailValid(false);
        }
    };

    const handleUser = ()=>
    {
        e.preventDefault();
    }

    const handleAdmin = async (e) => {
        e.preventDefault();

        // if (emailError === "Email is valid") {
        //     if (adminLogin.Email && adminLogin.Password) {
        //         try 
        //         {
        //             // Use NextAuth's signIn method to log the user in
        //             const response = await signIn("credentials", {
        //                 redirect: false,
        //                 email: adminLogin.Email,
        //                 password: adminLogin.Password,
        //             });
    
        //             if (response?.error) 
        //             {
        //                 toast.error("Invalid credentials. Please try again.");
        //             } 
        //             else
        //             {
        //                 toast.success("Logged In Successfully!!!...");
        //                 setAdminLogin({ Email: "", Password: "" });
        //                 setEmailError("");
        //                 setIsEmailValid(null);
        //                 // router.push("/Dashboard");
        //             }
        //         } 
        //         catch (error)
        //         {
        //             console.error("Error during login:", error);
        //             toast.error("An error occurred while logging into the system.");
        //         }
        //     } 
        //     else 
        //     {
        //         toast.error("Please fill in all fields.");
        //     }
        // }


        if (emailError === "Email is valid") {
            if  (adminLogin.Email && adminLogin.Password) {
                try {
                    const response = await fetch("/Api/Login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: adminLogin.Email,
                            password: adminLogin.Password
                        })
                    });

                    if (!response.ok) {
                        toast.error("Failed to fetch data from the server");
                        return;
                    }
                    toast.success("Signed Up Successfully!!!...");
                    setAdminLogin({Email: "", Password: "" });
                    setEmailError("");
                    // router.push("/Dashboard"); // Updated navigation

                } catch (error) {
                    console.error("Error submitting Login Form:", error);
                    toast.error("An error occurred while Logging into the system");
                }
            } else {
                toast.error("Please fill in all fields.");
            }
        }

    };

    return (
        <div className="w-full flex justify-center bg-[#fff000]">
            <div className="w-[80%] flex flex-col lg:flex-row mb-20 mt-28 bg-white rounded-2xl shadow-xl">
                <div className="w-full lg:w-1/2 h-full hidden lg:block">
                    <Image src="/Images/loginSideImg.jpg" width={300} height={300} alt="Login Side Image" className="w-full h-full lg:h-[680px] rounded-l-2xl"></Image>
                </div>
                <div className="w-full lg:w-1/2">
                    <form
                        className="w-full px-5 lg:px-8 flex flex-col py-14"
                    >
                        <label className="text-2xl lg:text-4xl font-serif text-center tracking-wide my-5">
                            Login Form
                        </label>
                        <div className="w-full grid grid-cols-1 gap-8 my-10">
                            <div>
                                <h1 className="mb-3 ml-1 font-semibold">Email:</h1>
                                <TextField
                                    type="email"
                                    className="w-full bg-white"
                                    variant="outlined"
                                    value={adminLogin.Email}
                                    onChange={(e) => emailValidation(e.target.value)}
                                    required
                                />
                                <p
                                    className={`text-md tracking-wider font-serif ${isEmailValid === true
                                        ? "text-green-500"
                                        : isEmailValid === false
                                            ? "text-red-500"
                                            : ""
                                        }`}
                                >
                                    {emailError}
                                </p>
                            </div>
                            <div>
                                <h1 className="mb-3 ml-1 font-semibold">Password:</h1>
                                <TextField
                                    type="password"
                                    className="w-full bg-white"
                                    variant="outlined"
                                    value={adminLogin.Password}
                                    onChange={(e) =>
                                        setAdminLogin({ ...adminLogin, Password: e.target.value })
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            <button
                                onClick={handleUser}
                                className="py-3 px-8 border-black text-white bg-black tracking-wider rounded-xl hover:scale-95"
                            >
                                Login as User
                            </button>
                        </div>
                        <div className="mt-3">
                              <p className="text-center font-semibold tracking-wider">OR</p>
                        </div>
                        <div className="flex justify-center mt-3">
                            <button
                                onClick={handleAdmin}
                                className="py-3 px-8 border-black text-white bg-black tracking-wider rounded-xl hover:scale-95"
                            >
                                Login as Admin
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
