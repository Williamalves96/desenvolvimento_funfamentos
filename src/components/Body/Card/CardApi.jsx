import { useEffect, useState } from "react"
import styles from './cards.module.css'

const CardApi = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })

        console.log(users)

    },[])

    return (
        <div className={stylestyle.cardContainerApi}>
{
    users.map((users)=>{
        <div className={styles.card} key={users.id}>
            <h3>{users.name}</h3>
            <p>{users.email}</p>
            <p>{users.address.street}</p>
            <h3></h3>

        </div>
    })
}
        </div>
    )
}

export default CardApi;

