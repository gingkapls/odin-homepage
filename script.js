function generateRandomHSLColor(saturation = 50, lightness = 70) {
  const max = 360;
  const hue = Math.floor(Math.random() * max);
  return `hsl(${hue}deg, ${saturation}%, ${lightness}%)`;
}

const screenshots = document.querySelectorAll(".project-card > img");
screenshots.forEach(
  (shot) => (shot.style.backgroundColor = generateRandomHSLColor())
);
