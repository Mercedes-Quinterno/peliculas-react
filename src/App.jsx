import './App.css'; //Este es el normalize para que quede todo con formato de márgenes y demás desde cero
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //Esto nos permite acceder a las diferentes secciones
import Root from './components/Root';
import Home from "./components/Home"; //Ruta principal, nuestro Home
import UltimosEstrenos from "./components/UltimosEstrenos"; //Ruta "Último estreno"
import Populares from "./components/Populares"; //Ruta "Populares"
import Buscar from "./components/Buscar"; //Ruta "Buscar película"
import PaginaError from "./components/PaginaError";//Debe haber una página de 404 cuando se introduzca una url desconocida
import Pelicula from './components/Pelicula';
import { loader as peliculaLoader } from './loaders/PeliculaLoader';
import { loader as homeLoader } from './loaders/HomeLoader';

function App() {
  return ( /*El browser Router debe envolver todo para acceder a las disferentes secciones*/
    <RouterProvider router={router} />
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/estrenos",
        element: <UltimosEstrenos />,
      },
      {
        path: "/populares",
        element: <Populares />,
      },
      {
        path: "/buscar",
        element: <Buscar />,
      },
      {
        path: "/pelicula/:peliculaId",
        loader: peliculaLoader,
        element: <Pelicula />,
      },
      {
        path: "*",
        element: <PaginaError />,
      },
    ],
  },
]);

export default App;