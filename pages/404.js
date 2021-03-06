import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container mt={12}>
      <Heading as="h1">Not Found</Heading>
      <Text>The page you are looking for is not found</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return To Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}
export default NotFound
