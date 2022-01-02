import styles from './video.module.css'

const Video = ({videoId}) => {
  return (  
    <div className={styles.container}>
      <iframe 
        className={styles.video}
        type="text/html"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0" allowFullScreen />
    </div>
  );
}
 
export default Video;