export const getFullImageUrl = (image) => {
  if (!image) return "/images/default-avatar.png";

  if (image.startsWith("http")) return image;

  return `http://localhost:5000${image}`;
};