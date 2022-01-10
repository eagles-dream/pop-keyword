import { useRef, useState } from 'react';
import Video from './video';
import styles from './youtube.module.css'

const Youtube = ({youtubeArr}) => {
  //console.log(youtubeArr)
  const [videoId, setVideoId] = useState(null)
  const playerRef = useRef()
  const goToPlayer = () => {
    playerRef.current.scrollIntoView({ behavior: 'smooth', block: "center" })
  }

  return (  
    <div className={styles.container}>
      <div className={styles.title}>인기 YouTube TOP10</div>      
      <div ref={playerRef}>{ videoId && <Video videoId={videoId} /> }</div>
      <div className={styles.list}>
        <div className={styles.left}>
          {
            youtubeArr.slice(0, 5).map((a, i)=>{
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
        <div className={styles.right}>
          {
            youtubeArr.slice(5, 10).map((a, i)=>{
              return (
                <div className={styles.card} 
                    key={i} 
                    onClick={()=>{
                      setVideoId(a.id);
                      goToPlayer();
                    }}>
                  <img className={styles.img} alt="youtube" src={a.snippet.thumbnails.default.url}></img>
                  <div className={styles.order}>
                    <span className={styles.number}>인기 {i+6}위</span>
                    <span className={styles.text}>{a.snippet.title}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
 
export default Youtube;