"use client";
export const dynamic = 'force-dynamic';

import * as React from 'react';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PageClientImpl } from './PageClientImpl';
import { isVideoCodec } from '@/lib/types';

function RoomContent() {
  const searchParams = useSearchParams();
  const roomName = searchParams.get('roomName') || 'defaultRoom';
  const region = searchParams.get('region') || undefined;
  const codecParam = searchParams.get('codec');
  const codec = codecParam && isVideoCodec(codecParam) ? codecParam : 'vp9';
  const hq = searchParams.get('hq') === 'true';

  return (
    <PageClientImpl roomName={roomName} region={region} hq={hq} codec={codec} />
  );
}

export default function RoomPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RoomContent />
    </Suspense>
  );
}