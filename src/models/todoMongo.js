import mongoose from "mongoose";
import Counter from "./counterMongo.js";

const todoSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: { type: String, required: true },
});

// Avant de sauvegarder, incrémente le compteur
todoSchema.pre("save", async function (next) {
  if (!this.isNew) return next();

  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "tasks" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    this.id = counter.seq;
    next();
  } catch (err) {
    next(err);
  }
});

// Nettoyer l'objet renvoyé
todoSchema.method("toJSON", function () {
  const { _id, __v, ...object } = this.toObject();
  return object; 
});

export default mongoose.model("TodoMongo", todoSchema);
