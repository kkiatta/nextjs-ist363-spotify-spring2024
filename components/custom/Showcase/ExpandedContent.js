import {motion} from "framer-motion";

import ButtonUI from "@/components/html/ButtonUI";
import Container from "@/components/layout/Container";
import Grid from '../../layout/Grid';
import Heading from "@/components/html/Heading";

import styles from "./Showcase.module.scss";
import { useState } from "react";

const ShowcaseExpandedContent = ({
    activeIndex, 
    albums, 
    items, 
    setIsExpanded 
}) => {
    const [isGridVisible, setIsGridVisible] = useState(false);
    const topVariants = {
        initial: {
            y: 100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.75,
                duration: 0.25,
                ease: "linear"
            }
        },
        exit : {
            y: 100,
            opacity: 0
        }
        }

    return (
    <section className={styles.showcase__expanded__content}>
        <ButtonUI icon="faXmark" clickHandler={() => {
            setIsExpanded(false)
        }}/>
        <motion.div className={styles.showcase__expanded__content__top}
        variants={topVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        >
        <h2 className={styles.showcase__artist__name}>{items[activeIndex].name}</h2>
        <ButtonUI 
        label="View albums"  
        icon="faAngleDown" 
        clickHandler={() => {
            //find the #bottomContent element and scroll to it
            const slideTarget = document.getElementById("bottomContent");
            slideTarget.scrollIntoView({ behavior: "smooth"});

            setIsGridVisible(true);
        }} 
        />
        </motion.div>
        <div className={styles.showcase__expanded__content__bottom} id="bottomContent">
            <Container>
            <Heading level={2} marginBottom={2} marginTop={4}>Albums</Heading>
            {isGridVisible && <Grid items={albums} />}
            </Container>
            </div>
        </section>
    );
}

export default ShowcaseExpandedContent;