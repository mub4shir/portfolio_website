import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Tagline, MonoLine, Caret, CTAGroup } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <Tagline>
        Software Engineer • Systems Builder • Security Engineering
      </Tagline>

      <SectionTitle main center>
        Build fast. Ship safely.
        <br />
        Scale predictably.
      </SectionTitle>

      <SectionText>
        I design backend-heavy, low-latency systems: clean APIs, solid data
        models, and resilient infra. Current stack: TypeScript, Node.js,
        PostgreSQL, Redis, AWS/Lambda, Docker plus React/Next.js when needed.
      </SectionText>

      <MonoLine>
        ~/workspaces/mubashir <Caret>|</Caret> deploy --prod
      </MonoLine>

      <CTAGroup>
        <Button as="a" href="#projects" aria-label="View Projects">
          View Projects
        </Button>

        {/* External links shouldn’t use Next.js <Link> */}
        <Button
          as="a"
          href="https://github.com/mub4shir"
          target="_blank"
          rel="noopener"
          aria-label="Open GitHub"
          alt
        >
          GitHub
        </Button>

        {/* Internal navigation uses <Link> with a span/button surface */}
        <Link href="#about">
          <Button as="span" aria-label="About Me">
            About
          </Button>
        </Link>
      </CTAGroup>
    </LeftSection>
  </Section>
);

export default Hero;
