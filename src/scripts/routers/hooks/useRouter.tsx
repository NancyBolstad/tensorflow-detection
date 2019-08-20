import {History} from 'history';
import * as React from 'react';
import UniversalRouter, {Routes} from 'universal-router';

import useLocation from '../hooks/useLocation';

function useRouter(routes: Routes<any, {default: React.ComponentType}>, history: History<any>) {
  const location = useLocation(history);
  const router = React.useMemo(() => new UniversalRouter(routes), [routes]);
  const [Component, setComponent] = React.useState<any>('div');

  React.useEffect(() => {
    const LazyComponent = React.lazy(() => router.resolve(location.pathname));
    setComponent(() => LazyComponent);
  }, [location]);

  return Component;
}

export default useRouter;
