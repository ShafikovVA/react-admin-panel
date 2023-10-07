import * as React from "react";

function DocumentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={25} fill="none" {...props}>
      <g fill="current">
        <path
          opacity={0.4}
          d="M16.191 2.012H7.81C4.77 2.012 3 3.792 3 6.842v10.33c0 3.1 1.77 4.84 4.81 4.84h8.381c3.089 0 4.809-1.74 4.809-4.84V6.842c0-3.05-1.72-4.83-4.809-4.83z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.08 6.66v.01a.78.78 0 000 1.56h2.99c.43 0 .78-.35.78-.79a.781.781 0 00-.78-.78H8.08zm7.84 6.09H8.08a.78.78 0 010-1.56h7.84a.781.781 0 010 1.561zm0 4.57H8.08c-.3.04-.59-.11-.75-.36a.795.795 0 01.75-1.21h7.84c.4.04.7.38.7.79 0 .4-.3.74-.7.78z"
        />
      </g>
    </svg>
  );
}

const MemoDocumentIcon = React.memo(DocumentIcon);
export default MemoDocumentIcon;
