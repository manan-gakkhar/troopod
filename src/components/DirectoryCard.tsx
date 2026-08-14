import React, { useRef, useState } from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

export interface DirectoryItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
  url: string;
}

interface DirectoryCardProps {
  item: DirectoryItem;
}

export function DirectoryCard({ item }: DirectoryCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const Icon = item.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  return (
    <a
      href={item.url}
      className="directory-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      <div className="card-header">
        <div className="card-icon">
          <Icon size={24} />
        </div>
        <h3 className="card-title">{item.title}</h3>
      </div>
      <p className="card-description">{item.description}</p>
      <div className="card-footer">
        <span className="card-tag">{item.tag}</span>
        <span className="card-action">
          Explore <ArrowRight size={16} />
        </span>
      </div>
    </a>
  );
}
