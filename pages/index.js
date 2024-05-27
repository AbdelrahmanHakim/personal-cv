import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  ListItem,
  List,
  Icon
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoChrome,
  IoLogoLinkedin
} from 'react-icons/io5'
const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          mt={12}
          align="center"
        >
          Hello, I am a Software Engineer based in Tallinn, Estonia!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Abdelrahman Abdelhakim
            </Heading>
            <p>Innovative Engineer</p>
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 2, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="150px"
            display="inline-block"
            borderRadius="full"
            boxSize="150px"
            paddingBottom="2px"
            objectFit="cover"
            alt="profile image"
            src="https://i.imgur.com/7ohLTuc.jpg"
          />
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            As a software engineer at Microsoft, I work with cutting-edge
            technologies and collaborate with talented teams to create
            innovative solutions for various domains. I joined Microsoft in
            August 2023, after working as a software engineer at Entirebody and
            qpix, where I developed and deployed web applications using Node.js,
            MongoDB, and Git. I have a passion for learning new things in tech
            and improving my problem-solving skills, which I cultivated during
            my academic journey. I completed two bachelor degrees in computer
            science and software engineering from London South Bank University
            and The British University in Egypt, respectively, in 2018. I also
            obtained multiple certifications in JavaScript, web development, and
            the MERN stack from online platforms such as SoloLearn and Udemy. In
            addition to my technical skills, I have a strong work ethic, a
            positive attitude, and a pro-athlete mindset. I always strive to
            deliver high-quality results, challenge myself, and grow as a
            professional. I am eager to contribute to Microsoft vision and
            mission, and to make an impact in the tech industry. I love
            programming, videography, photography and badminton. <br />
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/work">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Work Experience
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h1" variant="section-title">
            Skills{' '}
          </Heading>
          <Paragraph>
            C# - .net - JavaScript - TypeScript - NodeJs - ReactJS - React
            Native - PHP (Laravel) - JQuery - Unit testing - Functional Testing
            - Github - GitLab - Jira
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in Cairo, Egypt
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Started Univeristy (British University in Egypt) majoring in
            Software Engineering
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Graduated from Univeristy (British University in Egypt) majoring in
            Software Engineering
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Freelance work. Strengthen my web development skills.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Started working for Mideastsoft.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Started working for QPIX.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Started working for Entirebody.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Started working for Microsoft.
          </BioSection>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Social links:
          </Heading>
          <List>
            <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoChrome} />}
              >
                abdelrahman.abdelhakim@outlook.com
              </Button>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/AbdelrahmanHakim" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @AbdelrahmanHakim
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/abdelrahman-abdelhakim-961402163/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Abdelrahman Abdelhakim
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/abdelrahman_hakim/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @abdelrahman_hakim
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
