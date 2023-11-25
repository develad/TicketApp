import TicketForm from '@/components/TicketForm';

const getTicketById = async (id) => {
  const res = await fetch(
    `https://ticket-app-rouge.vercel.app/api/Tickets/${id}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to get ticket');
  }

  // console.log(res);
  return await res.json();
};

const TicketPage = async ({ params }) => {
  // return <div>TicketPage {params.id}</div>;
  const EDITMODE = params.id === 'new' ? false : true;

  let updateTicketData = {};
  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: 'new',
    };
  }

  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
