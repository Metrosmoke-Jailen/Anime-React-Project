import characters from "./characters";
import powerSystemDefinitions from "./powerSystemDefinitions";

// Get unique power types
const uniquePowerTypes = [
  ...new Set(characters.map((c) => c.powerType)),
];

export const powerSystems = uniquePowerTypes.map((powerType) => {
  const users = characters.filter((c) => c.powerType === powerType);

  const avgStats = users.length
    ? {
        strength: Math.round(
          users.reduce((sum, c) => sum + c.stats.strength, 0) /
            users.length
        ),
        speed: Math.round(
          users.reduce((sum, c) => sum + c.stats.speed, 0) /
            users.length
        ),
        intelligence: Math.round(
          users.reduce((sum, c) => sum + c.stats.intelligence, 0) /
            users.length
        ),
      }
    : { strength: 0, speed: 0, intelligence: 0 };

  const definition = powerSystemDefinitions[powerType];

  return {
    id: powerType.toLowerCase().replace(/\s+/g, "-"),
    name: powerType,

    type: definition?.type || powerType.toLowerCase(),

    stats: {
      ...(definition?.stats || {
        strength: avgStats.strength,
        versatility: 70,
        complexity: 70,
        scalability: 70,
      }),
      avgCharacterStats: avgStats,
    },

    rules:
      definition?.rules || [
        {
          title: "Undefined System",
          description: `${powerType} has no encyclopedia entry yet.`,
          consequence: "Add it to powerSystemDefinitions.js",
        },
      ],

    strengths: definition?.strengths || ["No data yet"],
    weaknesses: definition?.weaknesses || ["No data yet"],
    comparison: definition?.comparison || {},

    notableUsers: users.map((u) => u.name),
  };
});