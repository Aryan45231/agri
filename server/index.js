require("dotenv").config();
// Library dependencies
const express = require("express"),
  port = process.env.port || 1010,
  path = require("path"),
  http = require("http"),
  mongoose = require("mongoose"),
  cors = require("cors"),

  // Routes
  authRoutes = require("./routes/authRoutes"),
  userRoutes = require("./routes/userRoutes"),
  uploadFileRoute = require("./routes/fileUploadRoutes"),
  feedRoutes = require("./routes/feedRoutes"),
  jankariRoutes = require("./routes/jankariRoutes"),
  // Admin Routes
  adminFeedRoutes = require("./routes/adminRoutes/feedRoutes"),
  adminJankariRoutes = require("./routes/adminRoutes/jankariRoutes")

// Middleware
errorHandler = require("./middlewares/errorHandler"),
  authenticate = require("./middlewares/authenticate"),
  privateRoute = require("./middlewares/privateRoute"),

  config = require("./config"),
  app = express();
// database Configuration
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUriStaging, {
  useNewUrlParser: true,
});
// Required Middlewares
app.use(cors());
app.use(express.json());
// Static Files
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.static(path.join(__dirname, "public")));

// socket.connect(server
const server = http.createServer(app);
module.exports = server;
require("./socket.io/index");

app.use("/api/v1/auth", authRoutes);

// UserRoutes
app.use(
  "/api/v1/users",
  authenticate,
  privateRoute([
    "SuperAdmin",
    "Admin",
    "Moderator",
    "User"
  ]),
  userRoutes
);

// Feed Routes
app.use("/api/v1/feed",
  authenticate,
  privateRoute([
    "SuperAdmin",
    "Admin",
    "Moderator",
    "User"
  ]),
  feedRoutes)

// Routes fr Jankari 
app.use("/api/v1/jankari",
  authenticate,
  privateRoute([
    "SuperAdmin",
    "Admin",
    "Moderator",
    "User"
  ]),
  jankariRoutes
)

// Admin Routes for Feeds
app.use("/api/v1/admin/feed",
  authenticate,
  privateRoute([
    "SuperAdmin",
    "Admin",
    "Moderator"
  ]),
  adminFeedRoutes)

// Admin Routes for Jankari
app.use("/api/v1/admin/jankari",
  authenticate,
  privateRoute([
    "SuperAdmin",
    "Admin",
    "Moderator"
  ]),
  adminJankariRoutes)

// File Upload Routes
app.use("/api/v1/upload", uploadFileRoute);
// Error Handler Rout 
app.use(errorHandler);

app.get("*", (req, res) => {

  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
server.listen(port, () => console.log(`listening on ${port}`));
