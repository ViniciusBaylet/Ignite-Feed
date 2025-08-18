import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>
                                Vinicius
                            </strong>
                            <time title='11 de maio às 08:13h' datetime="2022-05-11 08:13:30">Cerca de 1hr atrás</time>
                        </div>

                        <button title='Deletar comentário'>Lixeira</button>
                    </header>

                    <p>Muito bom Devon, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}