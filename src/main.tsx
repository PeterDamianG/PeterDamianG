import { render } from 'preact';
import App from './App';
import './styles/themes.css';
import './styles/globals.css';

// Inicializar tema antes del primer paint para evitar flash
const savedTheme = localStorage.getItem('theme') ?? 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

render(<App />, document.getElementById('app') as HTMLElement);
