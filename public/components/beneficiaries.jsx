import style from "../../styles/beneficiaries.module.css";
const Beneficiaries = () => {
  return (
    <div className={style.beneficiaries}>
      <div className={style.beneficiary}>
        <div className={style.choose}>
          <p>Choose Beneficiary</p>
        </div>
      <div className={style.avatar}>
        {[1, 2, 3, 4].map((img, idx) => (
          <div className={style.avatarImg}>
            <img key={idx} src="/images/Ellipse 49.svg" />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};
export default Beneficiaries;
