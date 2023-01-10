import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 200,
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
    uv: 400,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 600,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 400,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 1000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 700,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page H',
    uv: 900,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page I',
    uv: 500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page J',
    uv: 500,
    pv: 4300,
    amt: 2100,
  },
];

const GraphData = () => {
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
          <Area type="monotone" dataKey="uv" stroke="#F2921B" fill="#ffffff" strokeWidth="1.3" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
  export default GraphData;