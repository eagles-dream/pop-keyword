import styles from './openmodal.module.css'
import Script from 'next/script';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const OpenModal = ({show, handleClose, handleShow}) => {
  return(
    <div className={styles.container}>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className={styles.title}>네이버 메뉴에  추가하기</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.body_top}><p>1.</p><p className={styles.text}>아래 버튼을 클릭하시면 네이버 메뉴에 본 서비스를 추가하실 수 있습니다.</p></div>
          <Script type="text/javascript" src="https://openmain.pstatic.net/js/openmain.js" />
          <div className={styles.open_main}>
            <div className="nv-openmain" data-title="인기검색어" data-url="http://localhost:3000" data-type="W2"></div>
          </div>
          <div className={styles.body_bottom}><p>2.</p><p className={styles.text}>메뉴 추가후 네이버 메뉴에서 본 서비스의 순서를 원하는 위치로 변경하실 수 있습니다.</p></div>          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
      <div className={styles.plus} onClick={handleShow}><i className="fas fa-plus-circle"></i></div>
    </div>
  )
}

export default OpenModal;