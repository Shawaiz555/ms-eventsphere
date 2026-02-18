"use client";
import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Cards from "@/app/Reuseable Components/Cards";
import EventCards from "../Reuseable Components/EventCards";
import withAuth from "../Reuseable Components/WithAuth";

const columns = [
  { field: "id", headerName: "Id", width: 90 },
  {
    field: "name", // Field name matches the key in your userdata
    headerName: "Name",
    width: 150,
    editable: false,
  },
  {
    field: "email", // Field name matches the key in your userdata
    headerName: "Email",
    width: 150,
    editable: true,
  },
  {
    field: "role", // Field name matches the key in your userdata
    headerName: "Role",
    width: 110,
    editable: true,
  },
];

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [analyticsData, setAnalyticsData] = useState([]);

  // Fetch all users from API
  const getAllUsers = async () => {
    const resp = await fetch("/Api/UserLogin", { method: "GET" });
    const userData = await resp.json();
    const allUsers = userData["data"].map((user) => ({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt, // Assuming `createdAt` exists in API data
    }));
    setUsers(allUsers);
    generateAnalytics(allUsers);
  };

  // Generate analytics for the current month
  const generateAnalytics = (allUsers) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Filter users added in the current month
    const usersThisMonth = allUsers.filter((user) => {
      const userDate = new Date(user.createdAt);
      return (
        userDate.getMonth() === currentMonth &&
        userDate.getFullYear() === currentYear
      );
    });

    // Group by day of the month
    const dailyCounts = Array(31).fill(0); // Initialize an array for each day
    usersThisMonth.forEach((user) => {
      const userDate = new Date(user.createdAt);
      const day = userDate.getDate(); // Get day of the month (1-31)
      dailyCounts[day - 1] += 1; // Increment count for the respective day
    });

    // Prepare data for LineChart
    const days = Array.from(
      { length: currentDate.getDate() }, // Current date determines the range
      (_, i) => i + 1
    );
    const chartData = {
      xAxis: days,
      series: dailyCounts.slice(0, days.length), // Slice up to today's date
    };
    setAnalyticsData(chartData);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>

      {/* ── Page Header ── */}
      <div style={{
        padding: "28px 24px 20px",
        borderBottom: "1px solid rgba(96,165,250,0.08)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "12px",
      }}>
        <div>
          <p style={{ color: "#64748b", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>
            Admin Panel
          </p>
          <h1 style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, margin: 0,
            background: "linear-gradient(135deg, #f1f5f9, #94a3b8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Dashboard Overview
          </h1>
        </div>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(34,197,94,0.08)",
          border: "1px solid rgba(34,197,94,0.2)",
          borderRadius: "100px", padding: "6px 14px",
        }}>
          <span style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: "#22c55e", display: "inline-block",
            boxShadow: "0 0 8px rgba(34,197,94,0.8)",
            animation: "glowPulse 2s ease-in-out infinite",
          }} />
          <span style={{ color: "#22c55e", fontSize: "0.75rem", fontWeight: 600 }}>Live</span>
        </div>
      </div>

      {/* Stat Cards */}
      <Cards />

      {/* Chart + Table Row */}
      <div
        className="flex flex-col lg:flex-row gap-6"
        style={{ padding: "24px 24px 0" }}
      >
        {/* Line Chart */}
        <div
          className="w-full lg:flex-1"
          style={{
            minWidth: 0,
            background: "linear-gradient(145deg, #0f172a, #1e293b)",
            border: "1px solid rgba(96,165,250,0.12)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <div style={{ height: "2px", background: "linear-gradient(90deg, #3b82f6, #06b6d4)" }} />
          <div style={{ padding: "20px 24px 8px" }}>
            <p style={{ color: "#94a3b8", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>
              ANALYTICS
            </p>
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: 0 }}>
              Daily User Registrations
            </h3>
          </div>
          {/* Chart scrolls horizontally on very small screens */}
          <div style={{ overflowX: "auto" }}>
            <LineChart
              xAxis={[
                {
                  data: analyticsData.xAxis || [],
                  label: "Day of the Month",
                  labelStyle: { fill: "#94a3b8", fontSize: 11 },
                  tickLabelStyle: { fill: "#94a3b8", fontSize: 10 },
                },
              ]}
              series={[
                {
                  data: analyticsData.series || [],
                  label: "Users Analysis",
                  color: "#60a5fa",
                  area: true,
                },
              ]}
              height={260}
              sx={{
                minWidth: "320px",
                width: "100%",
                "& .MuiChartsAxis-line": { stroke: "rgba(96,165,250,0.15)" },
                "& .MuiChartsAxis-tick": { stroke: "rgba(96,165,250,0.15)" },
                "& .MuiLineElement-root": { stroke: "#60a5fa", strokeWidth: 2.5 },
                "& .MuiMarkElement-root": { fill: "#060a14", stroke: "#60a5fa", strokeWidth: 2 },
                "& .MuiChartsLegend-label": { fill: "#94a3b8", fontSize: "0.8rem" },
                background: "transparent",
              }}
            />
          </div>
        </div>

        {/* Data Table */}
        <div
          style={{
            flex: "0 0 auto",
            // width: "100%",
            maxWidth: "100%",
            background: "linear-gradient(145deg, #0f172a, #1e293b)",
            border: "1px solid rgba(96,165,250,0.12)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
          className="w-full lg:w-[400px] lg:max-w-[400px]"
        >
          <div style={{ height: "2px", background: "linear-gradient(90deg, #8b5cf6, #60a5fa)" }} />
          <div style={{ padding: "20px 24px 12px" }}>
            <p style={{ color: "#94a3b8", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>
              USERS
            </p>
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", margin: 0 }}>
              Registered Users
            </h3>
          </div>
          <Box sx={{ height: 280, width: "100%", px: 2, pb: 2 }}>
            <DataGrid
              rows={users}
              columns={columns}
              getRowId={(row) => row.id}
              initialState={{
                pagination: { paginationModel: { pageSize: 5 } },
              }}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
              sx={{
                border: "none",
                color: "#94a3b8",
                "& .MuiDataGrid-columnHeaders": {
                  background: "rgba(15,23,42,0.9)",
                  borderBottom: "1px solid rgba(96,165,250,0.12)",
                },
                "& .MuiDataGrid-columnHeader": {
                  background: "rgba(15,23,42,0.9)",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  color: "#60a5fa", fontSize: "0.78rem", fontWeight: 700,
                },
                "& .MuiDataGrid-columnSeparator": { color: "rgba(96,165,250,0.1)" },
                "& .MuiDataGrid-menuIcon": { color: "#60a5fa" },
                "& .MuiDataGrid-cell": {
                  color: "#94a3b8", fontSize: "0.8rem",
                  borderBottom: "1px solid rgba(96,165,250,0.06)",
                },
                "& .MuiDataGrid-row": { background: "transparent" },
                "& .MuiDataGrid-row:hover": { background: "rgba(96,165,250,0.04)" },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "1px solid rgba(96,165,250,0.1)",
                  background: "rgba(15,23,42,0.9)",
                  color: "#94a3b8",
                },
                "& .MuiTablePagination-root": { color: "#94a3b8" },
                "& .MuiTablePagination-selectLabel": { color: "#94a3b8" },
                "& .MuiTablePagination-displayedRows": { color: "#94a3b8" },
                "& .MuiSelect-select": { color: "#94a3b8" },
                "& .MuiIconButton-root": { color: "#60a5fa" },
                "& .MuiDataGrid-virtualScroller": { background: "transparent" },
                "& .MuiDataGrid-overlay": { background: "rgba(3,7,18,0.8)", color: "#94a3b8" },
                background: "transparent",
              }}
            />
          </Box>
        </div>
      </div>

      {/* Events Section */}
      <div style={{ padding: "40px 24px 60px" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "16px",
          marginBottom: "28px",
          paddingBottom: "20px",
          borderBottom: "1px solid rgba(96,165,250,0.08)",
        }}>
          <div style={{
            width: "4px", height: "32px", borderRadius: "2px",
            background: "linear-gradient(180deg, #3b82f6, #06b6d4)", flexShrink: 0,
          }} />
          <div>
            <p style={{ color: "#64748b", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>
              MANAGEMENT
            </p>
            <h2 style={{
              fontSize: "1.5rem", fontWeight: 700, margin: 0,
              background: "linear-gradient(135deg, #f1f5f9, #94a3b8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Events
            </h2>
          </div>
        </div>
        <EventCards dashboard={true} />
      </div>

    </div>
  );
}

export default withAuth(Dashboard);