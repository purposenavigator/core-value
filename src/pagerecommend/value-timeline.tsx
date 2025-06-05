'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export function ValueTimeline() {
  // サンプルデータ
  const data = [
    { date: '会話開始', ワークライフバランス: 3, 自己成長: 4, 社会貢献: 2 },
    { date: '中盤', ワークライフバランス: 4, 自己成長: 4, 社会貢献: 3 },
    { date: '終盤', ワークライフバランス: 5, 自己成長: 4, 社会貢献: 4 },
  ];

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="ワークライフバランス"
            stroke="#8884d8"
          />
          <Line type="monotone" dataKey="自己成長" stroke="#82ca9d" />
          <Line type="monotone" dataKey="社会貢献" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
