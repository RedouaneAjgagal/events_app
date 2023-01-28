import classes from './MainNavigation.module.css';
import { NavLink, Form } from 'react-router-dom';
import NewsletterSignup from './NewsletterSignup';
import { getToken } from '../util/Auth';

function MainNavigation() {
  const token = getToken();
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? classes.active : null}>Home</NavLink>
          </li>
          <li>
            <NavLink to='events' className={({ isActive }) => isActive ? classes.active : null}>Events</NavLink>
          </li>
          <li>
            <NavLink to='newsletter' className={({ isActive }) => isActive ? classes.active : null}>Newsletter</NavLink>
          </li>
          {token ?
            <Form method='post' action='/logout'>
              <button>Logout</button>
            </Form>
            :
            <li>
              <NavLink to='auth?mode=login' className={({ isActive }) => isActive ? classes.active : null}>Authentication</NavLink>
            </li>
          }
        </ul>
        <NewsletterSignup />
      </nav>
    </header>
  );
}

export default MainNavigation;
