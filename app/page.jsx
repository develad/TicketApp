'use client';
import TicketCard from '@/components/TicketCard';

const Dashboard = () => {
  const handleClick = async () => {
    const res = await fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify({
        item: 'book',
        id: 3422332,
      }),
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    });
    const msg = await res.json();
    const titles = msg.map((item) => `${item.title}\n\n`);
    console.log(...titles);
  };

  // const handleClick = async () => {
  //   const res = await fetch('/api/getInfo', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       item: 'book',
  //       id: 3422332,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // };
  return (
    <div className="p-5 ">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Dashboard;
