import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef(null);

  const scrollSmooth = useCallback((left) => {
    carouselRef.current?.scrollTo({ left, behavior: "smooth" });
  }, []);

  const handleClick = (e, i) => {
    e.preventDefault();
    const node = carouselRef.current;
    if (!node) return;
    const left = Math.floor(node.scrollWidth * 0.7 * (i / TOTAL));
    scrollSmooth(left);
  };

  const handleScroll = () => {
    const node = carouselRef.current;
    if (!node) return;
    const index = Math.round(
      (node.scrollLeft / (node.scrollWidth * 0.7)) * TOTAL
    );
    setActiveItem(index);
  };

  useEffect(() => {
    const onResize = () => scrollSmooth(0);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [scrollSmooth]);

  return (
    <Section id="about" aria-labelledby="about-title">
      <SectionTitle id="about-title">About Me</SectionTitle>
      <SectionText>
        Senior Software Engineer focused on building reliable, scalable, and
        well-designed systems. I work across languages, runtimes, and
        architectures—designing clean APIs, strong data models, resilient
        distributed workflows, and infrastructure that behaves predictably under
        load. My approach is pragmatic, performance-oriented, and adaptable to
        any tech stack.
      </SectionText>

      <CarouselContainer
        ref={carouselRef}
        onScroll={handleScroll}
        aria-label="Timeline"
      >
        {TimeLineData.map((item, index) => (
          <CarouselMobileScrollNode key={index} final={index === TOTAL - 1}>
            <CarouselItem
              index={index}
              id={`carousel__item-${index}`}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              role="button"
              tabIndex={0}
              aria-label={`Go to year ${item.year}`}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && handleClick(e, index)
              }
            >
              <CarouselItemTitle>
                {item.year}
                <CarouselItemImg
                  width="208"
                  height="6"
                  viewBox="0 0 208 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                    fill="url(#paint0_linear)"
                    fillOpacity="0.33"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="0"
                      y1="0.5"
                      x2="208"
                      y2="0.500295"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop
                        offset="0.79478"
                        stopColor="white"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </CarouselItemImg>
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
      </CarouselContainer>

      <CarouselButtons role="tablist" aria-label="Timeline navigation">
        {Array.from({ length: TOTAL }).map((_, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
            aria-label={`Slide ${index + 1}`}
            aria-pressed={activeItem === index}
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>

      <SectionDivider />
    </Section>
  );
};

export default Timeline;
