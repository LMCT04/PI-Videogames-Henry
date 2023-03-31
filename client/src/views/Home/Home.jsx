import styles from './Home.module.css'
import CardContainer from '../../Components/CardContainer/cardContainer'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGenres, getGames } from '../../Redux/action'
import Paginated from '../../Components/Paginated/paginated'
import Filters from '../../Components//Filters/Filters'



const Home = () => {

    const games = useSelector((state) => state.games)

    const [currentPage, setCurrentPage] = useState(1)
    const [gamePrePage] = useState(9)
    const indexLastGame = currentPage * gamePrePage
    const indexFirstGame = indexLastGame - gamePrePage
    const currentGame = games.slice(indexFirstGame, indexLastGame)

    const paging = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGames())
        dispatch(getAllGenres())
    }, [dispatch])


    return (
        <>
            <div className={styles.container}>
                <div className={styles.title} >
                    <h1>WELCOME API GAMES</h1>
                </div>
                <div>
                    <Filters/>
                </div>
                <div className={styles.cards} >
                    <CardContainer currentGame={currentGame} />
                </div>
            </div>
            <div>
                <Paginated 
                    gamePrePage = {gamePrePage}
                    games = {games.length}
                    paging = {paging} 
                />
            </div>
        </>
    )
}

export default Home;