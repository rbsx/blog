import React from 'react'
import Link from 'gatsby-link'
import styles from "./about-css-modules.module.css"

const User = props => 
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} />
        <div className={styles.description}>
            <h2 className={styles.username}>
                {props.username}
            </h2>
            <p className={styles.excerpt}>
                {props.excerpt}
            </p>
        </div>
    </div>

export default () => 
    <div>
        <h1> About Css Modules </h1>
        <p> they are cool </p>
        <User 
            username="Jane Smith"
            avatar = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />

        <User 
            username="Bob Smith"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
            excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />

        <Link to="/">Home</Link>
    </div>