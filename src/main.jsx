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
      <AuthProvider>
        <SongProvider>
          <AlbumProvider>
            <PlayerProvider>
              <SearchProvider>
                <App />
              </SearchProvider>
            </PlayerProvider>
          </AlbumProvider>
        </SongProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
