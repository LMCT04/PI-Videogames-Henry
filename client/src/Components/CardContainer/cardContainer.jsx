import Card from '../Card/card'
import style from './cardContainer.module.css'


const CardContainer = ({currentGame}) => {
    return (
        <div className={style.container} >
            {
                currentGame?.map((g) => {
                    return <Card
                            key= {g.id}
                            id= {g.id}
                            name= {g.name}
                            image= {g.image}
                            genres= {g.genres}
                        />
                })
            }
        </div>
    )
}


export default CardContainer