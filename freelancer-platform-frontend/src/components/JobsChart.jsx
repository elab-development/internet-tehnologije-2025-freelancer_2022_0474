import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const JobsChart = ({ jobs }) => {

  const data = [
    {
      name: "Low",
      value: jobs.filter(j => j.budget < 300).length
    },
    {
      name: "Medium",
      value: jobs.filter(j => j.budget >= 300 && j.budget <= 700).length
    },
    {
      name: "High",
      value: jobs.filter(j => j.budget > 700).length
    }
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 style={{ textAlign: "center" }}>Jobs by Budget</h3>

      <ResponsiveContainer >
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false}  />
          <Tooltip />
          <Bar dataKey="value" fill="#14a800" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default JobsChart;