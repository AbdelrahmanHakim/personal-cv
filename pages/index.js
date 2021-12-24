import { Container, Box, Heading } from '@chakra-ui/react'
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I am a full-stack developer based in Egypt!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Abdelrahman Abdelhakim
          </Heading>
          <p>Innovative Engineer (Developer / Athelete)</p>
        </Box>
      </Box>
    </Container>
  )
}
export default Page
