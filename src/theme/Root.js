import React, { useEffect, useState } from "react";
import { useLocation } from "@docusaurus/router";
import { getSupabase } from "../lib/supabaseClient";

const PUBLIC_PATHS = ["/login"]; // صفحات مسموح من غير تسجيل

export default function Root({ children }) {
  const location = useLocation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const supabase = getSupabase();

    (async () => {
      const path = location.pathname || "/";
      const isPublic = PUBLIC_PATHS.some((p) => path.startsWith(p));

      if (isPublic) {
        setReady(true);
        return;
      }

      const { data } = await supabase.auth.getSession();
      if (!data?.session) {
        const returnTo = encodeURIComponent(path + (location.search || ""));
        window.location.href = `/login?returnTo=${returnTo}`;
        return;
      }

      setReady(true);
    })();
  }, [location.pathname, location.search]);

  // شاشة بسيطة أثناء التحقق
  if (!ready) {
    return (
      <div style={{ padding: 40, textAlign: "center", opacity: 0.7 }}>
        Loading...
      </div>
    );
  }

  return children;
}
