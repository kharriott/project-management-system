import Image from 'next/image'
import Link from 'next/link';
//import styles from './page.module.css'

export default function Home() {
  return (
    <div>
        <p>Home</p>
        <nav>
            <Link href="/about">About</Link>
            <Link href="/not-found">Contact</Link>
        </nav>
    </div>
  )
}
