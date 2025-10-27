import { Router, Route, RootRoute } from "@tanstack/react-router";
import App from "./App";
import Home from "./pages/Home";
import Art from "./pages/Art";
import Coding from "./pages/Coding";
//router route rootroute are main tanstack router classes

//app, home, page1, page 2 is layout component

//parent route of whole site
//will render app
//will render <subpage />
const rootRoute = new RootRoute({
  component: App,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const artRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/art",
  component: Art,
});

const codeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/page2",
  component: Coding,
});

//create route tree, hierarchy of routes
const routeTree = rootRoute.addChildren([homeRoute, artRoute, codeRoute]);

export const router = new Router({ routeTree });

//informs type script of router in use
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
