import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const personalityType = {
  title: 'バランス重視型イノベーター',
  description:
    '新しいアイデアや可能性を追求しながらも、生活との調和を大切にするタイプです。社会への貢献を意識しつつ、持続可能な方法で自己成長を目指します。',
  highlights: [
    '創造的思考と実践的アプローチのバランスが取れている',
    '長期的な視点で自己成長を計画できる',
    '他者との協調性が高く、チームでの活動に適している',
    '変化に対して柔軟に対応できる',
  ],
  strengths: ['創造性', 'バランス感覚', '協調性'],
  weaknesses: ['完璧主義的な傾向', '優先順位付けの難しさ'],
};

export default function PersonalityType() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{personalityType.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{personalityType.description}</p>
        <ul>
          {personalityType.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
        <div>
          <h3>Strengths</h3>
          {personalityType.strengths.map((strength, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-green-100 text-green-800"
            >
              {strength}
            </Badge>
          ))}
        </div>
        <div>
          <h3>Weaknesses</h3>
          {personalityType.weaknesses.map((weakness, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-red-100 text-red-800"
            >
              {weakness}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
