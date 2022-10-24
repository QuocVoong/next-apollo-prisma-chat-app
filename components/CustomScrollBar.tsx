import React, { useCallback } from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const CustomScrollbar = React.forwardRef(
  ({ children, className, style, ...props }, ref) => {
    const refSetter = useCallback((scrollbarsRef) => {
      if (scrollbarsRef) {
        let customViewport = scrollbarsRef.osInstance().getElements().viewport;
        for (const key in props) {
          if (!props.hasOwnProperty(key)) {
            continue;
          }
          customViewport.setAttribute(key, props[key])
        }
        ref.current = customViewport;
      }
    }, [ref]);

    return (
      <OverlayScrollbarsComponent
        ref={refSetter}
        className={className}
        style={style}
        options={{ scrollbars: { autoHide: "scroll" } }}
      >
        {children}
      </OverlayScrollbarsComponent>
    );
  }
);


export default CustomScrollbar;
