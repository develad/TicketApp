import { Ticket, BackUpTicket } from '../../(models)/Ticket';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);
    await BackUpTicket.create(ticketData);
    return NextResponse.json({ message: 'Ticket Created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { msg: 'Error', message: error.message },
      { status: 500 }
    );
  }
}
export async function GET(req) {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { msg: 'Error', message: error.message },
      { status: 500 }
    );
  }
}
