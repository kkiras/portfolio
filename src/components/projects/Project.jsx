import Card from "./card/Card";
import Carousel from "./Carousel";
import projects from "../../datas/projects"
import styles from "./Project.module.css"

function Project() {
  let cards = projects.map((project) => ({
    key: project.id,
    content: (
      <Card project = {project} />
    )
  }))
  return (
    <div id="section-projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <Carousel
        cards={cards}
        height="fit-content"
        width="70%"
        margin="auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default Project;
