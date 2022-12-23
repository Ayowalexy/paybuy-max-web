import { useActive } from "../context/active.context";
import navigation from "../navigation";
import { useTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import styles from "../../styles/sidebar.module.css"
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
const Sidebar = () => {
  const theme = useTheme();
  const {secondary, orange} = theme.colors.brand;
  const router = useRouter();
  const {active, setActive} = useActive();
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/images/logo.png" />
      </div>
      <div className= {styles.navList}>
      <List spacing={7} style={{width: "100%", display: "flex", flexDirection: "column", alignItems:"center", justifyContent: "center"}}>
        {navigation.map((link, idx) => (
          <div key={idx} style={{width: "95%", marginLeft: "5%"}} onClick={() =>  {
            setActive(link.name)
            router.push(link.route)
          }}>
              <ListItem  className={active === link.name ? styles.active : styles.items}>
                <ListIcon as={link.icon} style={{color: active !== link.name ? secondary : orange}} className={styles.icon} />
                <p className= {styles.linkName} style={{color : active === link.name ? orange : "#fff"}}>{link.name}</p>
              </ListItem>
          </div>
        ))}
        </List>
      </div>
    </div>
  );
};
export default Sidebar;
