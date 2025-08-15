import Card from "./Card";
import { CardApi } from "./Card/CardApi";
import styles from "./body.module.css"

function Body() {
    const usuarios = [
        { nome: "Ana", idade: 22, cidade: "São Paulo" },
        { nome: "Bia", idade: 25, cidade: "São Lourenço" },
        { nome: "Will", idade: 29, cidade: "Floripa" }
    ]
    return (
        <main className={styles.body}>
            <h2>Usuarios cadastrados</h2>
            <div className={styles.cardContainer}>
                {usuarios.map((usuario,index) => (
                    <Card
                        key={index}
                        nome={usuario.nome}
                        idade={usuario.idade}
                        cidade={usuario.cidade}
                    />


                ))}

            </div>
            <h2>Usuario de API</h2>
            <div className={styles.cardContainer}>
                <CardApi/>
            </div>

        </main>
    )
}

export default Body;