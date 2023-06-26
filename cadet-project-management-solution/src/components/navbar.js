// import { useHistory } from 'react-router-dom';
import globalstyle from '../app/styles.css'
import styles from '../app/styles.module.css'
import style from '../app/styles.css'
import { fetchAPI } from '@/app/api';
import {useState} from "react";

export function SideBar(view_name) {
  console.log(view_name)
  function nav_bar_link_clicked(link) {
    
  }

  return (
    <div className={`${styles.padding_32px}`}>
      <div>
        <img src={'/logo.png'}></img>
      </div>
      <div className={`${styles.padding_16px}`}></div>
      <div onClick={nav_bar_link_clicked("projects_tab")} className={`${styles.side_bar_nav_link} ${styles.side_bar_nav_link_active} ${styles.display_inline}`}>
        <img className={`${styles.dashboard_icon} ${styles.change_fill_color}`} src={'/project_icon_active.svg'} alt="icon"></img>
        <div className={`${styles.padding_top_4px}`}>
          <p className={`${styles.bold}`}>Projects</p>
        </div>
      </div>
      <div className={`${styles.padding_16px}`}></div>
      <div onClick={nav_bar_link_clicked("work_tab")} className={`${styles.side_bar_nav_link} ${styles.display_inline}  ${styles.side_bar_nav_link_inactive}`}>
        <img className={`${styles.dashboard_icon} ${styles.change_fill_color}`} src={'/workers_icon_inactive.svg'} alt="icon"></img>
        <div className={`${styles.padding_top_4px}`}>
          <p className={`${styles.bold}`}>Workers</p>
        </div>
      </div>
    </div>
  )
}
