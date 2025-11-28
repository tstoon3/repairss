import express from "express";
import cors from "cors";
import repairsRoutes from "./routes/routers_case.js"
import usersRoutes from "./routes/routers_user.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/api_cases",repairsRoutes);
app.use("/api_users",usersRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
}); 