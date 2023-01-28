import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainRoot from './pages/MainRoot';
import Home from './pages/Home';
import Events, { loader as eventsList } from './pages/Events';
import EventDetail, { loader as loadEventDetail, action as deleteEvent } from './pages/EventDetail';
import NewEvent from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import EventsRoot from './pages/EventsRoot';
import { action as eventActions } from './components/EventForm';
import Error from './pages/Error';
import Newsletter, { action as signupData } from './pages/Newsletter';
import Authentication, { action as formAction } from './pages/Authentication'
import { logout } from './pages/logout';
import { getToken } from './util/Auth';
const root = createBrowserRouter([
  {
    path: '/', element: <MainRoot />, errorElement: <Error />, id: 'root', loader: getToken, children: [
      { index: true, element: <Home /> },
      {
        path: 'events', element: <EventsRoot />, children: [
          { index: true, element: <Events />, loader: eventsList },
          {
            path: ':eventId', id: 'eventDetail', loader: loadEventDetail, children: [
              { index: true, element: <EventDetail />, action: deleteEvent },
              { path: 'edit', element: <EditEvent />, action: eventActions }
            ]
          },
          { path: 'new', element: <NewEvent />, action: eventActions },
        ]
      },
      { path: 'newsletter', element: <Newsletter />, action: signupData },
      { path: 'auth', element: <Authentication />, action: formAction },
      { path: 'logout', action: logout }
    ]
  }
]);

function App() {
  return <RouterProvider router={root} />;
}

export default App;
