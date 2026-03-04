// src/pages/PowerDetail.jsx
import { useParams, Link } from "react-router-dom";
import { powerSystems } from "../data/powerSystems";
import PowerTabs from "../components/power/PowerTabs";
import StatBar from "../components/ui/StatBar";
import PowerRadarChart from "../components/power/PowerRadarChart";
import { calculateTier } from "../../utils/tierUtils";
import styles from "./PowerDetail.module.css";

function PowerDetail() {
  const { id } = useParams();
  const power = powerSystems.find((p) => p.id === id);

  if (!power) return <h2>Power system not found</h2>;

  const tier = calculateTier(power.stats);

  return (
    <div className={styles.container}>
      <h1>⚡ {power.name}</h1>

      {/* Character Avg Stats */}
      <div className={styles.avgStats}>
        <span>💪 {power.stats?.avgCharacterStats?.strength || 0}</span>
        <span>⚡ {power.stats?.avgCharacterStats?.speed || 0}</span>
        <span>🧠 {power.stats?.avgCharacterStats?.intelligence || 0}</span>
      </div>

      {/* Difficulty Tier */}
      <h2 className={styles.tier}>Difficulty Tier: {tier}</h2>

      {/* Animated Stat Bars */}
      <div className={styles.systemStats}>
        <StatBar label="System Strength" value={power.stats.strength} />
        <StatBar label="Versatility" value={power.stats.versatility} />
        <StatBar label="Complexity" value={power.stats.complexity} />
        <StatBar label="Scalability" value={power.stats.scalability} />
      </div>

      {/* Radar Chart */}
      <PowerRadarChart stats={power.stats} />

      {/* Power Tabs */}
      <PowerTabs power={power} />

      {/* Back Button */}
      <div style={{ marginTop: "2rem" }}>
        <Link to="/powers">
          <button className={styles.backBtn}>🔙 Back to Power List</button>
        </Link>
      </div>
    </div>
  );
}

export default PowerDetail;