import { AllImages } from "@/Components/Allimages/AllImages";
import React from "react";

export default function useGetCartList() {
  const CartList = [
    {
      id: 1,
      name: "Taco Spot Boxed Napkins - 500 Pcs",
      price: 12.99,
      quantity: 2,
      total: 25.99,
      image:AllImages.AllProducts
    },
    {
      id: 2,
      name: "Pizza Corner Paper Plates - 50 Pack",
      price: 8.5,
      quantity: 1,
      total: 8.5,
      image:AllImages.AllProducts
    },
    {
      id: 3,
      name: "Burger King Disposable Cups - 100 Pcs",
      price: 15.75,
      quantity: 3,
      total: 47.25,
      image:AllImages.AllProducts
    },
    {
      id: 4,
      name: "Chicken Delight Plastic Forks - 200 Pack",
      price: 6.99,
      quantity: 1,
      total: 6.99,
      image:AllImages.AllProducts
    },
    {
      id: 5,
      name: "Sandwich Shop Table Covers - 10 Pcs",
      price: 22.0,
      quantity: 2,
      total: 44.0,
      image:AllImages.AllProducts
    },
    {
      id: 6,
      name: "Coffee House Stirrers - 500 Pack",
      price: 9.25,
      quantity: 4,
      total: 37.0,
      image:AllImages.AllProducts
    },
    {
      id: 7,
      name: "Ice Cream Palace Spoons - 150 Pcs",
      price: 11.5,
      quantity: 1,
      total: 11.5,
      image:AllImages.AllProducts
    },
    {
      id: 8,
      name: "BBQ Grill Paper Towels - 12 Rolls",
      price: 18.99,
      quantity: 2,
      total: 37.98,
      image:AllImages.AllProducts
    },
    {
      id: 9,
      name: "Pasta Palace Takeout Boxes - 25 Pack",
      price: 13.75,
      quantity: 3,
      total: 41.25,
      image:AllImages.AllProducts
    },
    {
      id: 10,
      name: "Deli Express Food Wraps - 100 Sheets",
      price: 7.8,
      quantity: 1,
      total: 7.8,
      image:AllImages.AllProducts
    },
  ];
  return { CartList };
}
