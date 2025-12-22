import "@/components/components.css"

export default function OverviewCard({ icon, title, count, bgClass = "" }) {
  return (
    <div className={`overview-card ${bgClass}`}>
      <div className="icon">{icon}</div>
      <h3 className="text-white">{title}</h3>
      <div className="count">{count}</div>
    </div>
  );
}
