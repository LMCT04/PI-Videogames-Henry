import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.NavBarContainer} >
            <Link to='/home'  >
                <button className={styles.buttonHome} > HOME </button>   
            </Link>
            <Link to='/create'  className={styles.form} >
                <button className={styles.formContainer} > FORM </button>
            </Link>
            
        </div>
    )
}

export default NavBar;