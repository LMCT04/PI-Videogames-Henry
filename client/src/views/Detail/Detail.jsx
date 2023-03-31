import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailGames } from '../../Redux/action';
import styles from './Detail.module.css'


const Detail = (props) => {

    const dispatch = useDispatch();
    

    useEffect(() =>{
        dispatch(getDetailGames(props.match.params.id));
    },[dispatch, props.match.params.id]);
    
    const game = useSelector((state) => state.detailGame)

    return (
        <div className={styles.conte}>
            <div className={styles.title}>
                <h1>{game.name}</h1>
            </div>
            <div className={styles.imag}>
                <img src={game.background_image} alt={game.name} />
            </div>
            <div className={styles.desc}>
                <p>{game.description}</p>
            </div>
            <div className={styles.gpr}>
            <div className={styles.gen}>
                <h2>Genres</h2>
                <ul>{game.genres && game.genres?.map(g => (<p key ={g.id} >{g.name}</p>))}</ul>
            </div>
            <div className={styles.plat}>
                <h2>Platforms</h2>
                <ul>{game.platforms?.map(el => el.platform.name).join(',')}</ul>
            </div>
            <div> 
                <h2>Rating</h2>
                <p>{game.rating}</p>
            </div>
            <div> 
                <h2>Relased</h2>
                <p>{game.released}</p>
            </div>
            </div>
        </div>
    )
}


export default Detail;