import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    MdCheckCircle,
    MdSettings
} from '@chakra-ui/react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currenciesList, newWallet, userWallet} from '../redux/wallet/thunk-action';
import { useRouter } from 'next/router';


const CurrencyList = ({setOpen}) => {
    const router = useRouter()
    const dispatch = useDispatch();
    const { currencies, createWallet} = useSelector(state => state.walletReducers)
    
    const addData =  async (id) => {
        const obj = {
            currency_id: id.toString()
        }
       await dispatch(newWallet(obj)).then(res => {
        if(res.meta.requestStatus=== "fulfilled"){
            dispatch(userWallet())
            setOpen(false)
        }
       })

    }
    useEffect(() => {
        dispatch(currenciesList())
    }, [])
    console.log('createwallet', createWallet)
    // console.log("currencies", currencies)
    return (
        <OrderedList>
            {currencies?.map((element) => (
                <ListItem style={{cursor: "pointer", paddingTop: ".4rem"}} onClick={() => addData(element.id)}>{element.name}</ListItem>
            ))}
        </OrderedList>
    )
}
export default CurrencyList;