import classes from './EventItem.module.css';
import { Link, useSubmit } from 'react-router-dom';
import { getToken } from '../util/Auth';

function EventItem({ event }) {
  const token = getToken();
  const submit = useSubmit();
  function startDeleteHandler() {
    const response = window.confirm("Are you sure you want to do that?");
    if (response) {
      return submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {token ?
        <menu className={classes.actions}>
          <Link to='edit'>Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
        :
        null
      }
    </article>
  );
}

export default EventItem;

// export const action = async ({params, request}) => {
//   const id = params.eventId;
//   const response = await fetch(`http://localhost:8080/events/${id}/edit`);

// }
