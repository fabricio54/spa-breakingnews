import React from 'react'
import ReactDOM from 'react-dom/client';
import { GlobalStyled } from './GlobalStyled.jsx';'./GlobalStyled.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import { Navebar } from './components/Navbar/Navbar.jsx';
import { Search } from './Pages/Search/Search.jsx';
import ErrorPage from './Pages/ErrorPage/ErroPage.jsx';
import { Authentication } from './Pages/authentication/Authentication.jsx';

// importando react router dom: constante que recebe um array de objetos rotas
const router = createBrowserRouter([
  {
    path: "/", // caminho
    element: <Navebar />, // elemento pai/mãe
    errorElement: <ErrorPage/>, // pagina de erro
    children: [{ // elemento filho
      path: "/",
      element: <Home />
    },
    {
      path: "/search/:title",
      element: <Search />
    }]
  },
  {
    path: "/auth",
    element: <Authentication/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled></GlobalStyled>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
