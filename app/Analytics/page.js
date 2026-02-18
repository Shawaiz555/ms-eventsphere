"use client";
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import Cards from "@/app/Reuseable Components/Cards";
import { useEffect, useState } from 'react';

const chartSetting = {
    yAxis: [
        {
            label: 'Events Evaluation',
        },
    ],
    xAxis: [
        {
            label: 'Days',
        },
    ],
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
        },
    },
    width: 700,
    height: 500,
};

export default function page() {
    const [analyticsData, setAnalyticsData] = useState(null);

    // Function to fetch events data
    const getAllEvents = async () => {
        const resp = await fetch("/Api/Events", { method: "GET" });
        const eventsData = await resp.json();
        const allEvents = eventsData["data"];
        generateAnalytics(allEvents);
    };

    // Generate chart data based on events
    const generateAnalytics = (allEvents) => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
    
        const eventsThisMonth = allEvents.filter((event) => {
            const eventDate = new Date(event.createdAt);
            return (
                eventDate.getMonth() === currentMonth &&
                eventDate.getFullYear() === currentYear
            );
        });
    
        const dailyCounts = Array(31).fill(0);
        eventsThisMonth.forEach((event) => {
            const eventDate = new Date(event.createdAt);
            const day = eventDate.getDate();
            dailyCounts[day - 1] += 1;
        });
    
        const cumulativeEvents = dailyCounts.reduce((acc, count, index) => {
            const total = (acc[index - 1] || 0) + count;
            return [...acc, total];
        }, []);
    
        const days = Array.from({ length: currentDate.getDate() }, (_, i) => i + 1);
    
        const chartData = {
            xAxis: days, // Days of the month
            series: [
                {
                    datasetKeys: { id: 'dailyCounts', x: 'day', y: 'dailyCounts' },
                    label: 'Daily Events',
                    data: days.map((day, index) => ({
                        id: `daily-dataset-${index}`, // Add dataset context
                        day: day,
                        dailyCounts: dailyCounts[day - 1] || 0,
                    })),
                },
                {
                    datasetKeys: { id: 'cumulativeEvents', x: 'day', y: 'cumulativeEvents' },
                    label: 'Cumulative Events',
                    data: days.map((day, index) => ({
                        id: `cumulative-dataset-${index}`, // Add dataset context
                        day: day,
                        cumulativeEvents: cumulativeEvents[index] || 0,
                    })),
                },
            ],
        };
        
    
        setAnalyticsData(chartData);
    };

    // Set up polling for new data every 30 seconds
    useEffect(() => {
        getAllEvents(); // Initial data fetch

        const intervalId = setInterval(() => {
            getAllEvents(); // Fetch new data periodically
        }, 30000); // Adjust polling interval as needed (30 seconds in this case)

        return () => clearInterval(intervalId); // Clean up polling on component unmount
    }, []);

    return (
        <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>

            {/* Stat Cards */}
            <div style={{ padding: "8px 0 0" }}>
                <Cards />
            </div>

            {/* Analytics Section */}
            <div style={{ padding: "32px 24px 60px" }}>
                <div style={{ marginBottom: "32px" }}>
                    <p style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>
                        DATA
                    </p>
                    <h2 style={{
                        fontSize: "1.8rem", fontWeight: 700,
                        background: "linear-gradient(135deg, #f1f5f9, #94a3b8)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>
                        Analytics
                    </h2>
                </div>

                <div
                    style={{
                        background: "linear-gradient(145deg, #0f172a, #1e293b)",
                        border: "1px solid rgba(96,165,250,0.12)",
                        borderRadius: "16px",
                        overflow: "hidden",
                    }}
                >
                    <div style={{ height: "2px", background: "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)" }} />
                    <div style={{ padding: "20px 24px 8px" }}>
                        <p style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                            EVENTS
                        </p>
                        <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem" }}>
                            Daily &amp; Cumulative Events This Month
                        </h3>
                    </div>
                    <div style={{ padding: "8px 16px 24px" }}>
                        {analyticsData && (
                            <ScatterChart
                                dataset={analyticsData.series[0].data} // Default dataset
                                series={analyticsData.series} // Include both daily and cumulative events
                                {...chartSetting}
                                sx={{
                                    ...chartSetting.sx,
                                    width: "100%",
                                    "& .MuiChartsAxis-line": { stroke: "rgba(96,165,250,0.15)" },
                                    "& .MuiChartsAxis-tick": { stroke: "rgba(96,165,250,0.15)" },
                                    "& .MuiChartsAxis-label": { fill: "#94a3b8" },
                                    "& .MuiChartsAxis-tickLabel": { fill: "#94a3b8" },
                                    "& .MuiScatterElement-root": { fill: "#60a5fa" },
                                    "& .MuiChartsLegend-label": { fill: "#94a3b8" },
                                    background: "transparent",
                                }}
                                className="w-full"
                            />
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}
