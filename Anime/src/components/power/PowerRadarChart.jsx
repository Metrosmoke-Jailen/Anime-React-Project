// src/components/power/PowerRadarChart.jsx
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function PowerRadarChart({ stats }) {
  const data = [
    { subject: "Strength", value: stats.strength },
    { subject: "Versatility", value: stats.versatility },
    { subject: "Complexity", value: stats.complexity },
    { subject: "Scalability", value: stats.scalability },
  ];

  return (
    <div style={{ width: "100%", height: 350 }}>
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis domain={[0, 100]} />
          <Radar
            name="Power"
            dataKey="value"
            stroke="#6a5acd"
            fill="#6a5acd"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PowerRadarChart;