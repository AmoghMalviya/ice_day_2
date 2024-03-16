import { Home, Profile, SignUp } from "@/pages";
import { SignIn } from "@/pages/sign-in.jsx";
import Chat from "./pages/Chat";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Personal Chat",
    path: "/personal-chat",
    element: <Chat />,
  },
];

export default routes;
