import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from './styles';


class ErrorsRate extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    errors: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div style={styles.content}>
        <h4>Errors Rate</h4>
        Total Count: {this.props.errors}
        <LineChart
          width={500}
          height={300}
          data={this.props.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#82ca9d" />
        </LineChart>
      </div>
    );
  }
}


export default ErrorsRate;
