import { useEffect, useState } from "react";

export default function Home() {
  const [screen, setScreen] = useState("splash");

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen("onboarding1");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (screen === "splash") {
    return (
      <div
        style={{
          background: "#FDF8F3",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "#E74C3C",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 60,
            color: "white",
          }}
        >
          🍔
        </div>

        <h1
          style={{
            marginTop: 30,
            color: "#D94B3D",
            fontSize: 38,
          }}
        >
          FoodieHub
        </h1>

        <p
          style={{
            marginTop: 10,
            color: "#777",
          }}
        >
          Delicious food delivered fast.
        </p>
      </div>
    );
  }

  if (screen === "onboarding1") {
    return (
      <div
        style={{
          background: "#FDF8F3",
          minHeight: "100vh",
          padding: 30,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: 320,
            borderRadius: 25,
            background: "#FFE8DD",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 120,
          }}
        >
          🍕
        </div>

        <h2
          style={{
            marginTop: 40,
            fontSize: 34,
            color: "#222",
          }}
        >
          Discover
          <br />
          Amazing Food
        </h2>

        <p
          style={{
            marginTop: 20,
            color: "#666",
            lineHeight: 1.6,
          }}
        >
          Browse hundreds of restaurants and
          discover your favourite meals.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 35,
            gap: 8,
          }}
        >
          <div
            style={{
              width: 28,
              height: 10,
              borderRadius: 20,
              background: "#D94B3D",
            }}
          />

          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#D9D9D9",
            }}
          />

          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#D9D9D9",
            }}
          />
        </div>

        <button
          onClick={() => setScreen("onboarding2")}
          style={{
            marginTop: "auto",
            background: "#D94B3D",
            color: "white",
            border: "none",
            padding: 18,
            borderRadius: 16,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Next →
        </button>

        <button
          onClick={() => setScreen("home")}
          style={{
            marginTop: 15,
            background: "transparent",
            color: "#666",
            border: "none",
            fontSize: 16,
          }}
        >
          Skip
        </button>
      </div>
    );
  }

  if (screen === "onboarding2") {
    return (
      <div className="screen center">
        <h1>🚧 Coming in P1.2</h1>
      </div>
    );
  }

  if (screen === "onboarding3") {
    return (
      <div className="screen center">
        <h1>🚧 Coming in P1.2</h1>
      </div>
    );
  }

  return (
    <div className="screen center">
      <h1>🏠 Home Screen (Coming Soon)</h1>
    </div>
  );
}
