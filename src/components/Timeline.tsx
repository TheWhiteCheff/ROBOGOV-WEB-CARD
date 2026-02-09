import React from "react";
import { TimelineItem } from "../content/content";
import Card from "./Card";
import Reveal from "./Reveal";

import imgFactory from "../assets/tl_factory.webp";
import imgDrone from "../assets/tl_drone.webp";
import imgRobotarm from "../assets/tl_robot.webp";
import imgGovernance from "../assets/tl_meeting.webp";

const images = {
  factory: imgFactory,
  drone: imgDrone,
  robotarm: imgRobotarm,
  governance: imgGovernance,
} as const;

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="timeline">
      <div className="timeline__rail" aria-hidden="true" />
      <div className="timeline__grid">
        {items.map((it, idx) => (
          <Reveal key={idx} delayMs={idx * 80}>
            <Card className={`timelineCard ${it.image ? "timelineCard--media" : ""}`}> 
              <div className="timelineCard__top">
                <div className="stepBadge" aria-hidden="true">
                  <span className="stepBadge__inner">{idx + 1}</span>
                </div>
                <div className="timelineCard__titles">
                  <div className="timelineCard__title">{it.title}</div>
                  <div className="timelineCard__sub">{it.subtitle}</div>
                </div>
              </div>

              {it.image ? (
                <div
                  className="timelineCard__media"
                  style={{ backgroundImage: `url(${images[it.image]})` }}
                  role="img"
                  aria-label={`${it.title} visual`}
                />
              ) : null}

              <ul className="timelineCard__bullets">
                {it.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
