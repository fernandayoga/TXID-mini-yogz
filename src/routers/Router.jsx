import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CatalogFilm from "../pages/CatalogFilm";
import DetailFilm from "../pages/DetailFilm";
import { detailFilm } from "../apis/loader";
import ErrorPage from "../error/ErrorPage";
import BeliTiket from "../pages/beliTiket";
import Succes from "../pages/Succes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/catalog",
        element: <CatalogFilm/>
    },
    {
        path: "/film/:id",
        element: <DetailFilm/>,
        loader : detailFilm,
        errorElement : <ErrorPage/>
    },
    {
        path: "/belitiket",
        element: <BeliTiket/>,
    },
    {
        path: "/succes",
        element: <Succes/>,
    },
])