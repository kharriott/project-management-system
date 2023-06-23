import Image from 'next/image'
import Link from 'next/link';
//import styles from './page.module.css'

export default function About() {
  return (
    <div>
        <p>About</p>
        <nav>
            <Link href="/home">About</Link>
            <Link href="/not-found">Contact</Link>
        </nav>
    </div>
  )
}
