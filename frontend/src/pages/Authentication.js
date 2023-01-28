import AuthForm from '../components/AuthForm';
import { json, redirect } from 'react-router-dom';

function Authentication() {
  return <AuthForm />;
}

export default Authentication;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';
  const data = await request.formData();
  const values = {
    email: data.get('email'),
    password: data.get('password')
  }
  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: request.method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values)
  });
  if (response.status === 401 || response.status === 422) return response
  if (!response.ok) throw json({ errorMsg: "Couldn't Sumbit Form Data" }, { status: 500 })
  return redirect('/')
}