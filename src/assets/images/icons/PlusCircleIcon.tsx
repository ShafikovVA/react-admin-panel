import * as React from "react";

function PlusCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="currentColor"
      className="prefix__bi prefix__bi-plus-circle"
      {...props}
    >
      <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
      <path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z" />
    </svg>
  );
}

const MemoPlusCircleIcon = React.memo(PlusCircleIcon);
export default MemoPlusCircleIcon;
