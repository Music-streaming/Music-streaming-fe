import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

import { PlayerProvider } from './context/PlayerContext.jsx';
import { SearchProvider } from './context/SearchContext.jsx';
import { AlbumProvider } from './context/AlbumContext.jsx';
import { SongProvider } from './context/SongContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PlayerProvider>
        <AuthProvider>
          <AlbumProvider>
            <SongProvider>
              <SearchProvider>
                <App />
              </SearchProvider>
            </SongProvider>
          </AlbumProvider>
        </AuthProvider>
      </PlayerProvider>
    </BrowserRouter>
  </StrictMode>
);
