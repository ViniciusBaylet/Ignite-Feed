import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author='Teste1' content='Engenheiro de Software' />
          <Post author='Teste2' content='Engenheiro de Software' />
        </main>
      </div>
    </div>
  )
}

