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
import { useForm, Controller } from 'react-hook-form'

export const AuthButton = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { onOpen, isOpen, onOpenChange } = useDisclosure()

  const { error, mutate } = useRegistrationApi()

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
                <Controller
                  name="email"
                  control={control}
                  // rules={{
                  //   minLength: {
                  //     value: 6,
                  //     message: 'FUCK THE POLICE'
                  //   }
                  // }}
                  render={({ field }) => (
                    <Input
                      type="email"
                      label="Email"
                      variant="bordered"
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="password"
                      label="password"
                      variant="bordered"
                      {...field}
                    />
                  )}
                />
                <Button
                  color="primary"
                  size="lg"
                  onClick={handleSubmit((data) => mutate(data))}
                >
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
