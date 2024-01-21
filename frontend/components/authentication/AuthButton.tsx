import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  Button,
  Avatar,
  Input,
  Divider,
} from '@nextui-org/react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaApple } from 'react-icons/fa'

export const AuthButton = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button variant="light" className="p-3" onClick={onOpen}>
        <Avatar size="sm" color="default" radius="full" />
        <text className="text-sm">Sign in</text>
      </Button>
      <Modal
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="mx-3"
      >
        <ModalContent>
          {
            <>
              <ModalHeader className="flex flex-col gap-1">Sign In</ModalHeader>
              <ModalBody>
                <Input type="email" label="Email" variant="bordered" />
                <Input type="password" label="Password" variant="bordered" />
                <Button color="primary" size="lg">
                  Continue
                </Button>
                <div className="flex items-center  justify-center flex-1 w-auto ">
                  <Divider className=" w-1/4" />
                  <text className="my-4 mx-4">Or Continue With</text>
                  <Divider className=" w-1/4" />
                </div>
                <Button
                  color="default"
                  size="lg"
                  variant="ghost"
                  startContent={<FcGoogle />}
                >
                  Google
                </Button>
                <Button
                  color="default"
                  size="lg"
                  variant="ghost"
                  startContent={<FaFacebook color="#0866FF" />}
                >
                  Facebook
                </Button>
                <Button
                  color="default"
                  size="lg"
                  variant="ghost"
                  startContent={<FaApple />}
                >
                  Apple
                </Button>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          }
        </ModalContent>
      </Modal>
    </>
  )
}
