// Router 그룹핑된 페이지에 공통 적용사항 레이아웃

import { Link, Outlet } from "react-router-dom"
import styles from './Layout.module.css'

function Layout() {
  return (
    <div className={styles.container}>
        <div className={styles.menuBox}>
          {/* 홈 화면 이동 버튼 */}
          <Link to="/">
            <div className={styles.menu}></div>
          </Link>
          {/* 내정보확인 이동 버튼 */}
          <Link to="/profile">
            <div className={styles.menu}></div>
          </Link>
          {/* 환경설정화면 이동 버튼 */}
          <Link to="/contact">
            <div className={styles.menu}></div>
          </Link>

        </div>
        <Outlet />
    </div>
    )
}

export default Layout