import PropTypes from 'prop-types';
import css from './Transactions.module.css';

const TransactionListItem = ({ id, type, amount, currency }) => {
  return (
    <tbody className={css.body}>
      <tr key={id}>
        <td className={css.type}>{type}</td>
        <td className={css.amount}>{amount}</td>
        <td className={css.currency}>{currency}</td>
      </tr>
    </tbody>
  );
};

TransactionListItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionListItem;
