import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);

// mongoose.Promise = global.Promise

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

export const Ticket =
  mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

export const BackUpTicket =
  mongoose.models.BackUpTicket || mongoose.model('BackUpTicket', ticketSchema);
