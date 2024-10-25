import logo from './logo.svg';
import { useState } from 'react';
import {AppBar,List,ListItem,Toolbar, Typography,Drawer} from '@mui/material';
import './App.css';
import InvoiceDetailComponent from './InvoiceDetailComponent';
import InvoiceListComponent from './InvoiceListComponent';

function App() {
  const [view,setView] = useState("list")
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" > Invoice App</Typography>
        </Toolbar>
      </AppBar>
      <Drawer varient="permanant">
        <List>
          <ListItem button onClick={()=>setView('list')}>
            Invoices
          </ListItem>
        </List>
      </Drawer>
      <main>
        {view === 'list' ? <InvoiceListComponent setView={setView} /> : <InvoiceDetailComponent setView={setView} />}
      </main>
    </div>
  );
}

export default App;
