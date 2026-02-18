"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EventIcon from "@mui/icons-material/Event";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GroupsIcon from "@mui/icons-material/Groups";

const pages = [
  { name: "Home", path: "/Home", Icon: HomeIcon },
  { name: "About", path: "/About", Icon: InfoIcon },
  { name: "Events", path: "/Events", Icon: EventIcon },
  { name: "Contact", path: "/Contact", Icon: ContactMailIcon },
  { name: "EventForm", path: "/EventForm", Icon: AddCircleOutlineIcon },
  { name: "Partner", path: "/Partner", Icon: GroupsIcon },
];

function ResponsiveAppBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [signedInUser, setSignedInUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigate = (path) => {
    setIsSidebarOpen(false);
    router.push(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("signedInUser");
    setSignedInUser(null);
    router.push("/");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("signedInUser"));
    if (user) {
      setSignedInUser(user);
    }
  }, [setSignedInUser]);

  // Close mobile sidebar on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(3, 7, 18, 0.90)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(96, 165, 250, 0.12)",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4)",
        }}
      >
        <Container maxWidth="xl" className="px-5 lg:px-10">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
            {/* Logo */}
            <Box
              component="a"
              href="/"
              sx={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}
            >
              <Image
                src="/Icons/ProjectLogo.png"
                width={140}
                height={56}
                alt="MS-EventSphere Logo"
                className="w-24 h-24"
              />
            </Box>

            {/* Desktop Nav Links */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: "4px",
              }}
            >
              {pages.map((page) => {
                const isActive = pathname === page.path || (page.path !== "/" && pathname?.startsWith(page.path));
                return (
                  <Button
                    key={page.name}
                    onClick={() => router.push(page.path)}
                    sx={{
                      color: isActive ? "#60a5fa" : "#94a3b8",
                      fontSize: "0.8rem",
                      letterSpacing: "0.04em",
                      fontWeight: isActive ? 600 : 500,
                      px: 1.5,
                      py: 1,
                      borderRadius: "8px",
                      position: "relative",
                      textTransform: "none",
                      transition: "all 0.2s ease",
                      background: isActive ? "rgba(96,165,250,0.08)" : "transparent",
                      "&:hover": {
                        color: "#60a5fa",
                        background: "rgba(96, 165, 250, 0.08)",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 4,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: isActive ? "60%" : "0%",
                        height: "2px",
                        background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                        borderRadius: "2px",
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "60%",
                      },
                    }}
                  >
                    {page.name === "EventForm" ? "Create Event" : page.name}
                  </Button>
                );
              })}
            </Box>

            {/* Right side: User + Logout + Mobile hamburger */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* User info (desktop) */}
              {signedInUser ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      display: { xs: "none", sm: "flex" },
                      alignItems: "center",
                      gap: 1,
                      background: "rgba(96, 165, 250, 0.08)",
                      border: "1px solid rgba(96, 165, 250, 0.15)",
                      borderRadius: "8px",
                      px: 1.5,
                      py: 0.75,
                    }}
                  >
                    <PersonOutlineIcon sx={{ color: "#60a5fa", fontSize: "1rem" }} />
                    <Typography
                      sx={{
                        color: "#94a3b8",
                        fontSize: "0.78rem",
                        maxWidth: "160px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {signedInUser.email}
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleLogout}
                    startIcon={<LogoutIcon sx={{ fontSize: "0.9rem" }} />}
                    sx={{
                      display: { xs: "none", md: "flex" },
                      background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                      color: "#fff",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      px: 2,
                      py: 0.75,
                      borderRadius: "8px",
                      textTransform: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "linear-gradient(135deg, #2563eb, #0891b2)",
                        boxShadow: "0 0 16px rgba(96, 165, 250, 0.35)",
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    Logout
                  </Button>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    gap: 1,
                    background: "rgba(96, 165, 250, 0.06)",
                    border: "1px solid rgba(96, 165, 250, 0.12)",
                    borderRadius: "8px",
                    px: 1.5,
                    py: 0.75,
                  }}
                >
                  <PersonOutlineIcon sx={{ color: "#64748b", fontSize: "1rem" }} />
                  <Typography sx={{ color: "#64748b", fontSize: "0.78rem" }}>
                    Not signed in
                  </Typography>
                </Box>
              )}

              {/* Mobile hamburger */}
              <IconButton
                size="large"
                aria-label="open menu"
                onClick={handleToggleSidebar}
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: isSidebarOpen ? "#60a5fa" : "#94a3b8",
                  background: isSidebarOpen ? "rgba(96,165,250,0.1)" : "transparent",
                  border: "1px solid",
                  borderColor: isSidebarOpen ? "rgba(96,165,250,0.3)" : "rgba(96,165,250,0.15)",
                  borderRadius: "10px",
                  width: "40px",
                  height: "40px",
                  "&:hover": {
                    background: "rgba(96, 165, 250, 0.1)",
                    borderColor: "rgba(96,165,250,0.3)",
                    color: "#60a5fa",
                  },
                }}
              >
                {isSidebarOpen ? <CloseIcon sx={{ fontSize: "1.2rem" }} /> : <MenuIcon sx={{ fontSize: "1.2rem" }} />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <Box
          onClick={handleToggleSidebar}
          sx={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            zIndex: 1299,
            display: { xs: "block", md: "none" },
          }}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "300px",
          background: "#030712",
          borderLeft: "1px solid rgba(96, 165, 250, 0.15)",
          boxShadow: "-8px 0 40px rgba(0, 0, 0, 0.7)",
          zIndex: 1300,
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          transform: isSidebarOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 20px 16px",
            borderBottom: "1px solid rgba(96,165,250,0.1)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/Icons/ProjectLogo.png"
              width={130}
              height={52}
              alt="MS-EventSphere Logo"
              className="w-24 h-24"
            />
          </Box>
          <IconButton
            onClick={handleToggleSidebar}
            sx={{
              color: "#94a3b8",
              background: "rgba(96,165,250,0.06)",
              border: "1px solid rgba(96,165,250,0.12)",
              borderRadius: "8px",
              width: "34px",
              height: "34px",
              "&:hover": {
                color: "#60a5fa",
                background: "rgba(96, 165, 250, 0.12)",
                borderColor: "rgba(96,165,250,0.25)",
              },
            }}
          >
            <CloseIcon sx={{ fontSize: "1rem" }} />
          </IconButton>
        </Box>

        {/* Nav label */}
        <Box sx={{ padding: "16px 20px 8px" }}>
          <Typography sx={{ color: "#64748b", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Navigation
          </Typography>
        </Box>

        {/* Drawer Nav Links */}
        <Box sx={{ flex: 1, padding: "4px 12px", overflowY: "auto" }}>
          {pages.map((page) => {
            const isActive = pathname === page.path || (page.path !== "/" && pathname?.startsWith(page.path));
            const { Icon } = page;
            return (
              <Box
                key={page.name}
                onClick={() => handleNavigate(page.path)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  marginBottom: "4px",
                  cursor: "pointer",
                  color: isActive ? "#60a5fa" : "#94a3b8",
                  background: isActive
                    ? "rgba(96,165,250,0.1)"
                    : "transparent",
                  border: isActive
                    ? "1px solid rgba(96,165,250,0.2)"
                    : "1px solid transparent",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "#60a5fa",
                    background: "rgba(96,165,250,0.08)",
                    borderColor: "rgba(96,165,250,0.15)",
                    paddingLeft: "18px",
                  },
                }}
              >
                <Icon sx={{ fontSize: "1.1rem", color: "inherit", flexShrink: 0 }} />
                <Typography sx={{ fontSize: "0.9rem", fontWeight: isActive ? 600 : 500, color: "inherit" }}>
                  {page.name === "EventForm" ? "Create Event" : page.name}
                </Typography>
                {isActive && (
                  <Box
                    sx={{
                      marginLeft: "auto",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#60a5fa",
                      boxShadow: "0 0 8px rgba(96,165,250,0.6)",
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>

        {/* Bottom: user info + logout */}
        <Box
          sx={{
            padding: "16px 16px 24px",
            borderTop: "1px solid rgba(96,165,250,0.1)",
          }}
        >
          {signedInUser ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 14px",
                  background: "rgba(96,165,250,0.06)",
                  border: "1px solid rgba(96,165,250,0.12)",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              >
                <PersonOutlineIcon sx={{ color: "#60a5fa", fontSize: "1.1rem", flexShrink: 0 }} />
                <Typography
                  sx={{
                    color: "#94a3b8",
                    fontSize: "0.78rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {signedInUser.email}
                </Typography>
              </Box>
              <Box
                onClick={handleLogout}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "12px",
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  "&:hover": {
                    boxShadow: "0 0 20px rgba(96,165,250,0.35)",
                    opacity: 0.9,
                  },
                }}
              >
                <LogoutIcon sx={{ color: "#fff", fontSize: "1rem" }} />
                <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: "0.875rem" }}>
                  Sign Out
                </Typography>
              </Box>
            </>
          ) : (
            <Box
              onClick={() => { setIsSidebarOpen(false); router.push("/Login"); }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "12px",
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                borderRadius: "10px",
                cursor: "pointer",
                "&:hover": { opacity: 0.9 },
              }}
            >
              <PersonOutlineIcon sx={{ color: "#fff", fontSize: "1rem" }} />
              <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: "0.875rem" }}>
                Sign In
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default ResponsiveAppBar;
