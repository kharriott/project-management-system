import Image from 'next/image'
import Link from 'next/link';
import { DefaultNavBar, SignedInNavBar } from '@/components/navbar';
//import style from '../app/styles.css'
import styles from '../app/styles.module.css'

export default function Dashboard() {
  return (
    <div>
        <DefaultNavBar></DefaultNavBar>
        {/* <SignedInNavBar></SignedInNavBar>
        <p>Dashboard</p>
        <nav>
            <Link href="/home">About</Link>
            <Link href="/not-found">Contact</Link>
        </nav> */}
        <div className={`${styles.dashboard_content}`}>
          <div className={`${styles.grid_project_view} `}>
            <div className={`${styles.project_title}`}>
              <h2>Carbon Dioxide Waste Management Project</h2>
              <div className={`${styles.tag_active} ${styles.hover_cursor}`}>Active</div>
            </div>
            <div className={`${styles.project_summary}`}>
              <div>
                <div>
                  <h3>Project Summary</h3>
                  <p>Edit</p>
                </div>
                <p>Project By Amy Whineesloft</p>
                <p>Start Date January 16th 2023</p>
                <p>Budget $300,000.00</p>
                <p>Additional Details</p>
                <p>Lorem impsum.</p>
              </div>
            </div>
            <div className={`${styles.project_team}`}>
              <h3>Team Members</h3>
              <div>
                <div className={`${styles.team_member_small}`}>
                  <p>Image here</p>
                  <p>Amy Whinesoft</p>
                </div>
              </div>
            </div>
            <div className={`${styles.project_update} ${styles.box_shadow_lighter} ${styles.border_radius_5px} ${styles.padding_16px}`}>
              <h2 className={`${styles.link_blue}`}>Updates</h2>
              <div className={`${styles.padding_8px}`}></div>
              <div >
                <div className={`${styles.update_card_top}`}>
                  <h3 className={`${styles.link_blue}`}>Contact Made with Client</h3>
                  <div className={`${styles.padding_4px}`}></div>
                  <p className={`${styles.paragraph_light}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper quam nibh, eu tincidunt turpis vulputate ut. Pellentesque accumsan pellentesque arcu, ut ullamcorper ante blandit ut. Donec feugiat faucibus felis placerat venenatis. </p>
                </div>
                <div className={`${styles.update_card_bottom}`}>
                  <div className={`${styles.display_inline}`}>
                    <div className={`${styles.small_round_button} ${styles.display_inline}`}>
                      <img src={'/edit_icon.png'} className={`${styles.small_icon}`}></img>
                      <p className={`${styles.padding_top_2px}`}>Edit</p>
                    </div>
                    <div className={`${styles.small_round_button}`}>
                      <img src={'/delete_icon.png'} className={`${styles.small_icon}`}></img>
                    </div>
                  </div>
                </div>
              </div>          
            </div>
          </div>
        </div>
        
        
    </div>
  )
}
