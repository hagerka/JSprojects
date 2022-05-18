const lightRadius = 30;
const rectWidth = lightRadius;
const rectHeight = 20;
const circleCenter = 50 + lightRadius;

const lighthouse = (
  <svg width="250px" height="300px">
    <g>
      <circle r={0.8 * lightRadius} cx={circleCenter} cy={circleCenter} />

      <circle
        r={lightRadius}
        cx={circleCenter}
        cy={circleCenter}
        fill="white"
        stroke="black"
      />
      <rect
        width={rectWidth}
        height={rectHeight}
        x={circleCenter - rectWidth / 2}
        y={circleCenter + rectHeight}
        fill="white"
        stroke="black"
      />
      <rect
        width={1.05 * rectWidth}
        height={rectHeight}
        x={circleCenter - (1.05 * rectWidth) / 2}
        y={circleCenter + 2 * rectHeight}
        fill="red"
        stroke="black"
      />
      <rect
        width={1.1 * rectWidth}
        height={rectHeight}
        x={circleCenter - (1.1 * rectWidth) / 2}
        y={circleCenter + 3 * rectHeight}
        fill="white"
        stroke="black"
      />
      <rect
        width={1.15 * rectWidth}
        height={rectHeight}
        x={circleCenter - (1.15 * rectWidth) / 2}
        y={circleCenter + 4 * rectHeight}
        fill="red"
        stroke="black"
      />
    </g>
  </svg>
);

ReactDOM.render(lighthouse, document.getElementById("root"));
