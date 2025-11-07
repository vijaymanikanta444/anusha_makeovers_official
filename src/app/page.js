import { TypeWriter } from "@/components";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#fff",
        color: "#000",
        fontSize: "24px",
      }}
    >
      <TypeWriter text={"Hi Anusha 👋"} repeat />
    </div>
  );
}
