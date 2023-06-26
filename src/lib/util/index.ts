export const generateNextImageUrl = (
  url: string,
  width: number = 1200,
  height: number = 600,
  quality: number = 75
): string =>
  `/_next/image?url=${encodeURIComponent(
    url
  )}&w=${width}&h=${height}&q=${quality}`;
