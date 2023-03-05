import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/danieldagerom.png",
      name: "Daniel Primo",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link',  content: 'jane.design/doctorcare' },       
    ],
    publishedAt: new Date('2023-02-22 06:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/lboaventura25.png",
      name: "Lucas Boaventura",
      role: "Tech Lead"
    },
    content: [
      { type: 'paragraph', content: 'Oi Pessoal', },
      { type: 'paragraph', content: 'Acabei de descobrir algumas coisas interessantes sobre a AWS, recomendo a visita!'},
      { type: 'link',  content: 'lucas.com/aws' },       
    ],
    publishedAt: new Date('2023-01-27 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/roginaldosemog.png",
      name: "Igor Aragão",
      role: "Front End Engineer",
    },
    content: [
      { type: 'paragraph', content: 'Boas turma!', },
      { type: 'paragraph', content: 'Se liga nessa nova abordagem de CSS! Mudou muito pra mim!'},
      { type: 'link',  content: 'igor.com/css' },       
    ],
    publishedAt: new Date('2023-01-14 07:15:00'),
  },
  {
    id: 4,
    author: {
      avatarUrl: "https://github.com/pedro-rodiguero.png",
      name: "Pedro Menezes Rodiguero",
      role: "Software Engineer",
    },
    content: [
      { type: 'paragraph', content: 'Eae gente boa!', },
      { type: 'paragraph', content: 'Aslan fez uma bagunça em casa, acabei desenvolvendo um robô faxineiro! Open Source pra quem quiser...'},
      { type: 'link',  content: 'superaslan.com/faxina' },       
    ],
    publishedAt: new Date('2023-01-16 09:20:00'),
  },
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
                  key={post.id}
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


