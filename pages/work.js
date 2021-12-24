import { Container, Box, Heading } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
const Page = () => {
  return (
    <Layout>
      <Container mt={12}>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Work Experience
            </Heading>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Qpix (November 2021 - Present)
          </Heading>
          <Paragraph>
            Working on multiple projects that could be anything from e-commerce
            to software solution to an educational system and developing new
            features, fix bugs and do code reviews on a daily basis. Working in
            a fast-paced environment, and learning new things everyday.
            Implement back-end features, using nodejs, typescript and GraphQL.
            Implement dashboards and web apps using Reactjs and typescript.
            Implement Mobile apps using react native and typescript. Contribute
            in unit testing using Jest. <br /> Skills used on a daily basis:{' '}
            <br />
            TypeScript, JavaScript, NodeJs, ReactJs (NextJs), GraphQL, Jest.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Mideastsoft (August 2020 - September 2021)
          </Heading>
          <Paragraph>
            Worked on the event platform web-app (Envento), and developed new
            features, fixed bugs . Worked in an Agile-Scrum environment, and
            learned new things everyday. Implement back-end features, using php,
            nodejs. Implement admin dashboards and the web app using Reactjs and
            VueJs. Implement testing microservice for the entire project using
            nodejs and Mocha. <br /> Skills used on a daily basis: <br />
            Laravel, JavaScript, Nodejs, JQuery, ReactJs, VueJs(NuxtJs),
            RESTful, Mocha.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
