import { Text } from "@chakra-ui/react";
import style from "../../styles/quick.module.css";
import { useFlutterwave, closePaymentModal,FlutterWaveButton } from 'flutterwave-react-v3';
import { useState , useEffect} from "react";
import { useSelector } from "react-redux";

const QuickTransfer = () => {
  const { user } = useSelector(state => state.authReducers);
  const [amount, setAmount] = useState("")
  const config = {
    public_key: 'FLWPUBK_TEST-99c33a4a6db6124913dd2b289e95f79d-X',
    tx_ref: Date.now(),
    amount: 1000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'seinde4@gmail.com',
      phonenumber: '08145405006',
      name: 'john doe',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };


  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <span className={style.onespan}>
          <Text
            fontSize={{ lg: ".9rem" }}
            style={{
              color: "#4F5B76",
              fontFamily: "Gotham",
              fontStyle: "italic",
              fontWeight: "500",
              paddingBottom: ".2rem",
              letterSpacing: "-.5px",
            }}
          >
            Amount
          </Text>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="name" placeholder="(min. N 1000)" />
        </span>
        <button className={style.quickBtn}
          
          >
            <FlutterWaveButton {...fwConfig} />
          <Text
            fontSize={{ lg: "1rem" }}
            style={{
              color: "#fff",
              fontWeight: "600",
              fontFamily: "Gotham",
            }}
          >
            Top up
          </Text>
        </button>
        <FlutterWaveButton {...fwConfig} />

      </form>
      <hr
        style={{
          width: "98%",
          background: "#D2D2D2",
          marginTop: "9rem",
          margin: "9rem 0 0 -4%",
        }}
      />
      <div
        className={style.lists}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Text
          fontSize={{ lg: ".9rem" }}
          style={{
            color: "#000000",
            fontWeight: "500",
            fontFamily: "Gotham",
            marginLeft: "-1.2rem",
          }}
        >
          PAYMENT STEPS
        </Text>
        <ul>
          <li>
            <Text
              fontSize={{ lg: ".75rem" }}
              style={{
                color: "#000000",
                fontFamily: "Gotham",
              }}
            >
              Enter the amount you want to deposit and click the "top up"
              button.
            </Text>
          </li>
          <li>
            <Text
              fontSize={{ lg: ".75rem" }}
              style={{
                color: "#000000",
                fontFamily: "Gotham",
              }}
            >
              {" "}
              You will be given a temporary transfer account (expires after
              30mins).
            </Text>
          </li>
          <li>
            <Text
              fontSize={{ lg: ".75rem" }}
              style={{
                color: "#000000",
                fontFamily: "Gotham",
              }}
            >
              Transfer money to the account via your online banking or USSD.
            </Text>
          </li>
          <li>
            {" "}
            <Text
              fontSize={{ lg: ".75rem" }}
              style={{
                color: "#000000",
                fontFamily: "Gotham",
              }}
            >
              Check your transaction history on the dashboard. Bank transfers
              generally credit within 10minutes. If the deposit doesn't credit
              within 24 hours, contact your bank.
            </Text>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default QuickTransfer;
