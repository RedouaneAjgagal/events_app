import NewsletterSignup from '../components/NewsletterSignup';

function Newsletter() {
    return <NewsletterSignup />
}

export default Newsletter;

export const action = async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    // send to the backend...
    return { email: email, message: 'Email has been added successfully!' };
}