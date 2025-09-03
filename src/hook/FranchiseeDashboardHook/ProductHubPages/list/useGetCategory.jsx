import React from "react";

export default function useGetCategory() {
  const category = [
    {
      name: "all",
      label: "All",
    },
    {
      name: "uniform",
      label: "Uniform",
    },
    {
      name: "packaging",
      label: "Packaging",
    },
    {
      name: "ingredients",
      label: "Ingredients",
    },
    {
      name: "equipment",
      label: "Equipement",
    },
  ];

  return { category };
}
