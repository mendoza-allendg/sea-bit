import { BreadCrumb } from '@/components/account/BreadCrumb'
import { MainTitle } from '@/components/shared/typography'
import AccountLayout from '@/layouts/account'
import { LegalName } from '@/components/account/LegalName'
import { PreferredName } from '@/components/account/PreferredName'
import { EmailAddress } from '@/components/account/EmailAddress'
import { PhoneNumber } from '@/components/account/PhoneNumber'
import { Address } from '@/components/account/Address'
import { EmergencyContact } from '@/components/account/EmergencyContact'

export const pageTitle = 'Personal Info'

export default function IndexPage() {
  return (
    <AccountLayout>
      <section>
        <BreadCrumb />
        <div className="pt-2 font-black">
          <MainTitle>{pageTitle}</MainTitle>
        </div>
      </section>
      <section className="mt-6 pt-6">
        <div>
          <LegalName />
        </div>
        <div>
          <PreferredName />
        </div>
        <div>
          <EmailAddress />
        </div>
        <div>
          <PhoneNumber />
        </div>
        <div>
          <Address />
        </div>
        <div>
          <EmergencyContact />
        </div>
      </section>
    </AccountLayout>
  )
}
