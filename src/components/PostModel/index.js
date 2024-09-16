import styles from './PostModel.module.css';

import React from 'react';

const PostModel = ({children, fotoCapa, titulo}) => {
  return (
    <article className={styles.postModeloContainer}>
      <div className={styles.fotoCapa} style={{backgroundImage: `url(${fotoCapa})`}} />
      <h2 className={styles.titulo}>{titulo}</h2>
      <div className={styles.postConteudoContainer}>{children}</div>
    </article>
  );
};

export default PostModel;