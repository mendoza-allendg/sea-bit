type Props = {
  children: React.ReactNode
}

export const MainTitle = ({ children }: Props) => {
  return <h1 className="text-2xl font-bold">{children}</h1>
}
