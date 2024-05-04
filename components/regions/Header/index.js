import classnames from "classnames/bind";
import styles from "./Header.module.scss";

//const cx = classnames.bind(styles); //which class to make conditional

const Header = () => {
    return (
        <header className={styles.header}>
            Spotify logo
            <br/>
            Top 10 artists
        </header>
    );
};
// const Header = ({children, level, marginTop, marginRight, marginBottom, marginLeft}) => {
//     const Tag = `h${level}`;

//     const headingClasses = cx({
//         heading: true,
//         [`heading--${level}`]: level,
//         [`margin-top--${marginTop}`]: marginTop,
//         [`margin-right--${marginRight}`]: marginRight,  
//         [`margin-bottom--${marginBottom}`]: marginBottom,
//         [`margin-left--${marginLeft}`]: marginLeft,  
//     });
//     return<Tag className={headingClasses}>{children}</Tag>
// };

export default Header;