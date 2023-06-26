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
                <div className={`${styles.tag_active} ${styles.hover_cursor}`}>Active</div>
                <div className={`${styles.tag_software_development} ${styles.hover_cursor}`}>Software Development</div>
                <div className={`${styles.tag_project_management} ${styles.hover_cursor}`}>Project Management</div>
                <div className={`${styles.small_round_button} ${styles.display_inline}`}>
                      <img src={'/edit_icon.png'} className={`${styles.small_icon}`}></img>
                      <p className={`${styles.padding_top_2px}`}>Edit</p>
                    </div>
              </div>
            </div>
          </div>
        </div>
        
        
    </div>
  )
}
