import classes from './MainNavigation.module.css';
import { NavLink, Form, useRouteLoaderData } from 'react-router-dom';
import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  const token = useRouteLoaderData('root');
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
            <li>
              <Form method='post' action='/logout'>
                <button>Logout</button>
              </Form>
            </li>
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
