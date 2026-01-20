import React, { useEffect, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import { useLocation } from "@docusaurus/router";
import { getSupabase } from "../lib/supabaseClient";

export default function LoginPage() {
  const location = useLocation();
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const returnTo = params.get("returnTo") || "/docs/intro";

  const supabase = useMemo(() => getSupabase(), []);
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  // لو الصفحة اتفتحت بعد ضغط confirm من الإيميل:
  // Supabase ممكن يحط في الـ URL: ?error=... أو يسيبها فاضية.
  // وبيسجّل الجلسة تلقائيًا في المتصفح إذا الـ redirect URL صح.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const errDesc = p.get("error_description");
    const errCode = p.get("error_code");
    const err = p.get("error");

    if (err || errDesc || errCode) {
      // رسائل Supabase الشائعة بعد لينك فاسد/منتهي
      setError(errDesc || errCode || err || "Confirmation link error.");
    } else {
      // لو جيت من confirm صحيح، غالبًا الجلسة هتكون اتخزنت
      // نعمل check سريع
      (async () => {
        try {
          const { data } = await supabase.auth.getSession();
          if (data?.session) {
            // شيل أي query من الـ URL بعد النجاح عشان شكل الصفحة يبقى نظيف
            window.history.replaceState({}, "", "/login");
            window.location.href = returnTo;
          }
        } catch {
          // تجاهل
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setInfo("");
    setBusy(true);

    try {
      if (!supabase) throw new Error("Supabase is not ready.");

      if (mode === "signup") {
        // ده أهم سطر: خلي redirect يرجع لنفس الدومين الحالي بدل localhost
        const emailRedirectTo = `${window.location.origin}/login`;

        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { name }, // بيتخزن في user_metadata
            emailRedirectTo,
          },
        });

        if (signUpError) throw signUpError;

        // لو Email confirmation شغال، session هتكون null
        if (!data?.session) {
          setInfo("Account created ✅ Please check your email to confirm, then login.");
          return;
        }

        // لو مفيش confirmation (أو اتعمل auto-confirm)
        window.location.href = returnTo;
      } else {
        const { data, error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (loginError) throw loginError;

        // Optional: تحديث الاسم فقط بعد الدخول (Update مش Insert)
        const user = data?.user;
        if (user && name.trim()) {
          // لو RLS مضبوط، ده هيعدّي لأنه UPDATE على نفس المستخدم
          await supabase.from("profiles").update({ name: name.trim() }).eq("id", user.id);
        }

        window.location.href = returnTo;
      }
    } catch (err) {
      setError(err?.message || "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Layout title="Login" description="Login to access the library">
      <main style={{ padding: "44px 0" }}>
        <div className="container" style={{ maxWidth: 520 }}>
          <h1 style={{ marginBottom: 6 }}>{mode === "signup" ? "Create account" : "Login"}</h1>
          <p style={{ opacity: 0.8, marginBottom: 18 }}>
            Access to the Vascular Library requires login.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
            {mode === "signup" && (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                autoComplete="name"
                style={inputStyle}
              />
            )}

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              required
              autoComplete="email"
              style={inputStyle}
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              required
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
              style={inputStyle}
            />

            {error && <div style={errorStyle}>{error}</div>}
            {info && <div style={infoStyle}>{info}</div>}

            <button type="submit" disabled={busy} style={primaryBtn}>
              {busy ? "Please wait..." : mode === "signup" ? "Sign up" : "Login"}
            </button>

            <button
              type="button"
              onClick={() => setMode(mode === "signup" ? "login" : "signup")}
              style={secondaryBtn}
            >
              {mode === "signup" ? "Have an account? Login" : "New student? Create account"}
            </button>
          </form>

          <div style={{ marginTop: 14, fontSize: 13, opacity: 0.7 }}>
            Tip: If the confirm link opens <b>localhost</b>, fix Supabase Auth URL Configuration
            (Site URL + Redirect URLs) to your Stackblitz domain.
          </div>
        </div>
      </main>
    </Layout>
  );
}

const inputStyle = {
  padding: 12,
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,0.15)",
  fontSize: 15,
};

const errorStyle = {
  padding: 12,
  borderRadius: 12,
  background: "rgba(200,35,51,0.08)",
  border: "1px solid rgba(200,35,51,0.25)",
  fontWeight: 800,
};

const infoStyle = {
  padding: 12,
  borderRadius: 12,
  background: "rgba(46,133,85,0.10)",
  border: "1px solid rgba(46,133,85,0.30)",
  fontWeight: 800,
};

const primaryBtn = {
  padding: 12,
  borderRadius: 12,
  border: 0,
  fontWeight: 900,
  cursor: "pointer",
  background: "#2e8555",
  color: "white",
};

const secondaryBtn = {
  padding: 10,
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,0.15)",
  background: "transparent",
  fontWeight: 800,
  cursor: "pointer",
};
