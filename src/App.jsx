import Routes from './routes';
import './App.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
    return <Routes />
}
<SpeedInsights />
{/* ... */}
<Analytics />

export default App
