import {createContext, useReducer} from 'react';

const DUMMY_DATA = [
  {
    id: 'A1',
    description: 'dress for the month',
    amount: 500,
    date: new Date('29-09-2000'),
  },
  {
    id: 'A2',
    description: 'medical bill',
    amount: 380,
    date: new Date('03-12-2020'),
  },
  {
    id: 'A3',
    description: 'mobile recharge',
    amount: 299,
    date: new Date('19-06-2021'),
  },
  {
    id: 'A4',
    description: 'dress for the month',
    amount: 500,
    date: new Date('29-09-2000'),
  },
  {
    id: 'A5',
    description: 'medical bill',
    amount: 380,
    date: new Date('03-12-2020'),
  },
  {
    id: 'A6',
    description: 'mobile recharge',
    amount: 299,
    date: new Date('19-06-2021'),
  },
  {
    id: 'A7',
    description: 'dress for the month',
    amount: 500,
    date: new Date('29-09-2000'),
  },
  {
    id: 'A8',
    description: 'medical bill',
    amount: 380,
    date: new Date('03-12-2020'),
  },
  {
    id: 'A9',
    description: 'mobile recharge',
    amount: 299,
    date: new Date('19-06-2021'),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpenses: ({description, date, amount}) => {},
  deleteExpenses: id => {},
  updateExpenses: (id, {description, date, amount}) => {},
});

function expensesReducer({state, action}) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state];
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    case 'UPDATE':
      const updateTableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updateableExpense = state[updateTableExpenseIndex];
      const updateitem = {...updateableExpense, ...action.payload.data};
      const updateExpense = [...state];
      updateExpense[updateableExpense] = updateitem;
      return updateExpense;
    default:
      return state;
  }
}

function ExpenseContextProvider({children}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_DATA);

  function addExpenses(expenseData) {
    dispatch({type: 'ADD', payload: expenseData});
  }

  function deleteExpense(id) {
    dispatch({type: 'ADD', payload: id});
  }

  function updateExpense(id, expenseData) {
    dispatch({type: 'ADD', payload: {id: id, data: expenseData}});
  }
  const value = {
    expenses: expensesState,
    addExpenses: addExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>;
}

export default ExpenseContextProvider;
