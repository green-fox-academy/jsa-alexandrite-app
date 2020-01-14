import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { AreaChart } from 'react-native-svg-charts';
import {
  Circle,
} from 'react-native-svg';
import * as shape from 'd3-shape';
import PropTypes from 'prop-types';
import { fetchHistoryChartData } from '../../redux/stock/actionCreator';

const Decorators = ({
  x, y, data, onPress, isIncreasing,
}) => data.map((value, index) => (
  <Circle
    key={value.date}
    cx={x(index)}
    cy={y(value.value)}
    r={4}
    stroke={isIncreasing ? '#7DE892' : '#E87D7D'}
    fill="white"
    onPress={() => onPress(value)}
  />
));

const PerformanceChart = ({ range, symbol, onPress }) => {
  const dispatch = useDispatch();
  const {
    historicalData: data,
  } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(fetchHistoryChartData(symbol, range));
  }, [range]);

  const isIncreasing = data.length ? (data[data.length - 1].value >= data[0].value) : false;

  return (
    <>
      <AreaChart
        animate
        yAccessor={({ item }) => item.value}
        data={data}
        style={{
          flex: 1,
          height: 250,
          borderBottomColor: '#eee',
          borderBottomWidth: 1,
        }}
        contentInset={{
          top: 10,
          bottom: 30,
          left: 6,
          right: 6,
        }}
        numberOfTicks={data.length}
        curve={shape.curveNatural}
        svg={{
          fill: isIncreasing ? '#7DE89233' : '#FFB5B533', stroke: isIncreasing ? '#7DE892' : '#E87D7D', strokeWidth: 3,
        }}
      >
        <Decorators onPress={onPress} isIncreasing={isIncreasing} />
      </AreaChart>
    </>
  );
};

PerformanceChart.propTypes = {
  range: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default PerformanceChart;
