import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../components/BookDetails/BookDetails'; 
import ReadNow from '../components/ReadNow/ReadNow';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('./booksData.json'),
                Component:Home,
                path: "/"
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: '/bookDetails/:id',
                Component: BookDetails,
                loader: () => fetch('./booksData.json'),
            },
            {
                path: '/readnow/:id',
                Component: ReadNow,
                loader: () => fetch('/booksData.json').then(res => res.json()),

            }
        ]
    },
]);

