import { Form, useSearchParams, Link, useActionData } from 'react-router-dom';
import classes from './AuthForm.module.css';

function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const actionData = useActionData();
  const mainError = actionData?.message ? <p>{actionData.message}</p> : null;
  const displayErrors = actionData?.errors ? <ul>{Object.values(actionData.errors).map(error => <li key={error}>{error}</li>)}</ul> : null;
  return (
    <Form method="post" className={classes.form}>
      {mainError}
      {displayErrors}
      <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </p>
      <p>
        <label htmlFor="image">Password</label>
        <input id="password" type="password" name="password" required />
      </p>
      <div className={classes.actions}>
        <Link to={isLogin ? '?mode=signup' : '?mode=login'}>
          {isLogin ? 'Create new user' : 'Login'}
        </Link>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default AuthForm;
