export default function Splash() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#FDF8F3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: 130,
          height: 130,
          borderRadius: "50%",
          background: "#D94B3D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 12px 30px rgba(217,75,61,.25)",
        }}
      >
        <span style={{ fontSize: 62 }}>🍔</span>
      </div>

      <h1
        style={{
          marginTop: 30,
          fontSize: 40,
          color: "#D94B3D",
          fontWeight: "700",
        }}
      >
        FoodieHub
      </h1>

      <p
        style={{
          color: "#777",
          marginTop: 12,
          fontSize: 17,
        }}
      >
        Fresh food. Fast delivery.
      </p>
    </div>
  );
}
