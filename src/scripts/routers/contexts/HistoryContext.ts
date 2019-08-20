import {History} from 'history';
import * as React from 'react';

const HistoryContext = React.createContext<History>(null!);
const {Provider, Consumer} = HistoryContext;

export default HistoryContext;
export {Provider, Consumer};
