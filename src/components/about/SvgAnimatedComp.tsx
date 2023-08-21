import { memo, useEffect, useRef } from "react";
import styles from "@/components/about/about.module.css";
import UtilityFunction from "@/utils";

const AboutSVGComp = memo(({ completeAnimation : completeAnimationAutomatically } : { completeAnimation? : boolean }) => {
    const ref = useRef<SVGPathElement | null>(null);

    useEffect(() => {
        if(completeAnimationAutomatically) {
            return;
        }

        const isMobile = UtilityFunction.isMobileDevice();
        if (!ref.current) return;

        const length = ref.current.getTotalLength();
        let onceDrawn = false;

        // The start position of the drawing
        ref.current.style.strokeDasharray = `${length}`;

        // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
        ref.current.style.strokeDashoffset = `${length}`;

        function myFunction() {
            if (!ref.current) return;
            var scrollpercent =
                (document.body.scrollTop + document.documentElement.scrollTop) /
                (document.documentElement.scrollHeight -
                    document.documentElement.clientHeight);
            var draw = (isMobile ? 10 : 5) * length * scrollpercent;

            if (onceDrawn) {
                return;
            }

            if (draw > length) {
                onceDrawn = true;
                ref.current.style.strokeDashoffset = `0`;
                return;
            }

            ref.current.style.strokeDashoffset = `${length - draw}`;
        }

        // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
        window.addEventListener("scroll", myFunction);
    }, []);
    return (
        <svg className={styles.mySVG} x={0} y={0} viewBox="0 0 591.7 313.3">
            <path
                ref={ref}
                fill="none"
                d="M 191.9 118.2 L128 7.3 L463.8 7.3 L295.9 298 L233.2 189.5 Z"
            />
            <rect
                x="150"
                y="70.9"
                className={styles.quoteTextBG}
                width="93"
                height="82"
            ></rect>
            <rect
                x="360"
                y="70.9"
                className={styles.quoteTextBG}
                width="93"
                height="82"
            ></rect>
            <text
                x="210.2858"
                y="130.9107"
                className={`${styles.quoteText}`}
                data-svg-origin="239.28579711914062 51.51199722290039"
                transform="matrix(1,0,0,1,-60,0)"
            >
                {/* “DO WHAT YOU LOVE */}
                My Expertise
            </text>
            {/* <text
                x="-0.7142"
                y="179.7315"
                className={`${styles.quoteText} ${styles.quote2TextTop}`}
                data-svg-origin="-0.714199960231781 121.33280181884766"
                transform="matrix(1,0,0,1,0,0)"
            >
                LOVE WHAT YOU DO”
            </text> */}
            Sorry, your browser does not support inline SVG.
        </svg>
    );
});


export default AboutSVGComp;