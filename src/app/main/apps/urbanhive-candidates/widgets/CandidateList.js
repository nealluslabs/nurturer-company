import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, CircularProgress, Divider, Grid } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';


/*import  noimage from 'src/assets/images/no-image.jpg';*/
import { isMobile } from 'react-device-detect';

import farmer1 from 'src/images/jeansfarmer.jpeg';
import farmer2 from 'src/images/farmer2.jpeg';
import farmer3 from 'src/images/farmer3.jpeg';
import farmer4 from 'src/images/farmer4.jpeg';
import farmer5 from 'src/images/farmer5.jpeg';
import farmer6 from 'src/images/farmer6.jpeg';
import farmer7 from 'src/images/farmer7.jpeg';
import farmer8 from 'src/images/farmer8.jpeg';
import farmer9 from 'src/images/farmer9.jpeg';
import farmer10 from 'src/images/farmer10.jpeg';



//import { saveResponseInFocus,clearResponseInFocus, saveFormInFocus, clearFormInFocus} from 'src/redux/reducers/group.slice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers, fetchAllUsersPeriod } from 'redux/actions/user.action';
//import { makeStyles } from '@mui/styles';
//import { fetchAllFarmerProduce, fetchFarmerById, fetchRetailerFarmerById } from 'src/redux/actions/group.action';

const random = Math.random()*11
console.log("Math random is-->", random)
const noimage = Math.random()*11 < 1 ? farmer1 : Math.random()*11 < 2 ? farmer2: Math.random()*11 < 3 ? farmer3: Math.random()*11 < 4 ?farmer4 : Math.random()*11 < 5 ?farmer5 : Math.random()*11 < 6 ?farmer6 : Math.random()*11 < 7 ?farmer7 : Math.random()*11 < 8 ? farmer8: Math.random()*11 < 9 ? farmer9: Math.random()*11 < 10 ?farmer10 :farmer10 


//const useStyles = makeStyles({
//  row: {
//  backgroundColor: '#F9F9F9',
//  marginTop:"3px",
//  marginBottom:"3px",
//  },
//  });


const columns =  !isMobile ? [
  {/*
    field: 'id',
    headerName: '#', 
    width: 250,
    renderCell: (params) => {
    },
  */},
 /* { field: 'approvedDate', headerName: 'Date', width: 200,height:450, renderCell: (params) => {
    return <div style={{fontSize:"1rem",display:"flex",flexDirection:"column"}}>
      {params.row.approvedDate && new Date(params.row.approvedDate).toDateString() }
      
       <div style={{fontSize:"0.6rem",display:"flex",flexDirection:"column"}}>
      {params.row.approvedDate && new Date(params.row.approvedDate).toLocaleTimeString('en-US', {
     hour: 'numeric',
     minute: '2-digit',
     hour12: true
      }) }
      </div>

      </div>;
  }, },*/
  {
    field: 'name', 
    headerName: 'Name',
    width: 120,
    height:250,
    renderCell: (params) => {
      
      //const fullName = `${params.row.fName} ${params.row.lName}`;
      return <div style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"2.5rem",width:200}}>
        
        <div style={{display:"flex",alignItems:"center",justifyContent:"flex-start"}}><div>{/*THE NUMBERS SHOULD GO HERE */}</div> 
        
     {/*   
        <img src={noimage} 
        alt='farmer photo'
       loading='lazy'
      onLoad={({ currentTarget }) => {
          currentTarget.onerror = null; 
          currentTarget.src=`${params.row.photo}`;
       }} 
       

        onError={({ currentTarget }) => {
          currentTarget.onerror = null; 
          currentTarget.src=params.row.index === 0 ? farmer1 : params.row.index === 1 ? farmer2: params.row.index === 2 ? farmer3: params.row.index === 3 ?farmer4 : params.row.index === 4 ?farmer5 : params.row.index === 5 ?farmer6 : params.row.index === 6 ?farmer7 : params.row.index === 7 ? farmer8: params.row.index === 8 ? farmer9: params.row.index === 9 ?farmer10 :farmer10 ;
       }} 

  style ={{height:"50px",width:"60px",borderRadius:"16px"}}/>

      */}
  
  </div>
      
       <span style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",textAlign:"left",width:"40px",fontSize:"1.5rem",position:"relative",left:"-2.5rem"}}>{params.row.name}</span>

      </div>;
    },
  },
  { field: 'companyName', headerName: 'Company Name', width: 120,height:450, renderCell: (params) => {
    return <div style={{fontSize:"1.5rem"}}>{params.row.companyName}</div>;
  }},
  { field: 'city', headerName: 'City', width: 120,height:450, renderCell: (params) => {
    return <div style={{fontSize:"1.5rem"}}>{params.row.city}</div>;
  }},
   { field: 'frequency', headerName: 'Frequency', width: 120,height:450, renderCell: (params) => {
    return <div style={{fontSize:"1.5rem"}}>{params.row.frequency}</div>;
  }},
 // { field: 'invoice', headerName: ' Invoice', width: 70,height:450, renderCell: (params) => {
 //   return <div style={{fontSize:"1rem"}}>{params.row.invoice}</div>;
 // }},
 /* { field: 'location', headerName: 'Location',  width: 150,height:450, renderCell: (params) => {
    return <div style={{fontSize:"1rem"}}> {params.row.location}</div>;
  }, },*/
 
  {
    field: 'actions',
    headerName: 'Action',
    width: 150,
    height:250,
  },
]
:

[
  {
    field: 'id',
    headerName: '#', 
    width: 250,
    renderCell: (params) => {
    },
  },
  {
    field: 'name', 
    headerName: 'Name',
    width: 120,
    height:250,
    renderCell: (params) => {
      
      //const fullName = `${params.row.fName} ${params.row.lName}`;
      return <div style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"2.5rem",width:450}}>
        
        <div style={{display:"flex",alignItems:"center",justifyContent:"flex-start"}}><div>{/*THE NUMBERS SHOULD GO HERE */}</div> 
   
  
  </div>
      
       <span style={{display:"flex",alignItems:"center",justifyContent:"flex-start",textAlign:"left",width:"40px",fontSize:"0.5rem"}}>{params.row.name}</span>

      </div>;
    },
  },

  {
    field: 'actions',
    headerName: '',
    width: 150,
    height:250,
  },
]



export default function CandidateList({ forms }) {
  const history = useHistory();
  const dispatch = useDispatch();
  //const classes = useStyles();

 
 

  //const { isAgent,isAdmin,isSuperAdmin } = useSelector((state) => state.group);
 // const { user } = useSelector((state) => state.auth);

  console.log("WHAT IS ENTERING REQUESTS TABLE?--->",forms)


  const handleActionClick = (student) => {
    history.push('/dashboard/edit-student', { state: { student } });
  };

  const handleCellClick = (param, event) => {
    event.defaultMuiPrevented = param.field !== "actions"
    console.log("STOPPING PROPAGATIONS!")
    event.stopPropagation()
    
    };

  const [loading,setLoading] = React.useState(false)


  return (
    <div style={{ height: 550, width: '100%'}}>
     { !forms?
       <CircularProgress/>
     :
      <DataGrid
      sx={{
        '& .MuiDataGrid-row': {
         
         // marginTop:"3px",
         // marginBottom:"3px",
         
         
          color:"black",
          fontSize:"1.5rem" ,
          borderColor:"transparent"
         
        },   '& .MuiDataGrid-cell:focus': {
          outline: 'none', // Removes the blue focus outline
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "black",
        },

        '& .MuiDataGrid-row:nth-child(even)': {
          backgroundColor: '#ffffff', // White background for even rows
        },

        '& .MuiDataGrid-row:nth-child(odd)': {
          backgroundColor: '#f4f4f4', // Light background for odd rows
        },


        '& .MuiDataGrid-virtualScroller': {
          overflowY: 'hidden', 
        },
        '& .MuiDataGrid-root': {
          scrollbarWidth: 'none',
        },
        '& .MuiDataGrid-root::-webkit-scrollbar': {
          display: 'none', 
        },
      }}
      //getRowClassName={(params) =>(classes.row)}
      onCellClick={handleCellClick}
        rows={forms}
        rowHeight={80}
        disableSelectionOnClick
        columns={columns.map((col,index) => {
          if (col.field === 'actions') {
            return {
              ...col,
              renderCell: (params) => (
                <div style={{ display: 'flex', justifyContent: 'space-between' ,gap:"5rem"}}>
                 {/* <Button
                    onClick={() =>{ 
                     
                      setLoading(true)
                   if(params.row.responseObject){
                      dispatch(saveResponseInFocus(params.row))
                     }
                 else {

                  dispatch(clearResponseInFocus(params.row))
                 }



                      setTimeout(()=>{
                   
                      history.push('/dashboard/view-response')
                     
                    },
                      1200)
          
          
                      setTimeout(()=>{
                   
                        setLoading(false)
                       
                      },
                        1000)

                    }
                     }
                    variant="contained"
                    style={{ minWidth: '130px', backgroundColor: "#2DA840", marginRight: '20px' }}
                  >
                   {'View'}
                    </Button> */}
                <div sx={{display:"flex",gap:"0.5rem"}}>
                {/*isSuperAdmin && !isAdmin &&
                  <span 


                     onClick={() =>{ 
                                          
                       setLoading(true)
                     if(params.row.fields){
                       dispatch(saveFormInFocus(params.row))
                      }
                     else {
                     
                     dispatch(clearFormInFocus(params.row))
                     }
                     
                     
                     
                       setTimeout(()=>{
                     if(params.row.title.includes("Farmer Intake Form") ||params.row.title.includes('Velingara') ){
                     // history.push('/dashboard/farmers-intake-fill-form')
                     }
                     else{
                     // history.push('/dashboard/view-form')
                     }
                      
                     },
                       1200)
                     
                     
                       setTimeout(()=>{
                     
                         setLoading(false)
                        
                       },
                         1000)
                     
                     }
                      }
                  
                  
                  style={{cursor:"pointer",color:"#90C434",marginRight:"0.5rem"}}>
                    Edit
  
                   </span>
                 */}

                   <span 


                   onClick={() =>{ 
                           console.log("WHAT IS RETAILER FARMER ID-->",params.row.retailer_farmer_id)                                  
                     //dispatch(saveFarmerInFocus(params.row))
                      //dispatch(fetchRetailerFarmerById(params.row.retailer_farmer_id))    
                     .then(()=>{ 
                   
                     setTimeout(()=>{
                   
                    // history.push('/dashboard/farmer-request')
                    
                   },
                     600)
                   
                   
                    })
                   
                   }
                   }
               
               
               style={{cursor:"pointer",color:"#0A6054"}}>
               View
               
               </span>
                </div>


       

                 

                </div>
              ),
            };
          }
          return col;
        })}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection={false}
      />
    }
    </div>
  );
}