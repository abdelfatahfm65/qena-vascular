import React, { useEffect } from "react";
import HtmlNavbarItem from "@theme-original/NavbarItem/HtmlNavbarItem";
import ReactDOM from "react-dom/client";
import UserMenu from "@site/src/components/UserMenu";

export default function HtmlNavbarItemWrapper(props) {
  useEffect(() => {
    const el = document.getElementById("user-menu");
    if (el && !el.__mounted) {
      el.__mounted = true;
      ReactDOM.createRoot(el).render(<UserMenu />);
    }
  }, []);

  return <HtmlNavbarItem {...props} />;
}
