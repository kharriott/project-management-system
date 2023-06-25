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
              <h1 className={`${styles.link_dark_blue}`}>Carbon Dioxide Waste Management Project</h1>
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
              <h2 className={`${styles.link_blue} ${styles.padding_top_4px}`}>Team Members</h2>
              <div className={`${styles.padding_8px}`}></div>
              <div className={`${styles.gap}`}>
                <div className={`${styles.display_inline_block}`}>
                <div className={`${styles.team_member_small} ${styles.light_outline}`}>
                  <img src={'/team_member_sample_one.png'}></img>
                  <p className={`${styles.link_blue} ${styles.padding_top_14px}`}>Amy Whineloft</p>
                </div>
                </div>
                <div className={`${styles.padding_4px} ${styles.display_inline_block}`}></div>
                <div className={`${styles.display_inline_block}`}>
                  <div className={`${styles.team_member_small} ${styles.light_outline}`}>
                    <img src={'/team_member_sample_one.png'}></img>
                    <p className={`${styles.link_blue} ${styles.padding_top_14px}`}>Marcus Gray</p>
                  </div>
                </div>
              </div>
              
            </div>
            <div className={`${styles.project_update} ${styles.box_shadow_lighter} ${styles.border_radius_5px} ${styles.padding_16px}`}>
              <div className={`${styles.display_inline}`}>
                <h2 className={`${styles.link_blue} ${styles.padding_top_4px}`}>Updates</h2>
                <div className={`${styles.justify_right}`}>
                  <div className={`${styles.small_round_button} ${styles.display_inline}`}>
                      <img src={'/add_icon.png'} className={`${styles.small_icon}`}></img>
                      <p className={`${styles.padding_top_2px}`}>Add New</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.padding_8px}`}></div>
              <div>
                <div className={`${styles.update_card_top}`}>
                  <h3 className={`${styles.link_blue}`}>Contact Made with Client</h3>
                  <div className={`${styles.padding_4px}`}></div>
                  <p className={`${styles.paragraph_light}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper quam nibh, eu tincidunt turpis vulputate ut. Pellentesque accumsan pellentesque arcu, ut ullamcorper ante blandit ut. Donec feugiat faucibus felis placerat venenatis. </p>
                </div>
                <div className={`${styles.update_card_bottom}`}>
                  <div className={`${styles.display_inline} ${styles.justify_right}`}>
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
              <div className={`${styles.padding_4px}`}></div>
              <div>
                <div className={`${styles.update_card_top}`}>
                  <h3 className={`${styles.link_blue}`}>Updates made to documents</h3>
                  <div className={`${styles.padding_4px}`}></div>
                  <p className={`${styles.paragraph_light}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper quam nibh, eu tincidunt turpis vulputate ut. Pellentesque accumsan pellentesque arcu, ut ullamcorper ante blandit ut. Donec feugiat faucibus felis placerat venenatis. </p>
                </div>
                <div className={`${styles.update_card_bottom}`}>
                  <div className={`${styles.display_inline} ${styles.justify_right}`}>
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
