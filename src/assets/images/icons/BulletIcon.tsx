import * as React from "react";

function BulletIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={25} fill="none" {...props}>
      <circle cx={12} cy={12} r={5} fill="current" />
    </svg>
  );
}

const MemoBulletIcon = React.memo(BulletIcon);
export default MemoBulletIcon;
