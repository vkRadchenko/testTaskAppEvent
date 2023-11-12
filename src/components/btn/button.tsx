interface I_ButtonProps {
  children: React.ReactNode
  type: 'button' | 'submit'
  styleClass?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  widtchSize?: number
}

const Button: React.FC<I_ButtonProps> = ({
  children,
  type,
  styleClass,
  onClick = () => {},
  widtchSize,
}) => {
  return (
    <button
      className={`btn ${styleClass}`}
      type={type}
      onClick={onClick}
      style={{ width: widtchSize }}
    >
      {children}
    </button>
  )
}

export default Button
