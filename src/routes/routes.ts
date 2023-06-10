import { LazyExoticComponent, lazy } from "react";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to          : string;
    path        : string;
    Component   : LazyExoticComponent<JSXComponent> | JSXComponent;
    name        : string;
}

const Lazy1= lazy(()=> import(/* webpackChunkName: "layzy-page-1" */'../01-lazyload/pages/lazy-page-1'));
const Lazy2= lazy(()=> import(/* webpackChunkName: "layzy-page-2" */'../01-lazyload/pages/lazy-page-2'));
const Lazy3= lazy(()=> import(/* webpackChunkName: "layzy-page-3" */'../01-lazyload/pages/lazy-page-3'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: '/lazy1',
        Component: Lazy1,
        name: 'lazy-1',
    },
    {
        to: '/lazy2',
        path: '/lazy2',
        Component: Lazy2,
        name: 'lazy-2',
    },
    {
        to: '/lazy3',
        path: '/lazy3',
        Component: Lazy3,
        name: 'lazy-3',
    }
];