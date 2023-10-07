import * as React from "react";

function ShieldDoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={25} fill="none" {...props}>
      <g fill="#8A92A6">
        <path
          opacity={0.4}
          d="M12.086 22.012a.781.781 0 01-.359-.087l-3.601-1.864c-1.022-.53-1.821-1.123-2.445-1.816a8.243 8.243 0 01-2.139-5.473L3.5 6.136a1.813 1.813 0 011.228-1.712l6.613-2.305c.392-.14.83-.143 1.23-.007l6.637 2.227c.743.248 1.245.93 1.25 1.695l.042 6.64a8.243 8.243 0 01-2.066 5.496c-.617.702-1.41 1.305-2.421 1.844l-3.57 1.907a.765.765 0 01-.357.09z"
        />
        <path d="M11.319 14.33a.764.764 0 01-.536-.211l-1.917-1.844a.722.722 0 01-.006-1.04.77.77 0 011.069-.006l1.379 1.326 3.367-3.32a.77.77 0 011.068-.007c.298.286.3.752.008 1.04l-3.9 3.844a.76.76 0 01-.532.219z" />
      </g>
    </svg>
  );
}

const MemoShieldDoneIcon = React.memo(ShieldDoneIcon);
export default MemoShieldDoneIcon;
