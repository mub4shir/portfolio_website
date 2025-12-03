import React from "react";
import { DiReact, DiFirebase, DiJava } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  IconWrap,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I design and build backend-heavy, low-latency, production-grade systems.
      My work spans distributed services, data modeling, ETL, cloud infra, and
      performance-oriented backend engineering.
    </SectionText>

    <List>
      {/* Backend & Systems */}
      <ListItem>
        <IconWrap>
          <DiFirebase size="2.2rem" />
        </IconWrap>
        <ListContainer>
          <ListTitle>Backend & Systems</ListTitle>
          <ListParagraph>
            Node.js, Rust, Go, Java; microservices, REST/GraphQL, low-latency
            systems, distributed systems, multithreading, sockets, queues,
            caching, API design, system architecture.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Databases & Infra */}
      <ListItem>
        <IconWrap>
          <DiJava size="2.2rem" />
        </IconWrap>
        <ListContainer>
          <ListTitle>Data & Infrastructure</ListTitle>
          <ListParagraph>
            PostgreSQL, MongoDB (adv. aggregation), Redis, Elasticsearch; AWS,
            Lambda, Azure, Docker, CI/CD, Linux systems, monitoring +
            observability.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Frontend */}
      <ListItem>
        <IconWrap>
          <DiReact size="2.2rem" />
        </IconWrap>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            React, Next.js, TypeScript, Tailwind, Styled-Components, performance
            tuning, accessibility.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
