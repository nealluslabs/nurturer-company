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
  const { user } = useSelector((state) => state.auth || {});
  const [jobArr, setJobArr] = useState([]);
  const [testData, setTestData] = useState();
  const navigate = useNavigate();

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

  const getLastSevenMonths = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();
    let currentMonthIndex = date.getMonth();

    if (currentMonthIndex < 0) {
      currentMonthIndex = 11;
    }

    let lastSevenMonths = [];
    for (let i = 0; i < 7; i++) {
      lastSevenMonths.unshift(months[currentMonthIndex]);
      currentMonthIndex = (currentMonthIndex - 1 + 12) % 12;
    }

    return lastSevenMonths;
  };

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
  }, [])


  useEffect(() => {
    /*if(jobArr.length === 0 ){*/
      setJobArr(jobs);
      /* }  */
     }, [jobs])

  useEffect(() => {
    if (user && user.companyID && jobs && jobs.length > 0) {
      const filteredJobs = jobs.filter(job => job.companyID === user.companyID);
      setJobArr(filteredJobs);
    } else if (jobs && jobs.length > 0) {
      setJobArr(jobs);
    }
  }, [jobs, user?.companyID]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {jobs && jobs.length ?
        <CJobList jobs={jobArr} />
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
