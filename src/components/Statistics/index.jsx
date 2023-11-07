import PropTypes from 'prop-types';
import css from './Statistic.module.css';

const Statistics = ({ stats }) => {
  return (
    <ul className={css.statelist}>
      {stats.map(stats => (
        <li key={stats.id} className={css.item}>
          <span className={css.label}>{stats.label}:</span>
          <span className={css.percentage}>{stats.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypesv = {
  stats: PropTypes.object.isRequired,
};

export default Statistics;
