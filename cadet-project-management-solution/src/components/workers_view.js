import Image from 'next/image'
import Link from 'next/link';
import { DefaultNavBar, SignedInNavBar } from '@/components/navbar';
//import style from '../app/styles.css'
import styles from '../app/styles.module.css'

export function Workerview() {
  return (
    <div className={``}>
        {/* <DefaultNavBar></DefaultNavBar> */}
        {/* <SignedInNavBar></SignedInNavBar>
        <p>Dashboard</p>
        <nav>
            <Link href="/home">About</Link>
            <Link href="/not-found">Contact</Link>
        </nav> */}
        <div className={`${styles.dashboard_content}`}>
          <div className={`${styles.grid_project_view} `}>
            <div className={`${styles.project_title}`}>
              <h1 className={`${styles.link_dark_blue}`}>Workers</h1>
              <div className={`${styles.padding_8px}`}></div>
              <div className={`${styles.display_inline}`}>
                <div className={`${styles.small_round_button} ${styles.display_inline} ${styles.link}`}>
                      <img src={'/add_icon.png'} className={`${styles.small_icon}`}></img>
                      <p className={`${styles.padding_top_2px}`}>Add New</p>
                    </div>
              </div>
            </div>
          </div>
        </div>
        
        
    </div>
  )
}
