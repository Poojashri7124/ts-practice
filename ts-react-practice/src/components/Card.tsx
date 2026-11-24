import type React from 'react'

type CardProps = {
  title: string
  children: React.ReactNode // anything React can show: text, elements, a list...
}

function Card({ title, children }: CardProps) {
  return (
    <section className="card">
      <h2 className="card-title">{title}</h2>
      {children}
    </section>
  )
}

export default Card