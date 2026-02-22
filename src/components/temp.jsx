import { useState } from "react";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

export default function Login({ setShowLogin }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {/* ✅ MODAL BACKGROUND */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999
      }}>

        {/* ❌ CLOSE BUTTON */}
        <button
          onClick={() => setShowLogin(false)}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            fontSize: "20px",
            color: "#fff",
            background: "none",
            border: "none",
            cursor: "pointer"
          }}
        >
          ✖
        </button>

        {/* MAIN CARD */}
        <div style={{
          width: "900px",
          maxWidth: "95%",
          background: "#111113",
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column"
        }}>

          {/* NAV */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 30px",
            color: "#11139a"
          }}>
            <h3>Rentora Account</h3>
          </div>

          {/* MAIN */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "50px",
            gap: "40px",
            flexWrap: "wrap"
          }}>

            {/* LEFT */}
            <div style={{ color: "#fff", flex: 1 }}>
              <h1 style={{ fontSize: "60px", fontWeight: "800" }}>LOGIN</h1>

              <p style={{ color: "#888", marginTop: "10px" }}>
                Hey welcome back!<br />
                We hope you had a great day
              </p>

              <button style={{
                marginTop: "20px",
                padding: "12px 20px",
                borderRadius: "50px",
                border: "1px solid #444",
                background: "transparent",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer"
              }}>
                <GoogleIcon />
                Login with Google
              </button>
            </div>

            {/* RIGHT */}
            <div style={{
              background: "rgba(255,255,255,0.08)",
              padding: "30px",
              borderRadius: "20px",
              width: "350px",
              color: "#fff"
            }}>

              <div style={{ marginBottom: "15px" }}>
                <label>E-Mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    borderRadius: "20px",
                    border: "none",
                    background: "rgba(255,255,255,0.1)",
                    color: "#fff"
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    borderRadius: "20px",
                    border: "none",
                    background: "rgba(255,255,255,0.1)",
                    color: "#fff"
                  }}
                />
              </div>

              <button style={{
                width: "100%",
                padding: "12px",
                borderRadius: "30px",
                background: "#7c75f5",
                color: "#fff",
                border: "none",
                cursor: "pointer"
              }}>
                LOGIN
              </button>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}