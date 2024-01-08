import { Outlet } from "@remix-run/react";

export default function admin() {
  return (
    <>
      <div>
        admin
        <Outlet />
      </div>
    </>
  );
}

// make sure user is admin!
