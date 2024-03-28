import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  completedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Todos = mongoose.model("Todos", todoSchema);

export default Todos;
