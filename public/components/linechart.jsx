import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 800,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 500,
    pv: 9800,
    amt: 2290,
  },
   {
    name: 'Page D',
    uv: 800,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page E',
    uv: 1500,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page F',
    uv: 1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page G',
    uv: 500,
    pv: 9800,
    amt: 2290,
  },
];

const Chart = () => {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke="#F23985" fill="#ffffff" strokeWidth={1.4} />
        </AreaChart>
      </ResponsiveContainer>
    );
}

export default Chart;