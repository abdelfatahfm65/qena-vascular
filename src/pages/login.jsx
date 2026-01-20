import React, { useState } from "react";
import Layout from "@theme/Layout";
import { useLocation } from "@docusaurus/router";
import { getSupabase } from "../lib/supabaseClient";

export default function LoginPage() {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const returnTo = params.get("returnTo") || "/docs/intro";

  const supabase = getSupabase();

  // لو الكونفيج مش موجود ما نكسرش الصفحة
  if (!supabase) {
    return (
      <Layout title="Login">
        <main style={{ padding: "44px 0" }}>
          <div className="container" style={{ maxWidth: 520 }}>
            <h1 style={{ marginBottom: 6 }}>Login</h1>
            <p style={{ opacity: 0.8 }}>
              Supabase config missing. Check <b>/static/config.js</b> then refresh.
            </p>
          </div>
        </main>
      </Layout>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);

    try {
      if (mode === "signup") {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { name } }, // الاسم يتخزن في user_metadata
        });
        if (signUpError) throw signUpError;

        // لو Email confirmation شغال، session هتكون null
        if (!data?.session) {
          alert("Account created. Please check your email to confirm, then login.");
          return;
        }

        window.location.href = returnTo;
      } else {
        const { data, error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (loginError) throw loginError;

        // اختياري: لو كتبت اسم وقت الـ login نعمل update بس (بدون insert)
        const user = data?.user;
        if (user && name.trim()) {
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
          <h1 style={{ marginBottom: 6 }}>
            {mode === "signup" ? "Create account" : "Login"}
          </h1>
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

            <button type="submit" disabled={busy} style={primaryBtn}>
              {busy ? "Please wait..." : mode === "signup" ? "Sign up" : "Login"}
            </button>

            <button
              type="button"
              onClick={() => setMode(mode === "signup" ? "login" : "signup")}
              style={secondaryBtn}
            >
              {mode === "signup"
                ? "Have an account? Login"
                : "New student? Create account"}
            </button>
          </form>

          <div style={{ marginTop: 14, fontSize: 13, opacity: 0.7 }}>
            Tip: Use a strong password. You can add Google login later.
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
  fontWeight: 700,
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
