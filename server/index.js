const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 IMPORTANT: USE CORRECT KEYS
const razorpay = new Razorpay({
  key_id: "rzp_test_SWbMaeA4rGPzWJ", // 🔥 replace with Razorpay key
  key_secret: "O2v5NRuLYOVXkZhprX6r79h2", // 🔥 replace with Razorpay secret
});
app.get("/test", (req, res) => {
  console.log("✅ TEST API HIT");
  res.send("Backend working");
});

app.post("/create-order", async (req, res) => {
  try {
    console.log("👉 Request received");

    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount missing" });
    }

    console.log("👉 Amount:", amount);

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    console.log("✅ Order created:", order);

    res.json(order);

  } catch (err) {
    console.error("❌ FULL ERROR:", err);

    res.status(500).json({
      error: "Order creation failed",
      details: err.message,
    });
  }
});

app.listen(5000, () => console.log("Server running on 5000"));