"use client";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Loader from "../Reuseable Components/Loader";

export default function Page() {
  const [signUpUser, setSignUpUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signInUser, setSignInUser] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const route = useRouter();

  const emailValidation = (em) => {
    if (isSignUp) {
      setSignUpUser({ ...signUpUser, email: em });
    } else {
      setSignInUser({ ...signInUser, email: em });
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(em)) {
      setEmailError("Email is valid");
      setIsEmailValid(true);
    } else {
      setEmailError("Email is Invalid");
      setIsEmailValid(false);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Check if email is valid
    if (emailError === "Email is valid") {
      if (signInUser.email && signInUser.password) {
        setIsLoading(true);
        try {
          const response = await fetch(
            `/Api/Auth/SignIn?email=${signInUser.email}&password=${signInUser.password}`,
            {
              method: "GET", // GET request
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const data = await response.json();

          if (response.ok) {
            toast.success(`${data["data"].role === "admin" ? "Admin" : "User"} Sign In  Successfully!`);
            localStorage.setItem("signedInUser", JSON.stringify(data["data"]));
            setSignInUser({ email: "", password: "" });
            setEmailError("");

            if (data["data"].role === "admin") {
              route.push("/Dashboard");
            } else if (data["data"].role === "user") {
              route.push("/Home");
            } else {
              toast.error("User role not found.");
            }
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          console.error("Error during Sign In:", error);
          toast.error("An error occurred during Sign In");
        } finally {
          setIsLoading(false);
        }
      } else {
        toast.error("Please fill in all fields.");
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (emailError === "Email is valid") {
      if (
        signUpUser.name &&
        signUpUser.email &&
        signUpUser.password &&
        signUpUser.confirmPassword
      ) {
        if (signUpUser.password === signUpUser.confirmPassword) {
          setIsLoading(true);
          try {
            const response = await fetch("/Api/Auth/SignUp", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(signUpUser),
            });

            const data = await response.json();

            if (response.ok) {
              toast.success(`${data.role === "admin" ? "Admin" : "User"} Registered Successfully!`);
              setIsSignUp(false);
              setSignUpUser({ name: "", email: "", password: "", confirmPassword: "" });
              setEmailError("");
            } else {
              toast.error(data.message);
            }
          } catch (error) {
            console.error("Error during Sign Up:", error);
            toast.error("An error occurred during Sign Up");
          } finally {
            setIsLoading(false);
          }
        }
      } else {
        toast.error("Please fill in all fields.");
      }
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setEmailError("");
    setIsEmailValid(null);
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      background: "rgba(15, 23, 42, 0.8)",
      borderRadius: "10px",
      "& fieldset": {
        borderColor: "rgba(96, 165, 250, 0.2)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(96, 165, 250, 0.4)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(96, 165, 250, 0.6)",
        boxShadow: "0 0 0 3px rgba(96, 165, 250, 0.1)",
      },
    },
    "& .MuiInputBase-input": {
      color: "#f1f5f9",
      fontSize: "0.9rem",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#475569",
      opacity: 1,
    },
    "& .MuiInputLabel-root": {
      color: "#94a3b8",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#60a5fa",
    },
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center mesh-bg"
      style={{ paddingTop: "80px", paddingBottom: "40px" }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "fixed",
          top: "20%",
          left: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="w-full flex flex-col lg:flex-row overflow-hidden"
        style={{
          maxWidth: "1150px",
          margin: "0 24px",
          borderRadius: "20px",
          border: "1px solid rgba(96, 165, 250, 0.15)",
          boxShadow: "0 24px 64px rgba(0, 0, 0, 0.6)",
          background: "rgba(15, 23, 42, 0.9)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Left panel — HD image with overlay */}
        <div className="hidden lg:block w-full lg:w-1/2 relative overflow-hidden" style={{ minHeight: "600px" }}>
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80"
            fill
            alt="Event crowd"
            style={{ objectFit: "cover" }}
            priority
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(3,7,18,0.7) 0%, rgba(15,23,42,0.5) 50%, rgba(59,130,246,0.2) 100%)",
            }}
          />
          {/* Content on image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "40px",
            }}
          >
            <div
              style={{
                background: "rgba(15, 23, 42, 0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(96, 165, 250, 0.2)",
                borderRadius: "14px",
              }}
              className="p-4 py-10"
            >
              <p
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                MS-EventSphere
              </p>
              <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.6 }}>
                The professional platform for unlimited B2B events. Plan, promote, and produce
                world-class experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Right panel — Form */}
        <div className="w-full lg:w-1/2 flex flex-col" style={{ padding: "48px 40px" }}>
          {/* Logo for mobile */}
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div
              style={{
                borderRadius: "50%",
                padding: "2px",
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              }}
            >
              <Image
                src="/Icons/ProjectLogo.png"
                width={36}
                height={36}
                alt="Logo"
                style={{ borderRadius: "50%", display: "block" }}
              />
            </div>
            <span
              style={{
                fontWeight: 700,
                background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MS-EventSphere
            </span>
          </div>

          {/* Toggle Tabs */}
          <div
            style={{
              display: "flex",
              background: "rgba(3, 7, 18, 0.6)",
              borderRadius: "12px",
              padding: "6px",
              border: "1px solid rgba(96, 165, 250, 0.12)",
              marginBottom: "36px",
            }}
          >
            <button
              type="button"
              onClick={() => !isSignUp || toggleForm()}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "9px",
                border: "none",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                transition: "all 0.3s ease",
                background: !isSignUp
                  ? "linear-gradient(135deg, #3b82f6, #06b6d4)"
                  : "transparent",
                color: !isSignUp ? "#ffffff" : "#94a3b8",
                boxShadow: !isSignUp ? "0 0 16px rgba(96, 165, 250, 0.3)" : "none",
              }}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => isSignUp || toggleForm()}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "9px",
                border: "none",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                transition: "all 0.3s ease",
                background: isSignUp
                  ? "linear-gradient(135deg, #3b82f6, #06b6d4)"
                  : "transparent",
                color: isSignUp ? "#ffffff" : "#94a3b8",
                boxShadow: isSignUp ? "0 0 16px rgba(96, 165, 250, 0.3)" : "none",
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Heading */}
          <div style={{ marginBottom: "28px" }}>
            <h1
              style={{
                fontWeight: 700,
                color: "#f1f5f9",
                marginBottom: "8px",
                textAlign: "center",
              }}
              className="text-3xl lg:text-4xl"
            >
              {isSignUp ? "Create your account" : "Welcome back"}
            </h1>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", textAlign: "center" }}>
              {isSignUp
                ? "Join thousands of event professionals"
                : "Sign in to your MS-EventSphere account"}
            </p>
          </div>

          {/* Sign In Form */}
          {!isSignUp ? (
            <form onSubmit={handleSignIn} className="flex flex-col gap-5 py-5">
              <div>
                <label
                  style={{
                    display: "block",
                    color: "#94a3b8",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  Email Address
                </label>
                <TextField
                  type="email"
                  fullWidth
                  variant="outlined"
                  value={signInUser.email}
                  placeholder="Enter your email"
                  onChange={(e) => emailValidation(e.target.value)}
                  required
                  sx={inputSx}
                />
                {emailError && (
                  <p
                    style={{
                      fontSize: "0.78rem",
                      marginTop: "6px",
                      fontWeight: 500,
                      color: isEmailValid === true ? "#22c55e" : "#ef4444",
                    }}
                  >
                    {emailError}
                  </p>
                )}
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    color: "#94a3b8",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  Password
                </label>
                <TextField
                  type="password"
                  fullWidth
                  variant="outlined"
                  value={signInUser.password}
                  placeholder="Enter your password"
                  onChange={(e) => setSignInUser({ ...signInUser, password: e.target.value })}
                  required
                  sx={inputSx}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="btn-gradient w-full text-white font-semibold py-3 rounded-xl tracking-wide"
                style={{
                  border: "none",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  marginTop: "8px",
                  fontSize: "0.95rem",
                  opacity: isLoading ? 0.7 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                {isLoading ? <Loader variant="dots" size="sm" /> : "Sign In"}
              </button>
            </form>
          ) : (
            /* Sign Up Form */
            <form onSubmit={handleSignUp} className="flex flex-col gap-5">
              <div>
                <label
                  style={{
                    display: "block",
                    color: "#94a3b8",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  Full Name
                </label>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={signUpUser.name}
                  placeholder="Enter your name"
                  onChange={(e) => setSignUpUser({ ...signUpUser, name: e.target.value })}
                  required
                  sx={inputSx}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    color: "#94a3b8",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  Email Address
                </label>
                <TextField
                  type="email"
                  fullWidth
                  variant="outlined"
                  value={signUpUser.email}
                  placeholder="Enter your email"
                  onChange={(e) => emailValidation(e.target.value)}
                  required
                  sx={inputSx}
                />
                {emailError && (
                  <p
                    style={{
                      fontSize: "0.78rem",
                      marginTop: "6px",
                      fontWeight: 500,
                      color: isEmailValid === true ? "#22c55e" : "#ef4444",
                    }}
                  >
                    {emailError}
                  </p>
                )}
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    color: "#94a3b8",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  Password
                </label>
                <TextField
                  type="password"
                  fullWidth
                  variant="outlined"
                  value={signUpUser.password}
                  placeholder="Enter your password"
                  onChange={(e) => setSignUpUser({ ...signUpUser, password: e.target.value })}
                  required
                  sx={inputSx}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    color: "#94a3b8",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  Confirm Password
                </label>
                <TextField
                  type="password"
                  fullWidth
                  variant="outlined"
                  value={signUpUser.confirmPassword}
                  placeholder="Enter your confirm password"
                  onChange={(e) => setSignUpUser({ ...signUpUser, confirmPassword: e.target.value })}
                  required
                  sx={inputSx}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="btn-gradient w-full text-white font-semibold py-3 rounded-xl tracking-wide"
                style={{
                  border: "none",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  marginTop: "8px",
                  fontSize: "0.95rem",
                  opacity: isLoading ? 0.7 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                {isLoading ? <Loader variant="dots" size="sm" /> : "Create Account"}
              </button>
            </form>
          )}

          {/* Toggle link */}
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            {isSignUp ? (
              <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                Already have an account?{" "}
                <span
                  onClick={toggleForm}
                  style={{
                    color: "#60a5fa",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#06b6d4")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#60a5fa")}
                >
                  Sign In
                </span>
              </p>
            ) : (
              <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                Don&apos;t have an account?{" "}
                <span
                  onClick={toggleForm}
                  style={{
                    color: "#60a5fa",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#06b6d4")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#60a5fa")}
                >
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
