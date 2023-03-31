import React from "react"
import { useState } from "react"
import styles from './paginated.module.css'

const Paginated = ({ gamePrePage, games, paging }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(games / gamePrePage); i++ ) {
        pageNumber.push(i)
    }

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            paging(currentPage - 1);
        }
    }

    const handleNext = () => {
        if (currentPage < pageNumber.length) {
            setCurrentPage(currentPage + 1);
            paging(currentPage + 1);
        }
    }

    return(
        <nav className={styles.navcont}>
            <div className={styles.prenex} onClick={handlePrev}> Prev </div>
            <ul className={styles.list}>
                {pageNumber && pageNumber.map((num) => (
                    <li
                        className={styles.num}
                        key={num}
                        onClick={() => {
                            setCurrentPage(num)
                            paging(num)
                        }}
                    > {num} </li>
                ))}
            </ul>
            <div className={styles.prenex} onClick={handleNext}> Next </div>
        </nav>
    )
}

export default Paginated