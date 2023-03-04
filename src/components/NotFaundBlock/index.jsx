import React from "react";
import styles from './NotFaundBlock.module.scss'

console.log(styles)
const NotFaundBlock = ()=>{
    return(
        <div className={styles.root}>Пипец!<br/> 
            <span className={styles.rtn}>
              Ничего не найдено по этому адресу.<br/>
              К сожалению, на нашем сайте нет такой страницы :-(
            </span>
        </div>
    )
}
export default NotFaundBlock;