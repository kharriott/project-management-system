import Image from 'next/image'
import Link from 'next/link';
import { SideBar, DefaultNavBar, SignedInNavBar } from '@/components/navbar';
//import style from '../app/styles.css'
import {Projectview} from '@/components/project_view' 
import { Workerview } from '@/components/workers_view';
import styles from '../app/styles.module.css'
import { useState, useEffect } from 'react';



export default function Dashboard() {
  const [content, setContent] = useState("projects_tab")
  //var content = "project-view"

  // function change_content(view_name) {
  //     setContent(view_name)
  // }
  async function nav_bar_link_clicked(link) {
    setContent(link)
    console.log(link)
  }


  return (
    <div className={`${styles.dashboard_layout}`}>
        {/* <SideBar view_name={yourVariable} className={`${styles.sidebar}`}></SideBar> */}
        <div className={``}>
          <div className={`${styles.sidebar}`}>
                <div className={`${styles.padding_32px}`}>
              <div>
                <img src={'/logo.png'}></img>
              </div>
              <div className={`${styles.padding_16px}`}></div>
              <div onClick={() => nav_bar_link_clicked("projects_tab")} className={`${styles.side_bar_nav_link} ${styles.side_bar_nav_link_active} ${styles.display_inline}`}>
                <img className={`${styles.dashboard_icon} ${styles.change_fill_color}`} src={'/project_icon_active.svg'} alt="icon"></img>
                <div className={`${styles.padding_top_4px}`}>
                  <p className={`${styles.bold}`}>Projects</p>
                </div>
              </div>
              <div className={`${styles.padding_16px}`}></div>
              <div onClick={() => nav_bar_link_clicked("work_tab")} className={`${styles.side_bar_nav_link} ${styles.side_bar_nav_link_inactive} ${styles.display_inline}`}>
                <img className={`${styles.dashboard_icon} ${styles.change_fill_color}`} src={'/workers_icon_inactive.svg'} alt="icon"></img>
                <div className={`${styles.padding_top_4px}`}>
                  <p className={`${styles.bold}`}>Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`${styles.content}`}>
          { (content === "projects_tab") ?
            (<Projectview></Projectview>) : null
          }
          { (content === "work_tab") ?
            (<Workerview></Workerview>) : null
          }
        </div>
    </div>
  )
}
