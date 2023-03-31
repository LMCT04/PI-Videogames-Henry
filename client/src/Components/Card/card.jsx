import style from './card.module.css'

const Card = ({id, key, name, image,genres}) => {
    return(
        <div key={key} >
            <div className={style.imag} >
                <img src={image} alt={name} />
            </div>
            <div className={style.text} >
                <a href={`/detail${id}`} > {name} </a>
                <ul> {genres.map((g) => ( <li> {g} </li> ))} </ul>
            </div>
        </div>
    )
}

export default Card