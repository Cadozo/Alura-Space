import facebook from 'assets/social/facebook.svg'
import instagram from 'assets/social/instagram.svg'
import twitter from 'assets/social/twitter.svg'
import styles from './Rodape.module.scss'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__sociais}>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
            </div>
            <div className={styles.rodape__texto}>
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}