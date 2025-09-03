import { Checkbox } from "@/Components/ui/checkbox";
import useGetAllProducts from "@/hook/FranchiseeDashboardHook/ProductHubPages/list/useGetAllProducts";
import useGetCategory from "@/hook/FranchiseeDashboardHook/ProductHubPages/list/useGetCategory";
import React, { useState } from "react";

export default function AllProducts() {
  const { getAllProducts } = useGetAllProducts();
  const { category } = useGetCategory();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [quantities, setQuantities] = useState({});

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleInputChange = (id, e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantities((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleCategoryChange = (name) => {
    setSelectedCategories((prev) =>
      prev.includes(name)
        ? prev.filter((c) => c !== name)
        : [...prev, name]
    );
  };

  // Filter products based on selected categories
  const filteredProducts =
    selectedCategories.length === 0 || selectedCategories.includes("all")
      ? getAllProducts
      : getAllProducts.filter((item) =>
          selectedCategories.includes(item.category)
        );

  return (
    <main>
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-2 p-6 rounded-xl bg-white">
          <h1 className="font-semibold text-2xl mb-4">Category</h1>
          <div className="flex flex-col gap-4 flex-wrap">
            {category.map(({ name, label }) => (
              <div key={name} className="flex items-center gap-2">
                <Checkbox
                  id={name}
                  checked={selectedCategories.includes(name)}
                  onCheckedChange={() => handleCategoryChange(name)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor={name}
                  className="text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="col-span-10">
          <div className="grid grid-cols-4 gap-4">
            {filteredProducts.map((item) => {
              const quantity = quantities[item.id] || 1;
              return (
                <div key={item.id}>
                  <img
                    src={item.image}
                    className="w-full object-contain rounded-t-2xl"
                    alt=""
                  />
                  <div className="bg-white rounded-b-2xl p-4">
                    <h1 className="text-lg font-medium mb-2">{item.name}</h1>
                    <p className="text-lg font-bold">{item.price}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={quantity <= 1}
                        >
                          <span className="text-lg font-medium">−</span>
                        </button>

                        <input
                          type="text"
                          value={quantity}
                          onChange={(e) => handleInputChange(item.id, e)}
                          className="w-12 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <span className="text-lg font-medium">+</span>
                        </button>
                      </div>
                      <button className="bg-black hover:bg-black/80 text-white py-2 px-4 rounded-lg cursor-pointer">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
