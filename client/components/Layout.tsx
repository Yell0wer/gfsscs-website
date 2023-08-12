import { ReactNode } from "react";
import Footer from "./Footer";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      {children} 
      <Footer />
    </div>
  );
}

export default Layout;
