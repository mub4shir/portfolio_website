import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: "5+", text: "Years in backend" },
  { number: "600+", text: "REST APIs shipped" },
  { number: "40%", text: "Faster data processing (Mongo agg)" },
  { number: "30%", text: "Better app responsiveness" },
  { number: "90%", text: "Ops workload reduced" },
  { number: "50%", text: "Processing efficiency gain" },
  { number: "20%", text: "Higher user engagement" },
  { number: "99.9%", text: "Data consistency achieved" },
  { number: "10+", text: "Open-source tools" },
  { number: "2", text: "Companies: Lythouse, Radical Minds" },
];

const Acomplishments = () => (
  <Section id="stats" aria-labelledby="accomp-title">
    <SectionTitle id="accomp-title">Impact in Numbers</SectionTitle>
    <Boxes as="ul" role="list">
      {data.map(({ number, text }, i) => (
        <Box as="li" key={i} aria-label={`${number} ${text}`}>
          <BoxNum>{number}</BoxNum>
          <BoxText>{text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
