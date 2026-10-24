import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Mineral } from "@/lib/content";

export function MineralCard({ mineral }: { mineral: Mineral }) {
  return (
    <Link href={`/minerals/${mineral.slug}`} className="mineral-card">
      <div
        className="mineral-image"
        style={{
          backgroundImage: `linear-gradient(180deg, transparent 40%, rgba(9,10,9,.7)), url("${mineral.image}")`,
        }}
      >
        <span className="card-index">{mineral.index} / 06</span>
        <span className="card-arrow">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="mineral-body">
        <div className="mineral-meta">
          <span>{mineral.scientific.split(" · ")[0]}</span>
          <span>{mineral.applications[0]}</span>
        </div>
        <h3>{mineral.name}</h3>
        <p>{mineral.description}</p>
        <span className="text-link">
          View mineral <ArrowUpRight size={13} />
        </span>
      </div>
    </Link>
  );
}