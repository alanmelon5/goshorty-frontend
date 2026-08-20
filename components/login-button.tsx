'use client'

type LoginButtonProps = {
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

export function LoginButton({ className, children, ...props }: LoginButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent('open-login'))}
      {...props}
    >
      {children}
    </button>
  )
}
