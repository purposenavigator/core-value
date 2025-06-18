import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const data = [
  {
    value: 'ワークライフバランス',
    あなた: 4.5,
    同年代平均: 3.8,
    全体平均: 3.5,
  },
  {
    value: '自己成長',
    あなた: 4.0,
    同年代平均: 3.5,
    全体平均: 3.2,
  },
  {
    value: '社会貢献',
    あなた: 3.8,
    同年代平均: 3.2,
    全体平均: 3.0,
  },
];

export default function ValueComparison() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>比較分析</CardTitle>
          <CardDescription>
            あなたの価値観を同年代および全体平均と比較した結果です
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="value" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="あなた" fill="#8884d8" />
                <Bar dataKey="同年代平均" fill="#82ca9d" />
                <Bar dataKey="全体平均" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
