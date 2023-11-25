import TicketCard from '@/components/TicketCard';

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Tickets', {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    console.log('Failed to get tickets ', error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();
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
              <h2> {uniqeCategory}</h2>
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
