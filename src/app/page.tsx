import React, { Suspense } from 'react';
const MonacoEditor = React.lazy(()=>import('../_components/MomacoEditor'))
export default function Home() {

  return (
    <main className='h-screen'>
      <Suspense fallback={<div> Editor Loading</div>}>
        {/* <MonacoEditor/>  */}
      </Suspense>
    </main>
  );
}
