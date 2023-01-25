import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainRoot from './pages/MainRoot';
import Home from './pages/Home';
import Events, {loader as loadEvents} from './pages/Events';
import EventDetail, {loader as loadEventDetail} from './pages/EventDetail';
import NewEvent, {action as addNewEvent} from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import EventsRoot from './pages/EventsRoot';
const root = createBrowserRouter([
  {
    path: '/', element: <MainRoot />, children: [
      { index: true, element: <Home /> },
      { path: 'events', element: <EventsRoot />, children: [
          { index: true, element: <Events />, loader: loadEvents },
          { path: ':eventId', id: 'eventDetail', loader: loadEventDetail, children: [
              { index: true, element: <EventDetail /> },
              { path: 'edit', element: <EditEvent /> }
            ]},
          { path: 'new', element: <NewEvent />, action: addNewEvent },
        ]},
    ]
  }
]);

function App() {
  return <RouterProvider router={root} />;
}

export default App;
