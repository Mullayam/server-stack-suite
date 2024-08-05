export const styles = [
    {
      name: "default",
      label: "Default",
    },
    {
      name: "new-york",
      label: "New York",
    },
    {
        name: "zinc",
        label: "Zinc",
      },
      {
        name: "slate",
        label: "Slate",
      },
      {
        name: "neutral",
        label: "Neutral",
      },
      {
        name: "rose",
        label: "Rose",
      },
      {
        name: "orange",
        label: "Orange",
      },
      {
        name: "green",
        label: "Green",
      },
      {
        name: "blue",
        label: "Blue",
      },
      {
        name: "violet",
        label: "Violet",
      },
  ] as const
  
  export type Style = (typeof styles)[number]