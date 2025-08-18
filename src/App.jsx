import { Header } from './components/Header/Header'
import './global.css'
import styles from './App.module.css'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: `https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      name: 'Jairo Doni',
      role: 'Desenvolvedor Frontend'
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design / doctorcare" },
    ],
    publishedAt: new Date('2023-07-02 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: `https://github.com/Ro7Rinke.png`,
      name: 'Ro7Rinke',
      role: 'Desenvolvedor Backend'
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design / doctorcare" },
    ],
    publishedAt: new Date('2023-07-02 20:00:00')
  },

  {
    id: 3,
    author: {
      avatarUrl: `https://github.com/Shirakusa.png`,
      name: 'Guilherme Machado Oliveira',
      role: 'Desenvolvedor Fullstack'
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design / doctorcare" },
    ],
    publishedAt: new Date('2023-07-02 20:00:00')
  }
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

