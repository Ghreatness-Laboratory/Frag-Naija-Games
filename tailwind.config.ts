import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'], theme: { extend: { colors: { naija: { green: '#16a34a', dark: '#020617' } } } }, plugins: [] };
export default config;
