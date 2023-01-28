import classes from './EventsNavigation.module.css';
import { Link } from 'react-router-dom';
import { getToken } from '../util/Auth';

function EventsNavigation() {
  const token = getToken();
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to=''>All Events</Link>
          </li>
          {token ?
            <li>
              <Link to='new'>New Event</Link>
            </li>
            :
            null
          }
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
