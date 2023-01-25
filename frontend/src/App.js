import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainRoot from './pages/MainRoot';
import Home from './pages/Home';
import Events, {loader as eventsList} from './pages/Events';
import EventDetail, {loader as loadEventDetail, action as deleteEvent} from './pages/EventDetail';
import NewEvent from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import EventsRoot from './pages/EventsRoot';
import {action as eventActions} from './components/EventForm';
import Newsletter, {action as signupData} from './pages/Newsletter';
const root = createBrowserRouter([
  {
    path: '/', element: <MainRoot />, children: [
      { index: true, element: <Home /> },
      { path: 'events', element: <EventsRoot />, children: [
          { index: true, element: <Events />, loader: eventsList },
          { path: ':eventId', id: 'eventDetail', loader: loadEventDetail, children: [
              { index: true, element: <EventDetail />, action: deleteEvent },
              { path: 'edit', element: <EditEvent />, action: eventActions }
            ]},
          { path: 'new', element: <NewEvent />, action: eventActions },
        ]},
      { path: 'newsletter', element: <Newsletter />, action: signupData }
    ]
  }
]);

function App() {
  return <RouterProvider router={root} />;
}

export default App;
