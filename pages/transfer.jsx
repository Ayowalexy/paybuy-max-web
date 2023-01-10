import Layout from "../public/components/layout.pages";
import style from "../styles/transfer.module.css";
import Beneficiaries from "../public/components/beneficiaries";
import TransferForm from "../public/components/transfer-form";
const Transfer = () => {
  return (
    <Layout>
      <div className={style.transferContainer}>
      <p>Beneficiaries</p>
      <Beneficiaries/>
      <TransferForm />
      </div>
    </Layout>
  );
};
export default Transfer;
