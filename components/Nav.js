import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <Link href="/guitars">Guitars</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="account">Account</Link>
    </nav>
  )
}