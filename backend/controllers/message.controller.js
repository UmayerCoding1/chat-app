import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const senderId = req.userId;
    const receiverId = req.params.id;

    let goyConversation = await Conversation.findOne({
      paticipants: { $all: [senderId, receiverId] },
    });

    if (!goyConversation) {
      goyConversation = await Conversation.create({
        paticipants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      goyConversation.messages.push(newMessage._id);
    }
    await goyConversation.save();

    // socket io
    return res.status(200).json({ message: "Message sent successfully", newMessage });
  } catch (error) {
    console.log("Send message error: ", error);
  }
};


export const getMessage = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.userId;
    const conversation = await Conversation.findOne({
      paticipants: { $all: [senderId, receiverId] },
    }).populate('messages');
    
    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    
    
    return res.status(200).json({ messages: conversation?.messages });
  } catch (error) {
    console.log("Get message error: ", error);
  }
};