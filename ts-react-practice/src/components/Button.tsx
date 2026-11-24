// the props of Button: what the parent MUST give and what it MAY give (?)
type ButtonProps = {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`} type="button" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button