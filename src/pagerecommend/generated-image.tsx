'use client';

import { useState } from 'react';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { generateImage } from './actions';

export default function GeneratedImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = await generateImage();
      setImageUrl(url);
    } catch (error) {
      setError('画像生成エラー:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Image</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={handleGenerateImage} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Image'}
        </Button>
        {error && <p>{error}</p>}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Generated"
            width={600}
            height={400}
            layout="responsive"
          />
        )}
      </CardContent>
    </Card>
  );
}
