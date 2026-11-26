import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  Text,
  Stack,
  Box,
  Heading
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box align="center" opacity={0.4} fontSize="sm">
        <Heading>
          <div style={{ display: 'inline-flex' }}>
            <a
              href="https://github.com/devCaldas-dev"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub />
              <Heading variant="caption">Dev Caldas</Heading>
            </a>
          </div>
        </Heading>
      </Box>
    </>
  )
}

export default Footer
