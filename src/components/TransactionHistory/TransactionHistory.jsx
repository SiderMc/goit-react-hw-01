import css from "./TransactionHistory.module.css"

export default function Transactions({transactions}){
    return <table className={css.table}>
    <thead className={css.table__header}>
      <tr className={css.table__row}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(({id,type,amount,currency})=>(
      <tr key={id} className={css.table__row}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
      ))}
    </tbody>
  </table>
  
}