import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ValueAnalysis from './value-analysis';
import GeneratedImage from './generated-image';
import ConversationSummary from './conversation-summary';
import ValueNetwork from './value-network';
import ValueTimeline from './value-timeline';
import ValueComparison from './value-comparison';
import PersonalityType from './personality-type';
import ValueRadar from './value-radar';
import React from 'react';

export default function AnalysisPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">会話分析結果</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>分析サマリー</CardTitle>
          </CardHeader>
          <CardContent>
            <ConversationSummary />
          </CardContent>
        </Card>

        <Tabs defaultValue="values" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="values">価値観分析</TabsTrigger>
            <TabsTrigger value="network">相関関係</TabsTrigger>
            <TabsTrigger value="timeline">時系列変化</TabsTrigger>
            <TabsTrigger value="comparison">比較分析</TabsTrigger>
            <TabsTrigger value="personality">タイプ分析</TabsTrigger>
            <TabsTrigger value="visualization">ビジュアル</TabsTrigger>
          </TabsList>

          <TabsContent value="values">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>価値観の詳細分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <ValueAnalysis />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>価値観レーダーチャート</CardTitle>
                </CardHeader>
                <CardContent>
                  <ValueRadar />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="network">
            <Card>
              <CardHeader>
                <CardTitle>価値観の相関関係</CardTitle>
              </CardHeader>
              <CardContent>
                <ValueNetwork />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle>価値観の時系列変化</CardTitle>
              </CardHeader>
              <CardContent>
                <ValueTimeline />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparison">
            <Card>
              <CardHeader>
                <CardTitle>他のユーザーとの比較</CardTitle>
              </CardHeader>
              <CardContent>
                <ValueComparison />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="personality">
            <Card>
              <CardHeader>
                <CardTitle>パーソナリティタイプ分析</CardTitle>
              </CardHeader>
              <CardContent>
                <PersonalityType />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="visualization">
            <Card>
              <CardHeader>
                <CardTitle>AI生成イメージ</CardTitle>
              </CardHeader>
              <CardContent>
                <GeneratedImage />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
