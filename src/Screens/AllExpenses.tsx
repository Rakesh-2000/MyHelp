import { View, Text } from 'react-native'
import {useContext} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput'
import { ExpenseContext } from '../Store/Store'

const AllExpenses = () => {
  const ExpenseCtx = useContext(ExpenseContext);
  return <ExpenseOutput  expense={ExpenseCtx} expensePeriod='Total'/>
}

export default AllExpenses