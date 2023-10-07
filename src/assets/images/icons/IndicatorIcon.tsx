import * as React from "react";

function IndicatorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={25} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.586 12.012l-4.293 4.293a1 1 0 101.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414l4.293 4.293z"
        fill="current"
      />
    </svg>
  );
}

const MemoIndicatorIcon = React.memo(IndicatorIcon);
export default MemoIndicatorIcon;
