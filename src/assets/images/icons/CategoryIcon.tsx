import * as React from "react";

function CategoryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={25} fill="none" {...props}>
      <g fill="current">
        <path
          opacity={0.4}
          d="M16.076 2.012h3.386A2.549 2.549 0 0122 4.572v3.414a2.549 2.549 0 01-2.538 2.56h-3.386a2.549 2.549 0 01-2.539-2.56V4.572a2.549 2.549 0 012.539-2.56z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.539 2.012h3.385a2.549 2.549 0 012.539 2.56v3.414a2.549 2.549 0 01-2.539 2.56H4.54A2.549 2.549 0 012 7.986V4.572a2.549 2.549 0 012.539-2.56zm0 11.465h3.385a2.549 2.549 0 012.539 2.56v3.415a2.55 2.55 0 01-2.539 2.56H4.54A2.55 2.55 0 012 19.452v-3.415a2.549 2.549 0 012.539-2.56zm14.923 0h-3.386a2.549 2.549 0 00-2.539 2.56v3.415a2.55 2.55 0 002.539 2.56h3.386A2.55 2.55 0 0022 19.452v-3.415a2.549 2.549 0 00-2.538-2.56z"
        />
      </g>
    </svg>
  );
}

const MemoCategoryIcon = React.memo(CategoryIcon);
export default MemoCategoryIcon;
