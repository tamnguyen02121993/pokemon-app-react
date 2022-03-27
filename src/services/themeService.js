import theme from "../assets/jsons/background.json";

export function hexToRGB(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
}

export const themeData = theme.data.map((t) => {
  const colorStop = t.gradient.map((g) => `${g.color} ${g.pos}%`).join(", ");
  return {
    ...t,
    background: `linear-gradient(${t.direction}, ${colorStop})`,
    colors: [t.gradient[0].color, t.gradient[t.gradient.length - 1].color],
  };
});
