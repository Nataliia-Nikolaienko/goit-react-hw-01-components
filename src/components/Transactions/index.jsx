import TransactionListItem from './TransactionListItem';
import css from './Transactions.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionListItem
          id={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </table>
  );
};

export default TransactionHistory;
