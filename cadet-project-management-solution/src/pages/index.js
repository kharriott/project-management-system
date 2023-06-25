// import { useHistory } from 'react-router-dom';
import globalstyle from '../app/styles.css'
import styles from '../app/styles.module.css'
import style from '../app/styles.css'
import { fetchAPI } from '@/app/api';
import {useState} from "react";




export default function LogIn() {
  //const history = useHistory();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // async function fetchData() {
  //   try {
  //     const data = await fetchAPI('/users');
  //     // Use the data returned from the API call
  //     console.log(data);
  //   } catch (error) {
  //     // Handle any errors that occurred during the API call
  //     console.error(error);
  //   }
  // }
  // fetchData();

  
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submitted values: ', username, password)
    //fix this: add code for backend to see if sucessful
    //history.push('/dashboard');
    window.location.href = '/dashboard';

  }

  const handleAnonBrowsing = () => {
    window.location.href = '/dashboard';
  }

  

  return (
    <div className={`${styles.default_style_none}`}>
      <div className={`${styles.height_100percent}`}>
          <div className={`${styles.center_content_middle_page}`}>
            <div className={`${styles.box_light_drop_shadow} ${styles.text_center_align}`}>
              <form className={`${styles.padding_32px}`} onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <div className={`${styles.padding_16px}`}></div>
                <div className={`${styles.text_left_align}`}>
                  <label>Username</label>
                  <br></br>
                  <input className= {`${styles.input_fill}`} onChange={handleUserNameChange} text="text" placeholder="johnapple"></input>
                  <br></br>
                  <div className={`${styles.padding_8px}`}></div>
                  <label>Password</label>
                  <br></br>
                  <input className= {`${styles.input_fill}`} onChange={handlePasswordChange} type="password" placeholder="********"></input>
                  <div className={`${styles.padding_16px}`}></div>
                  <button className= {`${styles.dark_button} ${styles.fill} ${styles.hover_cursor}`} type="submit">Login</button>
                </div>
              </form>
            </div>
            <div className={`${styles.padding_16px}`}></div>
            <div className={`${styles.text_center_align}`}>
              <a className={`${styles.link_blue}`} onClick={handleAnonBrowsing}>Browse as anonymous.</a>
            </div>    
          </div>
      </div>
    </div>
  )
}
