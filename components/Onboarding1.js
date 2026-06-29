export default function Onboarding1({ onNext, onSkip }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FDF8F3",
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Illustration */}
      <div
        style={{
          height: 320,
          borderRadius: 30,
          background:
            "linear-gradient(180deg,#FFF4EC 0%,#FFE6D6 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "#D94B3D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 90,
            color: "#fff",
          }}
        >
          🍕
        </div>

        <div
          style={{
            position: "absolute",
            top: 25,
            left: 25,
            fontSize: 28,
          }}
        >
          🍔
        </div>

        <div
          style={{
            position: "absolute",
            right: 30,
            bottom: 30,
            fontSize: 30,
          }}
        >
          🥤
        </div>
      </div>

      {/* Title */}
      <h1
        style={{
          marginTop: 40,
          fontSize: 34,
          lineHeight: 1.2,
          color: "#222",
          fontWeight: 700,
        }}
      >
        Discover
        <br />
        Amazing Food
      </h1>

      {/* Description */}
      <p
        style={{
          marginTop: 18,
          color: "#666",
          fontSize: 16,
          lineHeight: 1.7,
        }}
      >
        Browse restaurants, discover delicious meals,
        and order your favorites with just a few taps.
      </p>

      {/* Progress */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginTop: 35,
        }}
      >
        <div
          style={{
            width: 30,
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
            background: "#D6D6D6",
          }}
        />

        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#D6D6D6",
          }}
        />
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "auto" }}>
        <button
          onClick={onNext}
          className="primary-btn"
        >
          Next →
        </button>

        <button
          onClick={onSkip}
          style={{
            width: "100%",
            marginTop: 15,
            background: "transparent",
            color: "#777",
            fontSize: 16,
          }}
        >
          Skip
        </button>
      </div>
    </div>
  );
}
