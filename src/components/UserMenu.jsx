import React, { useEffect, useState } from "react";
import { getSupabase } from "../lib/supabaseClient";

export default function UserMenu() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const supabase = getSupabase();
    supabase.auth.getUser().then(({ data }) => setUser(data?.user || null));

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => sub?.subscription?.unsubscribe?.();
  }, []);

  if (!user) return null;

  const name = user.user_metadata?.name || user.email;

  async function logout() {
    const supabase = getSupabase();
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <button
      onClick={logout}
      style={{
        padding: "8px 12px",
        borderRadius: 10,
        border: "1px solid rgba(0,0,0,0.15)",
        background: "transparent",
        fontWeight: 800,
        cursor: "pointer",
      }}
      title={name}
    >
      Logout
    </button>
  );
}
