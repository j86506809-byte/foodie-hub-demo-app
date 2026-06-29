export default function Onboarding2({ onNext, onBack, onSkip }) {
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
          background: "linear-gradient(180deg,#FFF5ED,#FFE4D2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "#D94B3D",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 90,
          }}
        >
          🛵
        </div>

        <span
          style={{
            position: "absolute",
            top: 30,
            right: 35,
            fontSize: 28,
          }}
        >
          📍
        </span>

        <span
          style={{
            position: "absolute",
            bottom: 35,
            left: 30,
            fontSize: 28,
          }}
        >
          🍟
        </span>
      </div>

      <h1
        style={{
          marginTop: 40,
          fontSize: 34,
          lineHeight: 1.2,
        }}
      >
        Fast
        <br />
        Doorstep Delivery
      </h1>

      <p
        style={{
          marginTop: 18,
          color: "#666",
          lineHeight: 1.7,
        }}
      >
        Track your order in real time and get your
        favourite meals delivered fresh and hot.
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
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#D6D6D6",
          }}
        />

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
      </div>

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          gap: 12,
        }}
      >
        <button
          onClick={onBack}
          className="secondary-btn"
        >
          Back
        </button>

        <button
          onClick={onNext}
          className="primary-btn"
        >
          Next
        </button>
      </div>

      <button
        onClick={onSkip}
        style={{
          marginTop: 15,
          background: "transparent",
          color: "#777",
          fontSize: 16,
        }}
      >
        Skip
      </button>
    </div>
  );
}
