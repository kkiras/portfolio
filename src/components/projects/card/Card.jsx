import Styles from "./Card.module.css";
import { useState } from "react";
import { animated, useSpring, useTransition } from "@react-spring/web";
import Button from "../button/Button";
import Modal from "../modal/Modal";

function Card({ project }) {
  const { imagen, title, shortDescription } = project
  const [show, setShown] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false)

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  const transitions = useTransition(modalVisible, {
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-40px)" },
    config: { duration: 300 } 
  });

  const openGithubLink = (link) => {
    window.open(link,  "_blank")
    console.log(link)
  }

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>{title}</h2>
      <p>
        {shortDescription}
      </p>
      <div className={Styles.btnn}>
        <Button text="Github" onClick={() => openGithubLink(project.detail.githubLink)}/>
        <Button text="Detail" onClick={() => setModalVisible(true)} />
        {transitions((style, item) => (
          item ? (
            <Modal
              style={style}
              open={modalVisible}
              closeModal={() => setModalVisible(false)}
              project={project}
            />
          ) : null
        ))}
      </div>
    </animated.div>

    
  );
}

export default Card;
