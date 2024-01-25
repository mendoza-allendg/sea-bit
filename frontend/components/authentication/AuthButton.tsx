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
import { useRegistrationApi } from '@/apis/authentication/hooks'
import { useEffect, useState } from 'react'
import type { User } from '@/apis/authentication/hooks'

export const AuthButton = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure()
  const [params, setParams] = useState<User>({
    email: undefined,
    password: undefined,
  })
  const { data, error, refetch: login } = useRegistrationApi(params)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>
      <Button variant="light" className="p-3" onClick={onOpen}>
        <Avatar size="sm" color="default" radius="full" />
        <span className="text-sm">Sign in</span>
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
              {error && <span>{error.message}</span>}
              <ModalBody>
                <Input
                  type="email"
                  label="Email"
                  variant="bordered"
                  onValueChange={(value) =>
                    setParams({ ...params, email: value })
                  }
                />
                <Input
                  type="password"
                  label="Password"
                  variant="bordered"
                  onValueChange={(value) =>
                    setParams({ ...params, password: value })
                  }
                />
                <Button color="primary" size="lg" onClick={() => login()}>
                  Continue
                </Button>
                <div className="flex w-auto flex-1 items-center justify-center">
                  <Divider className=" w-1/4" />
                  <span className="mx-4 my-4">Or Continue With</span>
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
