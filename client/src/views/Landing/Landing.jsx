import styles from './Landing.module.css';
import { Link } from 'react-router-dom'

const Landing = () => {
    return (

            <div className={styles.landingPage} >
                <div className={styles.titleContainer} >
                    <h1 className={styles.title} >EXPLORE VIDEOGAMES WITH OUR API</h1>
                </div>
                <Link to='/home'>
                    <div className={styles.buttonContainer} >
                        <button className={styles.button} >START EXPLORE</button>
                    </div>
                </Link>
                <div className={styles.pContainer} >
                    <p className={styles.p} >Enter and immerse yourself in the videogames of our API</p>
                </div>
            </div>

    )
}

export default Landing;