export function calculateTier(stats) {
  const score =
    (stats.complexity + stats.versatility + stats.scalability) / 3;

  if (score >= 95) return "SSS";
  if (score >= 90) return "SS";
  if (score >= 85) return "S";
  if (score >= 75) return "A";
  if (score >= 65) return "B";
  return "C";
}