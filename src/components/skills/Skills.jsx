import { useCallback, useEffect, useState } from "react"
import WordCloud from "./WordCloud"
import styles from './Skills.module.css'

export default function Skills() {
    const filter = ["Frontend", "Backend", "Databases", "Tools", "Frameworks"]
    const [selectedSkill, setSelectedSkill] = useState("")

    const handleSelectSkill = useCallback((skill) => {
      setSelectedSkill(prev => (skill === prev ? "" : skill))
    },[])

    return(
        <div id="section-skills" className={styles.container} >
            <div className={styles.child1} >
                <div>
                    <h1>Skills and tools</h1>
                    <p>Click the buttons below to filter by category</p>

                </div>

                <div 
                  style={{
                    display: 'flex', 
                    gap: '12px'
                  }}
                >
                  {filter.map(skill => (
                    <ButtonSkill 
                      key={skill} 
                      skill={skill}
                      onClick={handleSelectSkill}
                      selectedSkill={selectedSkill}
                    />
                  ))}
                </div>

                <p>The larger the text is, the more fluent I am</p>
                
            </div>
            
            <div style={child2}>
                <WordCloud selectedSkill={selectedSkill} />
            </div>
            
        </div>
    )
}

function ButtonSkill(props) {
    return(
      <>
        <button
          className={styles.button}
          onClick={()=> props.onClick(props.skill)}
          style={{
            backgroundColor: props.selectedSkill === props.skill ? 'var(--accent-main)' : 'var(--primary-main)'
          }}
        >
          {props.skill}
        </button>
      </>
        
    )
}

const child2 = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex:1,
  // backgroundColor: 'var(--bg-main)'
}