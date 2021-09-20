import React from 'react';
import { render } from 'react-dom';

import TodoList from 'src/components/TodoList';

const rootReactElement = <TodoList />;

const target = document.getElementById('root');

render(rootReactElement, target);
