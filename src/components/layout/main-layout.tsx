import { ReactNode } from "react";
import { Header } from "../header/header";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
