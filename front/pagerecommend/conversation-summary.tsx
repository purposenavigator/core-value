import { Alert } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Summary } from '@/types/Summary';
import React from 'react';

const summaries: Summary[] = [
  {
    title: '理想の働き方について',
    summary:
      '会話を通じて、ワークライフバランスを重視しながらも、自己成長と社会貢献を大切にする価値観が浮かび上がりました。特に、柔軟な働き方と継続的な学習機会を重視する傾向が強く見られます。',
    highlights: [
      '仕事と私生活のバランスを重視',
      '自己成長の機会を求める姿勢',
      '社会への貢献意識が高い',
    ],
  },
];

export default function ConversationSummary() {
  return (
    <ScrollArea>
      {summaries.map((summary, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{summary.title}</CardTitle>
          </CardHeader>
          <CardContent>{summary.summary}</CardContent>
          <Alert>{summary.highlights.join(', ')}</Alert>
        </Card>
      ))}
    </ScrollArea>
  );
}
