import React from "react";
import AlbumCard from './AlbumCard';
import AlbumList from './AlbumList';
import GenrePicker from './GenrePicker'; 
import MainContent from './MainContent';
import MenuLinks from './MenuLinks'; 
import Search from './Search';
import SideMenu from './SideMenu'; 
import TopMenu from './TopMenu';

function App() {
  return ( 
   <div className="app-container">
     <AlbumCard />
     <AlbumList />
     <GenrePicker />
     <MainContent />
     <MenuLinks />
     <Search />
     <SideMenu />
     <TopMenu />
  </div>
  );
}

export default App;
