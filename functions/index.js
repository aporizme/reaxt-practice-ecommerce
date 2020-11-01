const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HhbWeK6Pwgt0Igm8gk5NtKfrp5G8Or2gGnt4HL1HvyO2JixxlNtwCuUutHlJ1PBlsRFrf06nU34wZQ2yOSXoOXu00nzjYMA8H"
);

// API

// - App Config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);
