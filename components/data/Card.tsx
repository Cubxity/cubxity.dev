export interface CardProps {
  title: string;
  subtitle: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="min-h-48 p-8 bg-gradient-to-tr from-background to-dark rounded-2xl border border-gray-800">
      <h3 className="text-xl text-white font-medium pb-4">
        {props.title}
      </h3>
      <p className="text-lg text-gray-300">
        {props.subtitle}
      </p>
    </div>
  )
}