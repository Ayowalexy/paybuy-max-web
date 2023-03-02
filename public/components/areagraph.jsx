import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import style from "../../styles/areagraph.module.css"

const data = [
  {
    name: 'Page A',
    uv: 500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 350,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AreaGraph = () => {
    return (
     <ResponsiveContainer height="60%">
     <AreaChart
       data={data}
       margin={{
         top: 50,
         right: 30,
         left: 30,
         bottom: 0,
       }}
     >
       <CartesianGrid strokeDasharray="0 0" vertical={false} />
       <XAxis dataKey="name" strokeWidth="0" horizontal={false} />
       <YAxis strokeWidth="0" vertical={false} />
       <Tooltip />
       <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="transparent" />
     </AreaChart>
   </ResponsiveContainer>
    );
  }
  export default AreaGraph;
