
const express = require("express");
const PaymentController = require("../../controllers/paymentController");
const authMiddleware = require("../../middleware/auth");
const testRoutes = require("./test");

const router = express.Router();

// Create payment order (public endpoint for guest donations)
router.post("/create-order", PaymentController.createPaymentOrder);

// Verify payment
router.post("/verify", PaymentController.verifyPayment);

// Simulate payment success (for testing)
router.post("/simulate-success", PaymentController.simulatePaymentSuccess);

// Get donation receipt
router.get("/receipt/:donationId", PaymentController.getDonationReceipt);

// Get donation statistics (admin only)
router.get("/stats", authMiddleware(["admin"]), PaymentController.getDonationStats);

// Test routes (only in development)
if (process.env.NODE_ENV === 'development') {
    router.use("/test", testRoutes);
}

module.exports = router;
