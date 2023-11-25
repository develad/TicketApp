'use client';
import Link from 'next/link';
import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = ({ ticket }) => {
  const formatTimeAndDate = (time) => {
    return new Intl.DateTimeFormat('he-IL', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      hour12: false,
    })
      .format(new Date(time))
      ?.split(',')
      ?.reverse()
      ?.join(' | ');
  };

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      {/* display:'contents' ignors the Link tag style */}
      <Link
        href={`/TicketPage/${ticket._id}`}
        style={{ display: 'contents' }}
      >
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-white/50 my-2" />
        <p className="whitespace-pre-wrap">{ticket.description} </p>
        {/* 
      <div className="flex-grow"></div>
      Making sure all the tickets cards are at the same size regardless to how much font they have inside */}
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1 opacity-50">
              {formatTimeAndDate(ticket.createdAt)}
            </p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
