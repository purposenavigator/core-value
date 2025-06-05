import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import React from 'react';

const values = [
  {
    id: '1',
    title: 'ワークライフバランス',
    highlights: [
      '「家族との時間を大切にしたい」という発言',
      '柔軟な勤務時間への強い関心',
      '休暇の取得しやすさを重視する姿勢',
    ],
    importance: 'high',
  },
  {
    id: '2',
    title: '自己成長',
    highlights: [
      '新しいスキル習得への意欲的な態度',
      'キャリア開発に関する具体的な計画の言及',
      '学習機会を重視する発言',
    ],
    importance: 'medium',
  },
  {
    id: '3',
    title: '社会貢献',
    highlights: [
      '社会的影響力のある仕事への興味',
      '地域コミュニティへの参加意欲',
      '環境問題への関心',
    ],
    importance: 'high',
  },
];

const importanceColor = {
  high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  medium:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
};

export default function ValueAnalysis() {
  return (
    <Accordion>
      {values.map((item) => (
        <AccordionItem key={item.id} title={item.title}>
          <div>
            {item.highlights.map((highlight, index) => (
              <p key={index}>{highlight}</p>
            ))}
            <Badge
              variant="secondary"
              className={importanceColor[item.importance]}
            >
              {item.importance}
            </Badge>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
