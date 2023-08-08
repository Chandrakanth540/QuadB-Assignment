import { NavLink, useLocation } from 'react-router-dom';
import '../css/filmdetails.css';
import { useState } from 'react';
const FilmDetails = () => {
  const [bookTicket, setBookTicket] = useState(true);
  const [ticketsCount, setTicketsCount] = useState(1);
  const uselocation = useLocation();
  const item = uselocation.state;
  if (item == null) {
    return (
      <div>
        <div className="notfound"> NOT FOUND</div>
        <div className="bookticket">
          <NavLink to={'/'}>
            <div>Go Home</div>
          </NavLink>
        </div>
      </div>
    );
  }
  let genre = item.show.genres.join(' | ');
  return (
    <div className="filmdetail-wrapper">
      <div className="filmdetail-part1">
        <img
          src={
            item?.show?.image?.original ||
            'https://preyash2047.github.io/assets/img/no-preview-available.png?h=824917b166935ea4772542bec6e8f636'
          }
          alt=""
        />
      </div>
      <div className="filmdetail-part2">
        <div className="filmdetail-title">{item?.show?.name}</div>
        {bookTicket ? (
          <>
            {' '}
            <div
              className="part2-summary"
              dangerouslySetInnerHTML={{ __html: item?.show?.summary }}
            />
            <div className="part2-info-wrap">
              {item?.show?.network?.name && (
                <div className="item">
                  <span>Network</span>: {item?.show?.network?.name}
                </div>
              )}
              {item.show?.schedule?.days && item?.show?.schedule?.time && (
                <div className="item">
                  <span>Schedule</span>: {item.show?.schedule?.days} at{' '}
                  {item?.show?.schedule?.time}{' '}
                </div>
              )}
              <div className="item">
                <span>Status</span>: {item?.show?.status}
              </div>
              <div className="item">
                <span>Show Type</span>: {item?.show?.type}
              </div>
              <div className="item">
                <span>Genre</span>: {genre}
              </div>
              <div className="item">
                <span>Language</span>: {item?.show?.language}
              </div>
              <div className="bookticket">
                <div onClick={() => setBookTicket(false)}>Book Ticket</div>
                <NavLink to={'/'}>
                  <div>Go Back</div>
                </NavLink>
              </div>
            </div>{' '}
          </>
        ) : (
          <div>
            <div className="checkdetail"> Please Check Details</div>
            <div className="item">
              <span>Movie Name</span> :{item.show.name}
            </div>
            <div className="item">
              <span>Number of Tickets</span> :{' '}
              <span
                className="ticketcount"
                onClick={() => {
                  if (ticketsCount > 1) {
                    setTicketsCount(ticketsCount - 1);
                  }
                }}
              >
                -{' '}
              </span>
              {ticketsCount}{' '}
              <span
                className="ticketcount"
                onClick={() => setTicketsCount(ticketsCount + 1)}
              >
                {' '}
                +
              </span>
            </div>
            <div className="item">
              <span>Theater Name </span>: Targaryen 4kDolby
            </div>
            {item.show.runtime && (
              <div className="item">
                <span>Runtime</span>: {item.show.runtime}min
              </div>
            )}
            <div className="item">
              <span>Genre</span> : {item.show.genres.join(' | ')}
            </div>
            <div className="item">
              <span>Language</span> : {item.show.language}
            </div>
            <div className="bookticket">
              <NavLink to={'/'}>
                <div
                  onClick={() =>
                    alert(`Your ${ticketsCount} tickets confirmed`)
                  }
                >
                  Confirm Ticket
                </div>
              </NavLink>
              <div onClick={() => setBookTicket(true)} className="cancelticket">
                Cancel Ticket
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default FilmDetails;
