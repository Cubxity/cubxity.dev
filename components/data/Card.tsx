export interface CardProps {
  title: string;
  subtitle: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="h-48 p-8 bg-gradient-to-tr from-background to-dark rounded-2xl border border-gray-800">
      <h3 className="text-xl text-white font-semibold pb-4">
        {props.title}
      </h3>
      <p className="text-xl text-gray-300">
        {props.subtitle}
      </p>
    </div>
  )
}