import React from "react";

import Header from "components/Header";
import Footer from "components/Footer";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  children,
}: LayoutProps) => {
  return (
    <div className="w-screen h-screen bg-blue-950 flex flex-col">
      <title>{pageTitle}</title>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
