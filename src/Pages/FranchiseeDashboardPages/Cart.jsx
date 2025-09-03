import DeleteSVG from "@/Components/Svg/FranchiseeDashboardSVG/DeleteSVG";
import { StripeSVG } from "@/Components/Svg/FranchiseeDashboardSVG/StripeSVG";
import useGetCartList from "@/hook/FranchiseeDashboardHook/ProductHubPages/list/useGetCartList";
import React, { useState, useMemo } from "react";

export default function Cart() {
  const { CartList } = useGetCartList();

 
  const [cartItems, setCartItems] = useState(CartList || []);
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
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantities((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  const { subtotal, shipping, tax, total } = useMemo(() => {
    const subtotal = cartItems.reduce((acc, item) => {
      const qty = quantities[item.id] || item.quantity || 1;
      return acc + item.price * qty;
    }, 0);

    const shipping = subtotal > 0 ? 9.9 : 0;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return { subtotal, shipping, tax, total };
  }, [cartItems, quantities]);

  return (
    <main className="h-[80vh]">
      <h1 className="text-xl font-semibold mb-6">
        Shopping cart ({cartItems.length} items)
      </h1>
      <div className="grid grid-cols-12 gap-6 h-[calc(88vh-4rem)]">
        <div className="col-span-7 overflow-y-auto custom-scrollbar pr-4">
          {cartItems.map((item, index) => {
            const quantity = quantities[item.id] || item.quantity || 1;

            return (
              <div key={index} className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-4 p-6 bg-white rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[346px] h-[246px] rounded-2xl object-cover"
                  />

                  <div className="space-y-4 w-full">
                    <h1 className="text-2xl font-semibold">{item.name}</h1>
                    <p className="text-2xl font-semibold">${item.price}</p>
                    <p>QTY {quantity}</p>
                    <p className="text-2xl font-semibold text-PrimaryBg">
                      Total ${(item.price * quantity).toFixed(2)}
                    </p>

                    {/* button */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={quantity <= 1}
                        >
                          <span className="text-lg font-medium">−</span>
                        </button>

                        <input
                          type="text"
                          value={quantity}
                          onChange={(e) => handleInputChange(item.id, e)}
                          className="w-12 h-10 text-center border border-gray-300 rounded-md"
                        />

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer"
                        >
                          <span className="text-lg font-medium">+</span>
                        </button>
                      </div>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="cursor-pointer text-red-500 hover:text-red-700"
                      >
                        <DeleteSVG />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* right side */}
        <div className="col-span-5">
          <div className="sticky top-6 bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-medium mb-4">Order Summary</h2>

            <div className="space-y-4">
              <div className="text-xl text-PrimaryText flex justify-between">
                <h1>Subtotal</h1>
                <h1 className="text-black">${subtotal.toFixed(2)}</h1>
              </div>
              <div className="text-xl text-PrimaryText flex justify-between">
                <h1>Shipping</h1>
                <h1 className="text-black">${shipping.toFixed(2)}</h1>
              </div>
              <div className="text-xl text-PrimaryText flex justify-between">
                <h1>Tax</h1>
                <h1 className="text-black">${tax.toFixed(2)}</h1>
              </div>
              <hr />
              <div className="text-xl text-black font-medium flex justify-between">
                <h1>Total</h1>
                <h1 className="text-PrimaryBg">${total.toFixed(2)}</h1>
              </div>
            </div>

            <div className="bg-[#f4f5f7] mt-4 p-4 rounded-lg text-[#5E5E5E]">
              <h1>Estimated delivery: 3-5 business days</h1>
            </div>

            <div className="mt-6">
              <h1 className="text-2xl font-semibold">Payment Method</h1>
              <label className="border py-2 px-4 rounded-lg flex items-center justify-between mt-4 cursor-pointer">
                <StripeSVG className="w-12 h-12" />
                <input type="radio" name="payment" defaultChecked />
              </label>
            </div>
            <div>
              <button className="bg-black text-white py-4 px-4 rounded-lg mt-8 w-full hover:bg-black/90 cursor-pointer">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
