import Card from "./Card";
import styles from "./body.module.css"

function Body() {
    const usuarios = [
        { nome: "Ana", idade: 22, cidade: "São Paulo" },
        { nome: "Bia", idade: 25, cidade: "São Lourenço" },
        { nome: "Will", idade: 29, cidade: "Floripa" }
    ]
    return (
        <main className={styles.Body}>
            <h2>Usuarios cadastrados</h2>
            <div className={styles.cardContainer}>
                <Card />
            </div>

        </main>
    )
}

export default Body;