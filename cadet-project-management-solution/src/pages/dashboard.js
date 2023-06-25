import Image from 'next/image'
import Link from 'next/link';
import { SideBar, DefaultNavBar, SignedInNavBar } from '@/components/navbar';
//import style from '../app/styles.css'
import {Projectview} from '@/components/project_view' 
import styles from '../app/styles.module.css'

export default function Dashboard() {
  return (
    <div className={`${styles.dashboard_layout}`}>
        {/* <div className={`${styles.sidebar}`}>
          <p>one</p>
        </div>
        <div className={`${styles.content}`}>
          <p>two</p>
        </div> */}
        <SideBar className={`${styles.sidebar}`}></SideBar>
        <div className={`${styles.content}`}>
        <Projectview></Projectview>
        </div>
    </div>
  )
}
