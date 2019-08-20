import * as React from 'react';

import HistoryContext from '../contexts/HistoryContext';

function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const history = React.useContext(HistoryContext);
  const handleClick = React.useCallback(
    (ev: React.MouseEvent<HTMLAnchorElement>) => {
      ev.preventDefault();
      history.push(props.href!);
    },
    [history, props.href]
  );

  return <a onClick={handleClick} {...props} />;
}

export default Link;
