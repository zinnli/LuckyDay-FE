import React from "react";
import ReactJoyride from "react-joyride";

import TourTooltip from "./tourTooltip/TourTooltip";

export default function ProductTour(props: any) {
  return (
    <ReactJoyride
      showProgress={true}
      continuous={false}
      spotlightClicks={true}
      tooltipComponent={TourTooltip}
      styles={{
        options: {
          zIndex: 10000,
        },
      }}
      {...props}
    />
  );
}
