import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaApple } from 'react-icons/fa'
// import { useRegistrationApi } from '@/apis/authentication/hooks'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string(),
})

export const AuthButton = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
    },
  })
  // const { error, mutate } = useRegistrationApi()

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Log in</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              <h3>Create an account</h3>
            </DialogTitle>
            <DialogDescription>
              Enter your email below to create an account
            </DialogDescription>
          </DialogHeader>
          <div>
            <Form {...form}>
              <form
                onSubmit={() => console.log('submitted')}
                className="flex flex-col gap-4"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="sample@email.com" {...field} />
                      </FormControl>
                      {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Continue
                </Button>
              </form>
            </Form>
            <div className="my-4 flex w-auto flex-1 items-center justify-center">
              <Separator className=" w-1/4" />
              <p className="text-xs text-muted-foreground">OR CONTINUE WITH</p>
              <Separator className=" w-1/4" />
            </div>
            <div className="flex w-auto flex-row justify-center gap-2">
              <Button color="default" size="lg" variant="outline">
                <FcGoogle size={20} className="mr-2" />
              </Button>
              <Button color="default" size="lg" variant="outline">
                <FaApple size={20} className="mr-2" />
              </Button>
              <Button color="default" size="lg" variant="outline">
                <FaFacebook size={20} className="mr-2" color="#0866FF" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
