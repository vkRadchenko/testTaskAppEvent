interface I_ButtonProps {
  children: React.ReactNode
  type: 'button' | 'submit'
  styleClass?: string
}

const Button: React.FC<I_ButtonProps> = ({ children, type, styleClass }) => {
  return (
    <button className={`btn ${styleClass}`} type={type}>
      {children}
    </button>
  )
}

export default Button
