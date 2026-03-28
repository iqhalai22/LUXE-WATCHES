"use client";

import { useState } from "react";

export default function OrderPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "COD",
  });

  const handleSubmit = () => {
    const message = `New Order:
Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}
Payment: ${form.payment}`;

    window.open(
      `https://wa.me/919769391929?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <div style={{ padding: "20px", color: "white", background: "#0a0a0a" }}>
      <h1 style={{ color: "gold" }}>Complete Your Order</h1>

      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <textarea placeholder="Address" onChange={(e) => setForm({ ...form, address: e.target.value })} />

      <select onChange={(e) => setForm({ ...form, payment: e.target.value })}>
        <option>Cash on Delivery</option>
        <option>UPI</option>
        <option>Bank Transfer</option>
      </select>

      <button onClick={handleSubmit}>Place Order</button>
    </div>
  );
}