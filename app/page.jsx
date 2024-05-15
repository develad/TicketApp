import TicketCard from '@/components/TicketCard';

const formatDateAndTime = (rawTimeAndDate) => {
  const formated = new Intl.DateTimeFormat('he-IL', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: 'numeric',
    // second: 'numeric',
    hour12: false,
  })
    .format(new Date(new Date(rawTimeAndDate).getTime() + 1000 * 60 * 60 * 2))
    ?.split(',')
    ?.reverse()
    ?.join(' | ');

  return formated;
};

const getTickets = async () => {
  try {
    const res = await fetch('https://ticket-app-rouge.vercel.app/api/Tickets', {
      cache: 'no-store',
    });
    const data = await res.json();

    data.tickets.map((ticket) => {
      ticket.date = formatDateAndTime(ticket.createdAt);
      ticket.lastUpdate = formatDateAndTime(ticket.updatedAt);
      return ticket;
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log('Failed to get tickets ', error);
  }
};

const Dashboard = async () => {
  const { tickets } = (await getTickets()) || {};
  // console.log(tickets);

  const uniqeCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5 ">
      <div>
        {tickets &&
          uniqeCategories?.map((uniqeCategory, categoryIndex) => (
            <div
              key={categoryIndex}
              className="mb-4"
            >
              <h2 className="mb-4"> {uniqeCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqeCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}

        {/* <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard /> */}
      </div>
    </div>
  );
};

export default Dashboard;
