"use client";

import React from "react";
import { useQuery } from "react-query";
import { collection, getDocs, query, limit, orderBy } from "firebase/firestore";
import { firebase } from "../../../firebase/firebase.js";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js"; // Import Chart.js and registerables

// Register all necessary components
Chart.register(...registerables);

const ChartComponent = ({ data }) => {
    // Group students by registration date
    const groupedData = data.reduce((acc, student) => {
        const date = new Date(student.registrationDate).toLocaleDateString();
        acc[date] = (acc[date] || 0) + 1; // Count students per date
        return acc;
    }, {});

    // Prepare data for the chart
    const startDate = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1
    );
    const endDate = new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        0
    );
    const labels = [];
    const studentCounts = [];

    for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toLocaleDateString();
        labels.push(dateStr);
        studentCounts.push(groupedData[dateStr] || 0); // Include zero counts
    }

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: "Number of Students",
                data: studentCounts,
                fill: false,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                tension: 0.1, // Smooth the line
            },
        ],
    };

    return <Line data={chartData} />; // Use Line chart
};

// ... existing code ...

const ITEMS_PER_PAGE = 10;

const fetchStudents = async () => {
    const q = query(
        collection(db, "reg_student"),
        orderBy("name"),
        limit(ITEMS_PER_PAGE)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            id: doc.id,
            name: data.name,
            phone: data.phone,
            password: data.password,
            subject: data.subject, // This is the course title
            registrationDate: data.registrationDate
                ? new Date(
                      data.registrationDate.seconds * 1000
                  ).toLocaleDateString()
                : "N/A",
        };
    });
};

const useStudentsQuery = () => {
    return useQuery("students", fetchStudents, {
        refetchOnWindowFocus: false,
    });
};

const DataTable = ({ data, columns }) => (
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.key}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            {column.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => (
                    <tr key={item.id || index}>
                        {columns.map((column) => (
                            <td
                                key={column.key}
                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                            >
                                {column.render
                                    ? column.render(item)
                                    : item[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// const SearchInput = ({ value, onChange }) => (
//     <input
//         type="text"
//         placeholder="Search..."
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
// );

const AdminDashboard = () => {
    const router = useRouter();
    const {
        data: students,
        isLoading: studentsLoading,
        error: studentsError,
    } = useStudentsQuery();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            router.push("/"); // Redirect to home page after sign out
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const studentColumns = [
        { key: "name", label: "Name" },
        { key: "phone", label: "Phone" },
        { key: "subject", label: "Course Title" },
        { key: "password", label: "Password" },
        { key: "registrationDate", label: "Registration Date" },
    ];

    if (studentsError) {
        return (
            <div className="text-red-500 p-6">
                Error loading data. Please try again later.
            </div>
        );
    }

    return (
        <div className="admin-dashboard p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <button
                    onClick={handleSignOut}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                    Sign Out
                </button>
            </div>

            <div className="bg-white text-black shadow rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Summary</h2>
                <p className="mb-2">Total Students: {students?.length || 0}</p>
            </div>

            <div className="bg-white shadow rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Student List</h2>
                {studentsLoading ? (
                    <div className="flex flex-col justify-center items-center h-32">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mb-4"></div>
                        <p className="text-gray-600">Loading student data...</p>
                    </div>
                ) : (
                    <DataTable data={students || []} columns={studentColumns} />
                )}
            </div>

            <div className="bg-white shadow rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">
                    Student Registration Chart
                </h2>
                <ChartComponent data={students || []} />{" "}
                {/* Add the chart component here */}
            </div>
        </div>
    );
};

export default AdminDashboard;
