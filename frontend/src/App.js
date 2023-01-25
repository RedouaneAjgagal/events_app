import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainRoot from './pages/MainRoot';
import Home from './pages/Home';
import Events, {loader as loadEvents} from './pages/Events';
import EventDetail, {loader as loadEventDetail, action as deleteEvent} from './pages/EventDetail';
import NewEvent from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import EventsRoot from './pages/EventsRoot';
import {action as eventActions} from './components/EventForm';
const root = createBrowserRouter([
  {
    path: '/', element: <MainRoot />, children: [
      { index: true, element: <Home /> },
      { path: 'events', element: <EventsRoot />, children: [
          { index: true, element: <Events />, loader: loadEvents },
          { path: ':eventId', id: 'eventDetail', loader: loadEventDetail, children: [
              { index: true, element: <EventDetail />, action: deleteEvent },
              { path: 'edit', element: <EditEvent />, action: eventActions }
            ]},
          { path: 'new', element: <NewEvent />, action: eventActions },
        ]},
    ]
  }
]);

function App() {
  return <RouterProvider router={root} />;
}

export default App;
