import * as React from "react";
import * as styles from './bookBlogCard.module.css'
import { Link } from "gatsby"

const BookBlogCard = (props) => {

    return (
        <div className={styles.card}>
            <img className={styles.image} src={props.details.imageUrl?.asset?.url}/>
            <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                    {props.details.title}
                </div>
                <div className={styles.cardDescription}>
                    {props.details.shortdescription}
                </div>
                <Link className={styles.readMore}>
                    Read more
                </Link>
            </div>
            
        </div>
    )
}


export default BookBlogCard
