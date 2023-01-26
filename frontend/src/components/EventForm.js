import { useNavigate, Form, useNavigation, redirect, useActionData } from 'react-router-dom';
import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const actionData = useActionData();

  const { state } = useNavigation();

  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  let submitBtn = 'Save';
  if (state === 'submitting') submitBtn = 'Submitting..'


  const errorMsg = actionData?.errors && <ul>{Object.values(actionData.errors).map(error => <li key={error}>{error}</li>)}</ul>
  return (
    <Form method={method} className={classes.form}>
      {errorMsg}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event?.title} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event?.image} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event?.date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event?.description} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>{submitBtn}</button>
      </div>
    </Form>
  );
}

export default EventForm;



export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = {
    title: formData.get('title'),
    image: formData.get('image'),
    date: formData.get('date'),
    description: formData.get('description')
  }
  let url = `http://localhost:8080/events`;
  if (request.method === 'PATCH') {
    const id = params.eventId
    url = `http://localhost:8080/events/${id}`
  }
  const response = await fetch(url, {
    method: request.method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    return response
  }
  return redirect('/events')
}