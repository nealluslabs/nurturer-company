import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
//import Layout from "../components/layout";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Box, Typography, Paper, Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, TablePagination, IconButton, tableCellClasses } from '@mui/material';
import { useNavigate,Link } from 'react-router-dom';
import CJobList from "../components/home/c-job-list";
import { getJobs, getOrders } from "../redux/actions/job.action";
import {Skeleton} from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import { styled } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

// Firestor DB
import { db } from "src/config/firebase";


const theme = createTheme();

// Pagination component (copied from c-job-list)
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

// Styled table cell (copied from c-job-list)
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#000000',
    color: theme?.palette?.common?.white || '#ffffff',
    width: '25%',
    textAlign: 'center',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    width: '25%',
    textAlign: 'center',
  },
}));


export default function CJobs() {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);
  const [jobArr, setJobArr] = useState(jobs);
  const [testData, setTestData] = useState();
  const [contactsData, setContactsData] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [contactsPage, setContactsPage] = useState(0);
  const [contactsRowsPerPage, setContactsRowsPerPage] = useState(5);
  const navigate = useNavigate()

  //const { userDetails, error,message, isLoading } = useSelector((state) => state.loggedIn);
    
   /* useEffect(() => {
      console.log(userDetails)
     if(userDetails === '' ){
       
        navigate('/login')
        
      }
       
       
    }, [])*/

    const [state, setState] = useState({
      series: [{
        data: [700, 240, 748, 470, 590, 680, 800]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 250,
          toolbar: {
            show: false
          },
          background: 'transparent',
          // background: '#fff',
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
            dataLabels: {
              position: 'top',
              style: {
                colors: ['#ffffff'],
              },
            },
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        },
        colors: ['#000000', '#F97D0B', '#F97D0B', '#F97D0B', '#F97D0B', '#F97D0B', '#F97D0B']
      }
    });

    // Function to get last 7 months dynamically
  const getLastSevenMonths = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();
    let currentMonthIndex = date.getMonth(); // Subtract 1 month

    if (currentMonthIndex < 0) {
      currentMonthIndex = 11; // Handle case when index goes negative (December of the previous year)
    }

    let lastSevenMonths = [];
    for (let i = 0; i < 7; i++) {
      lastSevenMonths.unshift(months[currentMonthIndex]);
      currentMonthIndex = (currentMonthIndex - 1 + 12) % 12; // Move backwards and loop around
    }

    return lastSevenMonths;
  };

  // Update state with dynamic categories on component mount
  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      options: {
        ...prevState.options,
        xaxis: {
          ...prevState.options.xaxis,
          categories: getLastSevenMonths(),
        },
      },
    }));
  }, []);
 
 
 
 useEffect(() => {
  dispatch(getOrders());  
   dispatch(getJobs());  
   setTimeout(setJobArr(jobs), 1000);
  }, [])

  useEffect( () => {
    const fetchData = async () => {
      try {
          const snapshot = await db.collection("users").get();
          const items = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("this would display all the users available on the system!");
          console.log(items);
          setTestData(items);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

    fetchData();
  }, [] )

  // Fetch contacts data
  useEffect(() => {
    const fetchContactsData = async () => {
      try {
        setLoadingContacts(true);
        const snapshot = await db.collection("contacts").get();
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Contacts data fetched:", items);
        setContactsData(items);
      } catch (error) {
        console.error("Error fetching contacts data: ", error);
      } finally {
        setLoadingContacts(false);
      }
    };

    fetchContactsData();
  }, [])

  useEffect(() => {
    if(jobArr.length === 0 ){
      setJobArr(jobs);
       }  
     }, [jobs])

  console.log('cmc user data is: ', jobArr);

  const handleViewContact = (contact) => {
    console.log('Viewing contact:', contact);
    // Add navigation or modal logic here
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    if (typeof timestamp === 'number') {
      return new Date(timestamp).toDateString();
    }
    if (timestamp.toDate && typeof timestamp.toDate === 'function') {
      return timestamp.toDate().toDateString();
    }
    if (typeof timestamp === 'object' && timestamp.seconds) {
      return new Date(timestamp.seconds * 1000).toDateString();
    }
    return 'N/A';
  };

  const handleContactsChangePage = (event, newPage) => {
    setContactsPage(newPage);
  };

  const handleContactsChangeRowsPerPage = (event) => {
    setContactsRowsPerPage(parseInt(event.target.value, 10));
    setContactsPage(0);
  };

  return (
      
        
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
       {/* <h1 style={{position:"relative",fontWeight:"bold",left:"0px",marginBottom:"40px",fontSize:"30px"}}>DASHBOARD</h1> */}
      
       {/* All Companies Table */}
       <br/>
       <p 
         style={{
           fontSize: '26px', marginLeft: '5px',marginBottom:"1rem", color: 'black',display:"flex",justifyContent:"space-between"
         }}
       >
         <b>ALL COMPANIES</b>   
       
         <Button
           type="button"
           variant="contained"
           style={{
             background: "linear-gradient(to right, #000000, #333333)",
             color: "white",
             width: "17%",
             fontSize: "15px",
           }}
           sx={{ mt: 0, mb: 2 }}
         >
           Add Company
         </Button>
       </p><br/>
       <hr />
         
       {loadingContacts ? (
         <center>
           <Box sx={{ width: 300 }}>
             <Skeleton />
             <Skeleton animation="wave" />
             <Skeleton animation={false} />
           </Box>
         </center>
       ) : (
         <TableContainer component={Paper}>
           <Table sx={{ maxWidth: 1500, tableLayout:"fixed" }} aria-label="companies table">
             <TableHead>
               <TableRow>
                 <StyledTableCell>Name</StyledTableCell>
                 <StyledTableCell align="right">Email</StyledTableCell>
                 <StyledTableCell align="right">Date</StyledTableCell>
                 <StyledTableCell align="right">View</StyledTableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {(contactsRowsPerPage > 0
                 ? contactsData.slice(
                     contactsPage * contactsRowsPerPage,
                     contactsPage * contactsRowsPerPage + contactsRowsPerPage
                   )
                 : contactsData
               ).map((contact) => (
                 <TableRow key={contact.id || Math.random()}>
                   <StyledTableCell component="th" scope="row">
                     {contact.name || contact.companyName || '-'}
                   </StyledTableCell>
                   <StyledTableCell>
                     {contact.email || '-'}
                   </StyledTableCell>
                   <StyledTableCell>
                     {formatDate(contact.lastActive || contact.createdAt)}
                   </StyledTableCell>
                   <StyledTableCell>
                     <Button 
                       variant="contained"
                       size="small" 
                       onClick={() => handleViewContact(contact)}
                       style={{
                         background: "linear-gradient(to right, #000000, #333333)",
                         color: "white",
                         fontSize: "12px",
                       }}
                     >
                       View
                     </Button>
                   </StyledTableCell>
                 </TableRow>
               ))}
             </TableBody>
             <TableFooter>
               <TableRow>
                 <TablePagination
                   rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                   colSpan={4}
                   count={contactsData.length}
                   rowsPerPage={contactsRowsPerPage}
                   page={contactsPage}
                   SelectProps={{
                     inputProps: {
                       "aria-label": "rows per page",
                     },
                     native: true,
                   }}
                   onPageChange={handleContactsChangePage}
                   onRowsPerPageChange={handleContactsChangeRowsPerPage}
                   ActionsComponent={TablePaginationActions}
                 />
               </TableRow>
             </TableFooter>
           </Table>
         </TableContainer>
       )}

       <br/><br/>

       {/* All Users Table */}
       {jobArr.length ?
         <CJobList jobs={jobs} />
         :
         <center>
           <Box sx={{ width: 300 }}>
             <Skeleton />
             <Skeleton animation="wave" />
             <Skeleton animation={false} />
           </Box>
         </center>
       }
        </Container>
     
  );
}
