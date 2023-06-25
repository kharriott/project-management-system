// import { useHistory } from 'react-router-dom';
import globalstyle from '../app/styles.css'
import styles from '../app/styles.module.css'
import style from '../app/styles.css'
import { fetchAPI } from '@/app/api';
import {useState} from "react";
import logo from '../imgs/logo.png'

export function DefaultNavBar() {

  return (
    <div className={`${styles.default_style_none}`}>
      <div className={`${styles.box_shadow_light}`}>
        <div className={`${styles.text_center_align} ${styles.padding_top_bottom_32px}`}>
            <p>CADET</p>
            
        </div>
      </div><img src={logo}/>
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
