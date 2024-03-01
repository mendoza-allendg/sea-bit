import { SectionTitle } from '../typography'

type Props = {
  title: string
  children: React.ReactNode
}

export const SectionBase = ({ title, children }: Props) => {
  return (
    <div className="flex w-full flex-col gap-4 py-5">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  )
}
