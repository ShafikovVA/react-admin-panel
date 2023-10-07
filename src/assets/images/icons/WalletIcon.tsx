import * as React from "react";

function WalletIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={25} fill="none" {...props}>
      <g fill="#8A92A6">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.996 8.387h-4.234c-1.97.003-3.567 1.56-3.57 3.481-.004 1.926 1.595 3.49 3.57 3.492H22v.306c0 3.36-2.036 5.346-5.483 5.346H7.484C4.036 21.012 2 19.025 2 15.666V8.35c0-3.36 2.036-5.338 5.484-5.338h9.03c3.446 0 5.482 1.978 5.482 5.338v.037zM6.74 8.379H12.39a.756.756 0 00.762-.75.757.757 0 00-.769-.742H6.74a.756.756 0 00-.762.743.756.756 0 00.762.749z"
        />
        <path
          opacity={0.4}
          d="M16.037 12.307c.21.951 1.044 1.62 1.996 1.603h3.25a.726.726 0 00.717-.734v-2.531a.728.728 0 00-.718-.735h-3.326c-1.083.004-1.958.903-1.956 2.01 0 .13.013.26.037.387z"
        />
        <circle cx={18} cy={11.91} r={1} />
      </g>
    </svg>
  );
}

const MemoWalletIcon = React.memo(WalletIcon);
export default MemoWalletIcon;
