import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Logo from './images/logo2.png';
import InventoryImg from './images/inventory_white.png';
import CustomerImg from './images/customer_white.png';
import TransactionImg from './images/trans_white.png';
import ReportImg from './images/report_white.png';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {withRouter} from 'react-router-dom';
import Inventory from './Components/Inventory';
import Dashboard from './Components/Dashboard';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MiniDrawer=(props)=>{
  const {history}=props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 const [title, setTitle] = React.useState('Dashboard');
  const itemsList=[
    {
    text:'Dashboard',
    icon:<DashboardIcon />,
    onClick:()=>{return(setTitle('Dashboard'))}
  },
  {
    text:'Inventory',
    icon:<img src={InventoryImg} alt="I" style={{ backgroundColor: 'gray', width: '20px', height: '20px' }} />,
    onClick:()=>{return(setTitle('Inventory'))}
  },
  {
    text:'Transactions',
    icon:<img src={TransactionImg} alt="I" style={{ backgroundColor: 'gray', width: '20px', height: '20px' }} />,
    onClick:()=>{return(setTitle('Transaction'),history.push('/transaction'))}
  },
  {
    text:'Customers',
    icon:<img src={CustomerImg} alt="I" style={{ backgroundColor: 'gray', width: '20px', height: '20px' }} />,
    onClick:()=>{return(setTitle('Customer'),history.push('/customer'))}
  },
  {
    text:'Report',
    icon:<img src={ReportImg} alt="I" style={{ backgroundColor: 'gray', width: '20px', height: '20px' }} />,
    onClick:()=>{return(setTitle('Report'),history.push('/report'))}
  }
];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{backgroundColor:'#C81856'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>{title}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <img src={Logo} alt="logo" style={{ width: '150px', height: '50px',marginLeft:'-70%'}} /> : <img src={Logo} alt="logo" style={{width: '150px', height: '50px',marginLeft:'-70%' }} />}
          </IconButton>
        </div>
  
  <List>
{
  itemsList.map((item,index)=>{
    const {text,icon,onClick}=item;
    return(
      <ListItem button key={text} onClick={onClick}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={text}/>
      </ListItem>
    );
  })
}
        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
  {title==='Inventory'?<Inventory/>:<Dashboard/>}
      </main>
    </div>
  );
}

export default withRouter(MiniDrawer);