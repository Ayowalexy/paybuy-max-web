import styles from "../../styles/layout.styles.module.css";
import Sidebar from "./sidebar";
import Header from "./header";
const Layout = ({ children }) => {
  return (
    <div className={styles.LayoutContainer}>
      <Sidebar />
      <div className={styles.box}>
        <Header />
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};
export default Layout;
