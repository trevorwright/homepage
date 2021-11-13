import styled from 'styled-components';
import Title from '../Title';
import Experience from './Experience';
import prodigyLogo from '../../public/images/prodigy-logo.png';
import abelsoftLogo from '../../public/images/abelsoft.jpg';
import media from '../../styles/media';

const Layout = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  margin-top: -180px;
  padding: 0 8px;
  max-width: 800px;
  margin-bottom: 44px;

  ${media.small} {
    padding: 0 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.4);

  > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

const Skills = () => (
  <Layout>
    <Title light>Experience</Title>
    <Container>
      <Experience
        roleTitle="Front-End Architect"
        employer="Prodigy Education"
        startDate="June 2021"
        endDate="Current"
        logo={prodigyLogo}
      >
        <p>
          Working with the architecture team to develop broader technical
          direction across the company. We ensure secure and scalable solutions
          as well as work to set standards and best practices all our products.
        </p>
        <h4>Internal Design System</h4>
        <ul>
          <li>Owner of the system</li>
          <li>Being the resident React expert</li>
          <li>Coaching and mentoring team members across the company</li>
          <li>
            Ensuring a light weight and highly composable component library
          </li>
          <li>Providing appropriate tooling to teams for rapid execution</li>
          <li>Driving accessibility across our products</li>
          <li>Building a inner source community around the design-system</li>
        </ul>
      </Experience>
      <Experience
        roleTitle="Sr. Engineering Manager"
        employer="Prodigy Education"
        startDate="December 2019"
        endDate="June 2021"
        logo={prodigyLogo}
      >
        <p>
          Worked closely with product and design leads to set the direction of
          our educator platforms by setting direction, prioritization, planning
          and execution. Lead up to 4 product teams in a technical along with
          people management which included managing both individual contributors
          and other managers.
        </p>
        <h4>Key highlights</h4>
        <ul>
          <li>Technically led rebranding the company and all products</li>
          <li>Launched internal design-system</li>
          <li>Supported launch of co-op program</li>
          <li>Launched accelerator program</li>
          <li>Ran internal front-end meetups</li>
        </ul>
      </Experience>
      <Experience
        roleTitle="Team Lead"
        employer="Prodigy Education"
        startDate="October 2017"
        endDate="December 2019"
        logo={prodigyLogo}
      >
        <p>
          Working as apart of a team to continually deliver high quality and
          high impact features for our customers using modern technologies such
          as React, Styled-Components, Webpack, Babel, GraphQL and Apollo.
        </p>
        <p>
          Leading the transition of products from BackboneJS to React along with
          front-end initiatives including patterns, best practices and team
          education.
        </p>
        <p>
          Managing direct reports with communication, coaching, mentorship,
          career development, regular 1 on 1 meetings and performance reviews.
        </p>
      </Experience>
      <Experience
        roleTitle="Full Stack Web Developer"
        employer="Prodigy Education"
        startDate="February 2017"
        endDate="October 2017"
        logo={prodigyLogo}
      >
        <p>
          Worked with a team to develop a variety of front-end features for
          teacher and parent single page application experiences using
          BackboneJS, Handlebars, jQuery, SASS, and PHP. Developed backend
          features in micro services with technologies such as NodeJS, SQL and
          DynamoDB.
        </p>
        <p>
          Worked as the Scrum Master for the team keeping track and removing any
          blockers the team faced. Ran all scrum related ceremonies including
          sprint planning, retrospective and review.
        </p>
      </Experience>
      <Experience
        roleTitle="Full Stack Applications Developer"
        employer="ABELSoft"
        startDate="May 2011"
        endDate="February 2017"
        logo={abelsoftLogo}
      >
        <p>
          Started and worked as a lead developer on the redesign projects of the
          two flagship products. Led efforts to select new technologies and
          define best practices in the code base.
        </p>
        <p>
          Developed desktop solutions for both Medical and Dental products with
          Microsoft technologies (C#, C++, WPF, MS SQL). Kept team organized and
          on track with project tasks. Handled bugs as well as customer issues
          and requests.
        </p>
      </Experience>
    </Container>
  </Layout>
);

export default Skills;
