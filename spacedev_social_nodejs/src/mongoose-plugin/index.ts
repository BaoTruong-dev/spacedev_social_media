import mongoose from "mongoose";
import { initSoftDeletePlugin } from "./softDelete.plugin";

mongoose.plugin(initSoftDeletePlugin);
