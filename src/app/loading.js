import LoadingAnimation from "@/components/common/LoadingAnimation";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "3rem",
      }}
    >
      <LoadingAnimation />
    </div>
  );
}
