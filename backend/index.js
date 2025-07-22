process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});


require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
//const adminRoutes = require("./routes/admin");
//const stadiumRoutes = require("./routes/stadium");
//const equipmentsRoutes = require("./routes/equipments")
const bookingRoutes = require("./routes/booking");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
//app.use("/api/admin", adminRoutes);
//app.use("/api/stadiums", stadiumRoutes);
//app.use("/api/equipments",equipmentsRoutes);
app.use("/api/booking", bookingRoutes);

app.listen(PORT, () => {
  console.log(`Backend service already start, port：${PORT}`);
});
console.log("Server setup done.");
