interface Props {
  text: string;
}

export default function SectionLabel({ text }: Props) {
  return <span className="section-label">{text}</span>;
}
