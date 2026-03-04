import React from "react";
import styles from "./FilterPanel.module.css";
import characters from "../data/characters"; // adjust path if needed

// ==============================
// Utility to generate unique values
// ==============================
const getUniqueValues = (array, key) => [
  ...new Set(array.map((item) => item[key])),
];

// ==============================
// Reusable Select Component
// ==============================
function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className={styles.filterLabel}>
      {label}:
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.filterSelect}
      >
        <option value="">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

// ==============================
// Main FilterPanel Component
// ==============================
function FilterPanel({
  universeFilter,
  setUniverseFilter,
  alignmentFilter,
  setAlignmentFilter,
  powerTypeFilter,
  setPowerTypeFilter,
}) {
  const universeOptions = getUniqueValues(characters, "universe").sort();
  const alignmentOptions = getUniqueValues(characters, "alignment").sort();

  // Filter power types based on selected universe
  const filteredPowerTypes = getUniqueValues(
    universeFilter
      ? characters.filter((c) => c.universe === universeFilter)
      : characters,
    "powerType"
  ).sort();

  return (
    <div className={styles.filterContainer}>
      <FilterSelect
        label="Universe"
        value={universeFilter}
        onChange={(value) => {
          setUniverseFilter(value);
          setPowerTypeFilter(""); // reset power type when universe changes
        }}
        options={universeOptions}
      />
      <FilterSelect
        label="Alignment"
        value={alignmentFilter}
        onChange={setAlignmentFilter}
        options={alignmentOptions}
      />
      <FilterSelect
        label="Power Type"
        value={powerTypeFilter}
        onChange={setPowerTypeFilter}
        options={filteredPowerTypes}
      />
    </div>
  );
}

export default FilterPanel;