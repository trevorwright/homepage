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
  padding: 0 12px;
  max-width: 1000px;
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
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.4);

  > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

const Skills = () => (
  <Layout>
    <Title light id="experience">
      Experience
    </Title>
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
        <h4>Highlights</h4>
        <ul>
          <li>Owner of internal design system</li>
          <li>Technical lead of mobile market initiative</li>
          <li>Resident React expert and consultant</li>
          <li>Coaching and mentoring team members across the company</li>
          <li>Providing appropriate tooling to teams for rapid execution</li>
          <li>Driving accessibility across our products</li>
        </ul>
        <h4>Technologies</h4>
        <p>
          React, Redux, JavaScript, TypeScript, Webpack, Rollup, Next.js,
          Styled-Components, SCSS, GraphQL, Node, React Native
        </p>
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
          our educator platforms. Technically lead teams through deliver along
          with facilitating cross team and department communication. I directly
          managed both engineers and other managers on a collection of teams.
        </p>
        <h4>Highlights</h4>
        <ul>
          <li>Hired and led multiple execution teams</li>
          <li>Managed short and long term technical direction</li>
          <li>Launched accelerator program</li>
          <li>Launched internal design-system</li>
          <li>Technically led rebranding the company and all products</li>
          <li>Ran internal front-end meetups</li>
          <li>Supported launch of co-op program</li>
        </ul>
        <h4>Technologies</h4>
        <p>
          React, Redux, JavaScript, TypeScript, Webpack, Rollup, Next.js,
          Styled-Components, SCSS, GraphQL, Node, BackboneJS
        </p>
      </Experience>
      <Experience
        roleTitle="Team Lead"
        employer="Prodigy Education"
        startDate="October 2017"
        endDate="December 2019"
        logo={prodigyLogo}
      >
        <p>
          Worked as the lead of a product delivery team shipping high quality
          and high impact features for our customers. The primary
          responsibilities of the role were split between writing code and
          managing the team and its members. Additionally contributed to the
          scaling of the engineering department as a whole.
        </p>
        <h4>Highlights</h4>
        <ul>
          <li>Lead the adoption of React in the company</li>
          <li>Lead of accelerator team</li>
          <li>Created an internal Front-End community</li>
          <li>Supported launch of new office location</li>
          <li>Led interviewing of engineers</li>
        </ul>
        <h4>Technologies</h4>
        <p>
          React, JavaScript, Webpack, Styled-Components, SCSS, GraphQL, Node,
          BackboneJS, PHP, Gulp
        </p>
      </Experience>
      <Experience
        roleTitle="Full Stack Developer"
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
        roleTitle="Full Stack Developer"
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
