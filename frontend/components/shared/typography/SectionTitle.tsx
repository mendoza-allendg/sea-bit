type Props = {
  children: React.ReactNode
}

export const SectionTitle = ({ children }: Props) => {
  return <h1 className="text-2xl font-semibold">{children}</h1>
}
