'use client'

import { Tabs } from 'antd'
import styles from './CommunicationExercises.module.css'
import communicationExercises from './data'
interface DialogueItem {
  person: string
  text: string
}

interface CommunicationExercise {
  lesson: string
  context: string
  dialogue: DialogueItem[]
  structure: string[]
}
const TabHome: React.FC = () => {
  const data: CommunicationExercise[] = communicationExercises

  const communicationExercise = (item: CommunicationExercise) => {
    return (
      <div className={styles.container}>
        <div className={styles.exercise}>
          <div className={styles.context}>
            <h3 className="text-6xl mb-2">{item.lesson}</h3>
            <i>**{item.context}**</i>
          </div>
          <div className={styles.dialogue}>
            {item.dialogue.map(d => {
              return (
                <p>
                  <strong>{d.person}:</strong> {d.text}
                </p>
              )
            })}
          </div>
          <div className={styles.structure}>
            <h3> Cấu trúc học tập:</h3>
            <ul>
              {item.structure.map(s => {
                return <li>* {s}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <Tabs
        defaultActiveKey="0"
        tabPosition={'left'}
        items={data.map((item, i) => {
          const id = String(i)
          return {
            style: { minHeight: '100vh' },
            label: `lesion-${id}`,
            key: id,
            children: communicationExercise(item),
          }
        })}
      />
    </div>
  )
}

export default TabHome
