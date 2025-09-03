import { AllImages } from "@/Components/Allimages/AllImages";
import React from "react";

export default function useGetAllProducts() {
  const getAllProducts = [
    {
      id: 1,
      name: "Taco Spot Boxed Napkins - 500 Pcs",
      price: "$12.99",
      image: AllImages.AllProducts,
      category: "packaging",
    },
    {
      id: 2,
      name: "Premium Paper Cups - 100 Pack",
      price: "$8.49",
      image: AllImages.AllProducts,
      category: "packaging",
    },
    {
      id: 3,
      name: "Disposable Food Containers - 50 Count",
      price: "$15.99",
      image: AllImages.AllProducts,
      category: "packaging",
    },
    {
      id: 4,
      name: "Plastic Utensils Set - 200 Pieces",
      price: "$11.75",
      image: AllImages.AllProducts,
      category: "packaging",
    },
    {
      id: 5,
      name: "Commercial Paper Towels - 12 Rolls",
      price: "$24.99",
      image: AllImages.AllProducts,
      category: "ingredients",
    },
    {
      id: 6,
      name: "Insulated Coffee Cups - 50 Pack",
      price: "$13.25",
      image: AllImages.AllProducts,
      category: "ingredients",
    },
    {
      id: 7,
      name: "Food Service Gloves - 100 Count",
      price: "$9.99",
      image: AllImages.AllProducts,
      category: "uniform",
    },
    {
      id: 8,
      name: "Aluminum Foil Sheets - 500 Count",
      price: "$18.50",
      image: AllImages.AllProducts,
      category: "packaging",
    },
    {
      id: 9,
      name: "Restaurant Quality Straws - 250 Pack",
      price: "$6.99",
      image: AllImages.AllProducts,
      category: "packaging",
    },
    {
      id: 10,
      name: "Heavy Duty Trash Bags - 100 Count",
      price: "$22.49",
      image: AllImages.AllProducts,
      category: "equipment",
    },
    {
      id: 11,
      name: "Disposable Plates - 150 Pack",
      price: "$14.25",
      image: AllImages.AllProducts,
      category: "packaging",
    },
    {
      id: 12,
      name: "Sanitizer Wipes - 6 Pack",
      price: "$16.99",
      image: AllImages.AllProducts,
      category: "ingredients",
    },
    {
      id: 13,
      name: "Pizza Boxes - 50 Count (Large)",
      price: "$31.99",
      image: AllImages.AllProducts,
      category: "packaging",
    },
    {
      id: 14,
      name: "Condiment Cups - 200 Pack",
      price: "$7.75",
      image: AllImages.AllProducts,
      category: "packaging",
    },
    {
      id: 15,
      name: "Burger Wrapping Paper - 1000 Sheets",
      price: "$19.99",
      image: AllImages.AllProducts,
      category: "packaging",
    },
    {
      id: 16,
      name: "Non-Slip Floor Mats - Set of 4",
      price: "$45.99",
      image: AllImages.AllProducts,
      category: "equipment",
    },
    {
      id: 17,
      name: "Industrial Hand Soap - 4 Bottles",
      price: "$28.50",
      image: AllImages.AllProducts,
      category: "ingredients",
    },
    {
      id: 18,
      name: "Chef Jackets - Set of 5",
      price: "$59.99",
      image: AllImages.AllProducts,
      category: "uniform",
    },
    {
      id: 19,
      name: "Kitchen Aprons - 10 Pack",
      price: "$39.99",
      image: AllImages.AllProducts,
      category: "uniform",
    },
    {
      id: 20,
      name: "Serving Trays - 20 Pack",
      price: "$27.99",
      image: AllImages.AllProducts,
      category: "equipment",
    },
  ];

  return { getAllProducts };
}
