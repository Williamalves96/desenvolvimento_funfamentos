import styles from './footer.module.css'

const Footer =({nome})=>{
    return (
<div className= {styles.footer}>
  {nome}
</div>
    )
}
export default Footer