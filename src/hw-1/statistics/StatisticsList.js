import React from "react";
import PropTypes from "prop-types";
import Statistics from "./Statistics";
import styles from './StatisticsList.module.css';

const StatisticsList = ({ stats, title }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statlist}>
      {stats.map(dat => (
        <Statistics id={dat.id} label={dat.label} percentage={dat.percentage} />
      ))}
    </ul>
  </section>
);

StatisticsList.defaultProps = {
  title: "",
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default StatisticsList;
