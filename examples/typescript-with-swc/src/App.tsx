import { lazy, Suspense } from 'react';
import { ArrowFunction } from 'src/ArrowFunction';
import ClassDefault from 'src/ClassDefault';
import { ClassNamed } from 'src/ClassNamed';
import FunctionDefault from 'src/FunctionDefault';
import { FunctionNamed } from 'src/FunctionNamed';

const LazyComponent = lazy(() => import('src/LazyComponent'));

function App() {
  return (
    <div>
      <ClassDefault />
      <ClassNamed />
      <FunctionDefault />
      <FunctionNamed />
      <ArrowFunction />
      <Suspense fallback={<h1>Loading</h1>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
