type Props = {
  text: string
}

export const SectionTitle = ({ text }: Props) => {
  return <h1 className="text-2xl font-bold ">{text}</h1>
}
