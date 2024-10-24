import dotenv from "dotenv";
dotenv.config(
    {path: "./.env"}
)
import { app } from "./app.js";
import connectDb from "./db/index.js";


const PORT = process.env.PORT || 3000;
console.log(PORT);
connectDb()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

}).catch((error)=>{
    console.log(error);
    process.exit(1);
})



