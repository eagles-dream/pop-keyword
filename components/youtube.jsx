import { useRef, useState } from 'react';
import Video from './video';
import styles from './youtube.module.css'

const Youtube = ({youtubeArr}) => {
  //console.log(youtubeArr)
  const [videoId, setVideoId] = useState(null)
  const playerRef = useRef()
  const goToPlayer = () => {
    playerRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (  
    <div className={styles.container}>
      <div className={styles.title}>인기 Youtube</div>      
      <div ref={playerRef}>{ videoId && <Video videoId={videoId} /> }</div>
      {
        youtubeArr.map((a, i)=>{
          return (
            <div className={styles.card} 
                 key={i} 
                 onClick={()=>{
                   setVideoId(a.id);
                   goToPlayer();
                 }}>
              <img className={styles.img} alt="youtube" src={a.snippet.thumbnails.default.url}></img>
              <div className={styles.order}>
                <span className={styles.number}>인기 {i+1}위</span>
                <span className={styles.text}>{a.snippet.title}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
 
export default Youtube;