// import { useHistory } from 'react-router-dom';
import globalstyle from '../app/styles.css'
import styles from '../app/styles.module.css'
import style from '../app/styles.css'
import { fetchAPI } from '@/app/api';
import {useState} from "react";

export function SideBar() {
  return (
    <div className={`${styles.padding_32px}`}>
      <div>
        <img src={'/logo.png'}></img>
      </div>
      <div className={`${styles.padding_16px}`}></div>
      <div className={`${styles.side_bar_nav_link} ${styles.side_bar_nav_link_active} ${styles.display_inline}`}>
        <img className={`${styles.dashboard_icon} ${styles.change_fill_color}`} src={'/project_icon_active.svg'} alt="icon"></img>
        <div className={`${styles.padding_top_4px}`}>
          <p className={`${styles.bold}`}>Projects</p>
        </div>
      </div>
      <div className={`${styles.padding_16px}`}></div>
      <div className={`${styles.side_bar_nav_link} ${styles.display_inline}  ${styles.side_bar_nav_link_inactive}`}>
        <img className={`${styles.dashboard_icon} ${styles.change_fill_color}`} src={'/workers_icon_inactive.svg'} alt="icon"></img>
        <div className={`${styles.padding_top_4px}`}>
          <p className={`${styles.bold}`}>Workers</p>
        </div>
      </div>
    </div>
  )
}

export function DefaultNavBar() {

  return (
    <div className={`${styles.default_style_none}`}>
      <div className={`${styles.box_shadow_light}`}>
        <div className={`${styles.text_center_align} ${styles.padding_top_bottom_32px}`}>
            <img src={'/logo.png'}/>
        </div>
      </div>
    </div>
  )
}

export function SignedInNavBar() {

    return (
      <div className={`${styles.default_style_none}`}>
        <div>
          <p>Signed in nav bar!</p>
        </div>
      </div>
    )
  }
