import Link from 'next/link'

type LoginButtonProps = {
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

export function LoginButton({ className, children, ...props }: LoginButtonProps) {
  return (
    <Link href="/login" className={className} {...props}>
      {children}
    </Link>
  )
}
