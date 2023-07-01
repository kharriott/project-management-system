import {Projectview} from '@/components/project_view' 
import { ProjectsListView } from '@/components/projects_lists_view';
import { Workerview } from '@/components/workers_view';
import styles from '../app/styles.module.css'
import { useState, useEffect } from 'react';



export default function Dashboard() {
  const [content, setContent] = useState("projects_tab")
  const [active, setIsActive] = useState(true);
  const [isProjectsActive, setIsProjectsActive] = useState(true);
  const [isWorkersActive, setIsWorkersActive] = useState(false);
  
  
  async function nav_bar_link_clicked(link) {
    setContent(link)
    //console.log(link)
    handleLinkActive(link)
  }


  /**src={
                  isActive
                    ? '/project_icon_active.svg'
                    : '/project_icon_inactive.svg'
                } */
  async function handleLinkActive(link){
    //all the other links that don't match
    const navLinks = document.querySelectorAll(`.${styles.side_bar_nav_link_active}`);
    console.log(navLinks)
    navLinks.forEach((navLink) => {
      //side_bar_nav_link_inactive
      console.log(navLink.classList)
      navLink.classList.remove(`${styles.side_bar_nav_link_active}`);
      navLink.classList.add(`${styles.side_bar_nav_link_inactive}`)
    });

    const clickedNavLink = document.getElementById(link);
    //clickedNavLink.classList.add('side_bar_nav_link_active')
    clickedNavLink.classList.add(`${styles.side_bar_nav_link_active}`);
    clickedNavLink.classList.remove(`${styles.side_bar_nav_link_inactive}`)
    if (link === "projects_tab"){
      setIsProjectsActive(true)
      setIsWorkersActive(false)

    }
    if (link === "work_tab"){
      setIsWorkersActive(true)
      setIsProjectsActive(false)
    }


  }

  return (
    <div className={`${styles.dashboard_layout}`}>
        <div className={`${styles.width_300px}`}>
          <div className={`${styles.sidebar}`}>
                <div className={`${styles.padding_32px}`}>
              <div>
                <img src={'/logo.png'}></img>
              </div>
              {/* <div className={`${styles.padding_16px}`}></div>
              <div onClick={() => nav_bar_link_clicked("projects_tab")} id="projects_tab" className={`${styles.side_bar_nav_link} ${styles.side_bar_nav_link_active} ${styles.display_inline}`}>
                <img className={`${styles.dashboard_icon} ${styles.change_fill_color}`} src={ isProjectsActive ? '/project_icon_active.svg' : '/project_icon_inactive.svg'} alt="icon"></img>
                <div className={`${styles.padding_top_4px}`}>
                  <p className={`${styles.bold}`}>Projects List</p>
                </div>
              </div> */}
              <div className={`${styles.padding_16px}`}></div>
              <div onClick={() => nav_bar_link_clicked("projects_tab")} id="projects_tab" className={`${styles.side_bar_nav_link} ${styles.side_bar_nav_link_active} ${styles.display_inline}`}>
                <img className={`${styles.dashboard_icon} ${styles.change_fill_color}`} src={ isProjectsActive ? '/project_icon_active.svg' : '/project_icon_inactive.svg'} alt="icon"></img>
                <div className={`${styles.padding_top_4px}`}>
                  <p className={`${styles.bold}`}>Projects</p>
                </div>
              </div>
              <div className={`${styles.padding_16px}`}></div>
              <div onClick={() => nav_bar_link_clicked("work_tab")} id="work_tab"className={`${styles.side_bar_nav_link} ${styles.side_bar_nav_link_inactive} ${styles.display_inline}`}>
                <img className={`${styles.dashboard_icon} ${styles.change_fill_color}`}  src={ isWorkersActive ? '/workers_icon_active.svg' : '/workers_icon_inactive.svg'} alt="icon"></img>
                <div className={`${styles.padding_top_4px}`}>
                  <p className={`${styles.bold}`}>Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`${styles.content}`}>
          { (content === "projects_tab") ?
            (<ProjectsListView></ProjectsListView>) : null
          }
          { (content === "work_tab") ?
            (<Workerview></Workerview>) : null
          }
        </div>
    </div>
  )
}
