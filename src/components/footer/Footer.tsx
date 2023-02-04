import { Component } from 'solid-js';
import './Footer.scss';

const Footer: Component = () => (
    <footer>
        <a href="https://github.com/qdelettre/vitejs-solidjs-picocss" target="_blank" class="secondary">
            Made with <span class="heart">♡</span> with Vite, SolidJS & PicoCss, by Quentin Delettre
        </a>
    </footer>
);

export default Footer;
