const ArrowAsset = ({ className = 'stroke-orange-500' }: { className?: string }) => (
  <svg
    width="85"
    height="63"
    viewBox="0 -15 85 78"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Line Part */}
    <path
      d="M2.25586 3.29321C2.79439 1.13908 17.1155 2.49232 18.8077 2.49232C32.2449 2.49232 45.6821 2.49232 59.1193 2.49232C67.1282 2.49232 75.1372 2.49232 83.1461 2.49232"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Arrowhead Part */}
    <path
      d="M1.91553 1.5C4.66513 4.08786 16.4558 15.8865 19.3572 18.3263C20.9326 19.6511 22.9708 23.367 25.1414 23.4876C27.2519 23.6049 30.5828 22.8778 32.1715 24.4665C33.3705 25.6655 30.3333 26.6641 29.7688 27.0472C24.675 30.5037 20.202 35.764 16.5986 40.6623C12.2817 46.5305 8.3599 53.3463 3.51731 58.7269C3.1956 59.0844 1.91553 61.3623 1.91553 60.3287"
      strokeWidth="3"
      strokeLinecap="round"
      transform="translate(54, -23.5) rotate(0)"
    />
  </svg>
);

export default ArrowAsset;
