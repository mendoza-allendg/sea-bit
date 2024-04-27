import { SectionTitle } from '@/components/shared/typography'
import DefaultLayout from '@/layouts/default'
import {
  Accordion,
  AccordionItem,
  BreadcrumbItem,
  Breadcrumbs,
  Input,
} from '@nextui-org/react'
import { UPPER_PROFILE_COMPONENTS } from '@/pages/profile/ProfileComponents/UserInformation'
import { useState } from 'react';

export default function ProfilePage() {

  const [profileComponents, setProfileComponents] = useState(UPPER_PROFILE_COMPONENTS);
  
  const handleChange = (index, value) => {
    const updatedComponents = profileComponents.map((comp, i) => {
      if (i === index) {
        return { ...comp, info: value }; // Assuming you want to change 'info'
      }
      return comp;
    });
    setProfileComponents(updatedComponents);
  };

  return (
    <DefaultLayout>
      <section className="h-full w-full">
        <div className="xl:px-35 container mx-auto flex w-full flex-col items-start justify-center rounded-lg p-5 lg:px-20 2xl:px-36">
          <div className="container mx-auto mb-10 mt-4 flex h-auto w-full flex-col items-start rounded-lg px-4 text-slate-950 2xl:px-20">
            <Breadcrumbs className="mb-3">
              <BreadcrumbItem>Account</BreadcrumbItem>
              <BreadcrumbItem>Personal Info</BreadcrumbItem>
            </Breadcrumbs>
            <SectionTitle text="Personal info"></SectionTitle>
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
                    <Input type={comp.type} label={comp.name} defaultValue={comp.info} onChange={(e) => handleChange(i, e.target.value)}/>
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
