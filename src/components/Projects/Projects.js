import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Tools & Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((t, i) => (
                <Tag key={i}>{t}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {visit && <ExternalLinks href={visit}>Demo</ExternalLinks>}
            {source && <ExternalLinks href={source}>Code</ExternalLinks>}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
