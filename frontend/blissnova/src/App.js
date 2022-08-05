import Navbar from 'components/Navbar'
import Rightbar from 'components/Rightbar';
import Sidebar from 'components/Sidebar';
import Details from 'containers/Details'
import Explore from 'containers/Explore'
import Feed from 'containers/Feed'
import Login from 'containers/Login'
import Add from 'containers/Add'
import Notifications  from 'containers/Notifications'
import Profile from 'containers/Profile'
import Registration from 'containers/Registration'
import {Box,Stack} from '@mui/material'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {useSelector} from 'react-redux'

function App() {

  const {isAuthenticated} = useSelector(state => state.user)
  return (

    <Box>
      
         <Router>

    <Switch>
    
    <Route path ="/login" >
    <Login/>
    </Route>

    <Route path ="/registration" >
    <Registration/>
    </Route>

      

  {isAuthenticated ? <>

    <Navbar/>
    <Stack direction="row" justifyContent="space-between">
    <Sidebar/>
    <Route exact path ="/" >
    <Feed/>
    </Route>
    
    <Route path ="/details" >
    <Details/>
    </Route>
    <Route path ="/profile" >
    <Profile/>
    </Route>
    <Route path ="/explore" >
    <Explore/>
    </Route>
    <Route path ="/notification" >
    <Notifications/>
    </Route>
    <Rightbar/>
    </Stack>
    <Add/>

    </>: <Login/>}
    
    </Switch>
    </Router>
   
    
    </Box>

    
   
  );
}

export default App;
