import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { PlayerProvider } from './context/PlayerContext.jsx';
import { SearchProvider } from './context/SearchContext.jsx';
import { AlbumProvider } from './context/AlbumContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AlbumProvider>
       <PlayerProvider>
        <SearchProvider>
          <App />
          </SearchProvider>
          </PlayerProvider>
          </AlbumProvider>
    </BrowserRouter>
  </StrictMode>,
)
