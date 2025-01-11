"use client";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import { useState } from "react";

export default function Page() {
    const [loginUser, setLoginUser] = useState({
        Name: "",
        Email: "",
        Password: "",
    });
    const [emailError, setEmailError] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(null);
    const router = useRouter(); 

    const emailValidation = (em) => {
        setLoginUser({ ...loginUser, Email: em });
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(em)) {
            setEmailError("Email is valid");
            setIsEmailValid(true);
        } else {
            setEmailError("Email is Invalid");
            setIsEmailValid(false);
        }
    };

    const handleAdmin = async (e) => {
        e.preventDefault();

        if (emailError === "Email is valid") {
            if (loginUser.Name && loginUser.Email && loginUser.Password) {
                try {
                    const response = await fetch("/Api/AdminLogin", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: loginUser.Name,
                            email: loginUser.Email,
                            password: loginUser.Password,
                        }),
                    });

                    const result = await response.json();
                    if (
                        response.ok &&
                        loginUser.Name === "Shawaiz" &&
                        loginUser.Email === "Shawaiz@gmail.com" &&
                        loginUser.Password === "shawaiz"
                    ) {
                        alert("Logged In Successfully!!!...");
                        setLoginUser({ Name: "", Email: "", Password: "" });
                        setEmailError("");
                        router.push("/Dashboard"); // Updated navigation
                    } else {
                        console.error(result);
                        alert("Failed to Login!!!");
                        setLoginUser({ Name: "", Email: "", Password: "" });
                        setEmailError("");
                    }
                } catch (error) {
                    console.error("Error submitting Login Form:", error);
                    alert("An error occurred while Logging into the system");
                }
            }
        }
    };

    return (
        <div className="w-full flex justify-center bg-[#fff000]">
            <div className="w-[80%] flex flex-col lg:flex-row mb-20 mt-28 bg-white rounded-2xl shadow-xl">
            <div className="w-full lg:w-1/2 hidden lg:block">
                <Image src="/Images/loginSideImg.jpg" width={300} height={300} alt="Login Side Image" className="w-full h-full lg:h-[680px] rounded-l-2xl"></Image>
            </div>
            <div className="w-full lg:w-1/2">
            <form
                onSubmit={handleAdmin}
                className="w-full px-5 lg:px-8 flex flex-col py-14"
            >
                <label className="text-2xl lg:text-4xl font-serif text-center tracking-wide my-5">
                    Login Form
                </label>
                <div className="w-full grid grid-cols-1 gap-8 my-10">
                    <div>
                        <h1 className="mb-3 ml-1 font-semibold">Name:</h1>
                        <TextField
                            className="w-full bg-white"
                            variant="outlined"
                            value={loginUser.Name}
                            onChange={(e) => setLoginUser({ ...loginUser, Name: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <h1 className="mb-3 ml-1 font-semibold">Email:</h1>
                        <TextField
                            type="email"
                            className="w-full bg-white"
                            variant="outlined"
                            value={loginUser.Email}
                            onChange={(e) => emailValidation(e.target.value)}
                            required
                        />
                        <p
                            className={`text-md tracking-wider font-serif ${
                                isEmailValid === true
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
                            value={loginUser.Password}
                            onChange={(e) =>
                                setLoginUser({ ...loginUser, Password: e.target.value })
                            }
                            required
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <button
                        type="submit"
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
