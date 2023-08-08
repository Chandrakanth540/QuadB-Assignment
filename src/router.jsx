import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import Header from './components/Header';
import App from './App';
import FilmDetails from './components/FilmDetails';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route index element={<HomeScreen />} />
        <Route path="filmdetails" element={<FilmDetails />} />
      </Route>
    </Route>,
  ),
);
