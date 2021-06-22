import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,CartesianAxis } from 'recharts';
const data = [
  {
    name: 'JAN',
    amount: 4000,
  },
  {
    name: 'FEB',
    amount: 9800,
  },
  {
    name: 'MAR',
    amount: 11000,
  },
  {
    name: 'APR',
    amount: 12500,
  },
  {
    name: 'MAY',
    amount: 13000,
  },
  {
    name: 'JUN',
    amount: 9800,
  },
  {
    name: 'JUL',
    amount: 9000,
  },
  {
    name: 'AUG',
    amount: 6000,
  },
];
export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  formatYAxis = (tickItem) =>{
    return `${tickItem / 1000}K` 
  }
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}
            margin={{ top: 27, right: 0, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FA4A84" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#fff" stopOpacity={0}/>
                </linearGradient>
            </defs>

            <XAxis dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                padding={{ left: 20, right:5 }} 
                tickMargin={27} 
                height={40}
            />
            <YAxis domain={[0, 'dataMax + 7000']} 
                width={30} 
                padding={{ top: 0,right:0, left:0, bottom:0 }} 
                axisLine={false} tickLine={false} 
                tickFormatter={this.formatYAxis}
            />
            <CartesianGrid vertical={false} height={1}/>
            <Tooltip 
                cursor={{ stroke: '#fa4a84', strokeWidth: 1 }}
            />
            <Area type="monotone" 
                dataKey="amount"  
                stroke="#FA4A84" 
                fillOpacity={1} 
                fill="url(#colorUv)" 
                dot={true} 
                activeDot={{ stroke: 'rgba(250,74,123,.43)', strokeWidth: 5, r: 4 }}  
                animationDuration={3000} 
            />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
