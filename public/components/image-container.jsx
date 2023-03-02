import style from "../../styles/img-container.module.css"

const ImgContainer = () => {
    return(
        <div className={style.imgcontainer}>
          <p> Available Balance</p>
          <div className={style.amount} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src="/images/naira.svg" />
            <h2>25,064.00</h2>
          </div>
          <div className={style.circle1}></div>
          <div className={style.circle2}></div>
        </div>
    )
}
export default ImgContainer;