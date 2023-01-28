import classes from './EventsNavigation.module.css';
import { Link, useRouteLoaderData } from 'react-router-dom';

function EventsNavigation() {
  const token = useRouteLoaderData('root');
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
