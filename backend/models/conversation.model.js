import mongoose, { Schema, model, models } from "mongoose";

const conversationSchema = new Schema({
  paticipants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
},{timestamps: true});

export const Conversation =
  models?.Conversation || model("Conversation", conversationSchema);
