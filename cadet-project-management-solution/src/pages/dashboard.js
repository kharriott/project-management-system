import Image from 'next/image'
import Link from 'next/link';
import { DefaultNavBar, SignedInNavBar } from '@/components/navbar';
//import styles from './page.module.css'

export default function About() {
  return (
    <div>
        <DefaultNavBar></DefaultNavBar>
        <SignedInNavBar></SignedInNavBar>
        <p>Dashboard</p>
        <nav>
            <Link href="/home">About</Link>
            <Link href="/not-found">Contact</Link>
        </nav>
    </div>
  )
}
