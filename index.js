require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger");

app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"], allowedHeaders: ["Content-Type", "Authorization"], credentials: true }));
app.use(express.json());

/* ---------------- SWAGGER ---------------- */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); 

const userRoute = require("./routes/userRoute");
app.use("/api", userRoute);

const categoryRoute = require("./routes/categoryRoute");
app.use("/api", categoryRoute);

const genderRoute = require("./routes/genderRoute");
app.use("/api", genderRoute);

const productTypeRoute = require("./routes/productTypeRoute");
app.use("/api", productTypeRoute);

const materialRoute = require("./routes/materialRoutes");
app.use("/api", materialRoute);

const varietyRoute = require("./routes/varietyRoutes");
app.use("/api", varietyRoute);

const productRoute = require("./routes/productRoute");
app.use("/api", productRoute);

const menuRoute = require("./routes/menuRoute");
app.use("/api", menuRoute);

const cartRoute = require("./routes/cartRoute");
app.use("/api", cartRoute);

const wishlistRoute = require("./routes/wishlistRoute");
app.use("/api", wishlistRoute);

const couponRoute = require("./routes/couponRoute");
app.use("/api", couponRoute);

const reviewRoute = require("./routes/reviewRoute");
app.use("/api", reviewRoute);

const addressRoute = require("./routes/addressRoute");
app.use("/api", addressRoute);

const authRoute = require("./routes/auth.routes");
app.use("/api", authRoute);

app.get("/", (req, res) => res.send("👤 Addresses API Running"));

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

