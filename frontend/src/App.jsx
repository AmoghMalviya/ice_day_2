import { Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import routes from "@/routes";
import { SidebarWithBurgerMenu } from "./widgets/layout/sidebar";
import { Button } from "@material-tailwind/react";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {!(pathname == '/sign-in' || pathname == '/sign-up') && (
        <div className=" relative  p-6 flex justify-between items-center bg-black z-10">
        <SidebarWithBurgerMenu />
        <div className="flex items-center gap-8 px-4">
        <Link to={routes.find(route => route.name === 'Sign In')?.path || '/'}>
        <Button>Login</Button>
      </Link>
      <Link to={routes.find(route => route.name === 'Sign Up')?.path || '/'}>
        <Button>Sign Up</Button>
      </Link>
        </div>
      </div>
      
      )
      }
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
