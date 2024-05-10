import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  todo: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  completedAt: {
    type: Boolean,
    default: false,
  },
  updatedDate: {
    type: Date,
    default: Date.now(),
  },
});

const Todos = mongoose.model("Todos", todoSchema);

export default Todos;
