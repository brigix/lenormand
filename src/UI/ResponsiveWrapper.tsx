import React from 'react'
import styles from "./styles.module.css";

const ResponsiveWrapper = (props: any) => {
  return (
    <div className={styles.styledWrapper}>{props.children}</div>
  )
}

export default ResponsiveWrapper;