import Image from 'next/image'
import Link from 'next/link';
import { DefaultNavBar, SignedInNavBar } from '@/components/navbar';
import { fetchAPI } from '@/app/api';
import {useState} from "react";
//import style from '../app/styles.css'
import styles from '../app/styles.module.css'

export function ProjectsListView() {
  const [posts, setPosts] = useState([]);
  const [run, runFunction] = useState([1]);


  async function fetchData() {
    if (run != 0){
      try {
        const data = await fetchAPI('/projects');
        // Use the data returned from the API call
        console.log(data);
        setPosts(data)
      } catch (error) {
        // Handle any errors that occurred during the API call
        console.error(error);
      }

      try {
        const data = await fetchAPI('/users/1');
        // Use the data returned from the API call
        console.log(data);
        //setPosts(data)
      } catch (error) {
        // Handle any errors that occurred during the API call
        console.error(error);
      }


      runFunction(0)
    }
  }
  fetchData();

  return (
    <div className={``}>
        <div className={`${styles.dashboard_content}`}>
          <div className={`${styles.grid_project_lists_view} `}>
            <h1 className={`${styles.link_dark_blue}`}>Projects</h1>
            <div className={`${styles.padding_8px}`}></div>
            <div className={`${styles.display_inline}`}>
                <div className={`${styles.small_round_button} ${styles.display_inline} ${styles.link}`}>
                      <img src={'/add_icon.png'} className={`${styles.small_icon}`}></img>
                      <p className={`${styles.padding_top_2px}`}>Add New</p>
                </div>
            </div>
            <div>
            <div className={`${styles.padding_32px}`}></div>
            <table>
                <tbody>
                    <tr>
                            <th className={`${styles.text_left_align}`}>Project Title</th>
                            <th className={`${styles.text_left_align}`}>Description</th>
                            <th>Author</th>
                            <th>Budget</th>
                            <th>Status</th>
                    </tr>
                    {   
                        posts===null ? <p>"No users found."</p> : posts.map(
                            post =>     
                                <tr>
                                    <td>{post.title}</td>  
                                    <td>{post.description}</td>  
                                    <td>{post.author}</td> 
                                    <td>{post.start_date}</td>  
                                    <td>{post.budget}</td>  
                                    <td>{post.status}</td>  
                                </tr> 
                        )
                        
                    }
                </tbody>
              </table>
            </div>


            {/* <div className={`${styles.project_title}`}>
              
              
              
            </div> */}
          </div>
        </div>
        
        
    </div>
  )
}
