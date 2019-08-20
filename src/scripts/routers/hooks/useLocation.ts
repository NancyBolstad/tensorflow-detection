import {History} from 'history';
import * as React from 'react';

function useLocation(history: History<any>) {
  const [location, setLocation] = React.useState(history.location);
  React.useEffect(() => {
    const unlisten = history.listen(l => setLocation(l));
    return () => unlisten();
  }, [history]);
  return location;
}

export default useLocation;
