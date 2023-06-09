import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  // PROJECTS = 'projects',
  // CONTACTS = "contacts",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
  // [AppRoutes.PROJECTS]: '/projects',
  // [AppRoutes.CONTACTS]: '/contacts',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  }
  // [AppRoutes.PROJECTS]: {
  //     path: RoutePath.projects,
  //     element: <ProjectsPage />
  // },
  // [AppRoutes.CONTACTS]: {
  //     path: RoutePath.contacts,
  //     element: <ContactsPage />
  // },

}
