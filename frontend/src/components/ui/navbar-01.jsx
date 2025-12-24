import { Button } from '@/components/ui/button'

export function Navbar01({
  logo,
  logoHref = '/',
  signInHref = '/login',
  signInLabel = 'Sign in',
}) {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href={logoHref} className="font-semibold">
          {logo ?? 'ProShop'}
        </a>

        <nav className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <a href={signInHref}>{signInLabel}</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
