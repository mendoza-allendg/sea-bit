import { SectionTitle } from '@/components/shared/typography'
import DefaultLayout from '@/layouts/default'
import {
  Accordion,
  AccordionItem,
  BreadcrumbItem,
  Breadcrumbs,
  Input,
} from '@nextui-org/react'

const user_infos = [
  {
    firstname: 'Kim Allen Joseph',
    lastname: 'Lazo',
    email: 'kajlazo@pasoketits.com',
    mobile: '09064595820',
    password: "kapagako'ynagiisamadalasakongnagbabate",
  },
]

function maskPassword(password: string) {
  const truncatedPassword = password.slice(0, 15)
  return '•'.repeat(truncatedPassword.length)
}

const fullname = `${user_infos[0].firstname} ${user_infos[0].lastname}`

const UPPER_PROFILE_COMPONENTS = [
  {
    name: 'Name',
    info: fullname,
    type: 'name',
  },
  {
    name: 'Email',
    info: user_infos[0].email,
    type: 'email',
  },
  {
    name: 'Phone Number',
    info: user_infos[0].mobile,
    type: 'number',
  },
  {
    name: 'Password',
    info: maskPassword(user_infos[0].password),
    type: 'password',
  },
]

export default function ProfilePage() {
  return (
    <DefaultLayout>
      <section className="h-full w-full">
        <div className="xl:px-35 container mx-auto flex w-full flex-col items-start justify-center rounded-lg p-5 lg:px-20 2xl:px-36">
          <div className="container mx-auto mb-10 mt-4 flex h-auto w-full flex-col items-start rounded-lg px-4 text-slate-950 2xl:px-20">
            <Breadcrumbs className="mb-3">
              <BreadcrumbItem>Account</BreadcrumbItem>
              <BreadcrumbItem>Personal Info</BreadcrumbItem>
            </Breadcrumbs>
            <SectionTitle text={'Personal info'}></SectionTitle>
          </div>

          <div className="container mx-auto mb-9 flex h-full w-full flex-col items-start gap-3 rounded-lg px-4 text-slate-950 2xl:px-20">
            {UPPER_PROFILE_COMPONENTS.map((comp, i) => (
              <Accordion isCompact>
                <AccordionItem
                  className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-4 shadow-md delay-75 hover:drop-shadow-xl"
                  key={i}
                  title={comp.name}
                  subtitle={comp.info}
                >
                  <div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
                    <Input type={comp.type} label={comp.name} />
                  </div>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
