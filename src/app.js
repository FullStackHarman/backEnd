import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();


app.use(
    cors({
        origin:process.env.CORS_ORIGIN,
        Credentials:true,
    })
)
// common middlewares
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));  
app.use(cookieParser());


//  import routes
import healthcheckRoutes from './routes/healthcheck.routes.js';




//routes 
app.use("/api/v1/healthcheck", healthcheckRoutes);
export {app};