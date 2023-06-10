import { LazyExoticComponent, lazy } from "react";
import { NoLazyLayout } from "../01-lazyload/pages/no-lazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to          : string;
    path        : string;
    Component   : LazyExoticComponent<JSXComponent> | JSXComponent;
    name        : string;
}

const LazyLayout = lazy(()=> import(/* webpackChunkName: "layzy-layout" */'../01-lazyload/layout/lazy-layout'));

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'lazy-layout',
    },
    {
        path: '/no-lazy',
        to: '/no-lazy',
        Component: NoLazyLayout,
        name: 'no-lazy',
    },
];