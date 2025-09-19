// Utility functions for layout containers

export function parseAspect(ratio: string | number): string {
  if (typeof ratio === "number") return `${ratio}`;
  
  const common: Record<string, string> = {
    "1:1": "1 / 1",
    "4:3": "4 / 3", 
    "3:4": "3 / 4",
    "16:9": "16 / 9",
    "9:16": "9 / 16",
    "21:9": "21 / 9",
    "2:1": "2 / 1",
    "1:2": "1 / 2"
  };

  return common[ratio] || ratio.replace(":", " / ");
}