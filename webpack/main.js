import './main.scss';
import './disco';

import '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

import { Terminal } from '@xterm/xterm';

const term = new Terminal();

term.open(document.getElementById('terminal'));

term.writeln("Test.");