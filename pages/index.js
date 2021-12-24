import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  SimpleGrid,
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
  IoLogoFacebook,
  IoLogoDiscord
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
          Hello, I am a full-stack developer based in Egypt!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Abdelrahman Abdelhakim
            </Heading>
            <p>Innovative Engineer (Developer / Athlete)</p>
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
            objectFit="cover"
            alt="profile image"
            src="https://www.linkpicture.com/q/profile_2.jpeg"
          />
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            I am a software engineer, and started coding at university in 2014
            by writing the famous Hello World in C++. I am eager to always learn
            new things in tech, and increase my problem solving skills. I also
            happen to be a pro-athlete, and an Olympian in badminton. I love
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
            JavaScript - TypeScript - NodeJs - ReactJS (NextJs) - VueJS (NuxtJs)
            - PHP (Laravel) - JQuery - Unit testing (Mocha - Jest) - Github -
            GitLab - Jira - Clickup
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
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          <Paragraph>
            <Link href="https://github.com/AbdelrahmanHakim">Programming</Link>,
            Photography, Videography,{' '}
            <Link href="https://en.wikipedia.org/wiki/Abdelrahman_Abdelhakim">
              Badminton
            </Link>
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Social links:
          </Heading>
          <List>
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
            <ListItem>
              <Link
                href="https://www.facebook.com/abdelrhman.hakim.96/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoFacebook} />}
                >
                  @Abdelrahman Abdelhakim
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
