"use client"; // Mark this as a client component
export const dynamic = 'force-dynamic'; // Ensure this page is dynamically rendered

import * as React from 'react';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { videoCodecs } from 'livekit-client';
import { VideoConferenceClientImpl } from './VideoConferenceClientImpl';
import { isVideoCodec } from '@/lib/types';

function CustomRoomContent() {
  const searchParams = useSearchParams();
  const liveKitUrl = searchParams.get('liveKitUrl');
  const token = searchParams.get('token');
  const codecParam = searchParams.get('codec');

  if (typeof liveKitUrl !== 'string') {
    return <h2>Missing LiveKit URL</h2>;
  }
  if (typeof token !== 'string') {
    return <h2>Missing LiveKit token</h2>;
  }

  const codec = codecParam && isVideoCodec(codecParam) ? codecParam : undefined;

  if (codecParam !== null && !isVideoCodec(codecParam)) {
    return <h2>Invalid codec, if defined it has to be [{videoCodecs.join(', ')}].</h2>;
  }

  return (
    <main data-lk-theme="default" style={{ height: '100%' }}>
      <VideoConferenceClientImpl liveKitUrl={liveKitUrl} token={token} codec={codec} />
    </main>
  );
}

export default function CustomRoomConnection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomRoomContent />
    </Suspense>
  );
}