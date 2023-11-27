'use client';
import Link from 'next/link';
import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = ({ ticket }) => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-lg shadow-lg p-3 my-2 md:mr-2 border-2 border-white">
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
            <div className="mb-4">
              <div className="flex items-center justify-between w-[185px] text-xs my-1 text-white/40">
                Created At:
                <span>{ticket.date}</span>
              </div>
              {ticket.createdAt !== ticket.updatedAt && (
                <div className="flex items-center justify-between w-[185px] text-xs my-1 text-white/40">
                  Last Update:
                  <span>{ticket.lastUpdate}</span>
                </div>
              )}
            </div>
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
