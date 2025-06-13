import Routes from './routes';
import './App.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { MapProvider } from './hooks/MapContext';

function App() {
    return (
        <MapProvider apiKey={import.meta.env.VITE_APEX_API}>
            <Routes />
            <SpeedInsights />
            <Analytics />
        </MapProvider>
    );
}

export default App;

