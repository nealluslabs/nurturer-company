import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';

// Material-UI Icons
import GroupsIcon from '@mui/icons-material/Groups';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CakeIcon from '@mui/icons-material/Cake';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmailIcon from '@mui/icons-material/Email';
import InventoryIcon from '@mui/icons-material/Inventory';
import SendIcon from '@mui/icons-material/Send';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Mail } from '@mui/icons-material';

const DashboardHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Mock selectors - you'll need to replace these with your actual Redux selectors
  const { isAuth, user } = useSelector((state) => state.auth || { isAuth: true/*, user: { uid: 'test' }*/ });
  const { allUsers, isLoading } = useSelector((state) => state.user || { allUsers: [], isLoading: false });
  const { allContacts = [], filteredContacts = [] } = useSelector((state) => state.user || {});
  
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    if (user && user.uid) {
      // Fetch contacts from Firebase for inbox - uncomment when you have the action
      // dispatch(fetchAllContactForOneUser(user.uid));
    }
  }, [user, dispatch]);


  useEffect(() => {

    console.log("DAHSBOARD PAGE ,user is --->",user)
    if (!user) {
     navigate('/loginTest')
    }
  }, [user]);

  // Process touchpoint data
  let touchpointData = [];
  if (allContacts.length > 0) {
    let allMessages = [];
    allContacts.forEach(contact => {
      if (Array.isArray(contact.messageQueue)) {
        allMessages = allMessages.concat(
          contact.messageQueue.map(msg => ({
            ...msg,
            contactName: contact.name,
            contactId: contact.id || contact.uid,
            uid: contact.uid
          }))
        );
      }
    });
    allMessages.sort((a, b) => {
      if (a.createdAt && b.createdAt) {
        return b.createdAt - a.createdAt;
      }
      return 0;
    });
    touchpointData = allMessages.slice(0, 5).map((msg, idx) => ({
      id: msg.id || idx,
      title: msg.title || msg.subject || 'No Title',
      subtitle: msg.contactName ? `${msg.contactName}${msg.to ? ' - ' + msg.to : ''}` : (msg.to || ''),
      status: (msg.status && msg.status.toLowerCase() === 'pending') ? 'Pending' : (msg.messageStatus || ''),
      statusColor: 'grey',
      statusBackground: 'yellow',
      icon: Mail,
      iconColor: '#1976d2',
      uid: msg.uid
    }));
  }

  // If no touchpoints available, provide dummy sample items so UI isn't empty
  if (touchpointData.length === 0) {
    touchpointData = [
      {
        id: 'd1',
        title: 'Welcome message',
        subtitle: 'System - support@nurturer.ai',
        status: 'Pending',
        statusColor: '#333',
        statusBackground: '#ffecb3',
        icon: Mail,
        iconColor: '#1976d2',
        uid: 'system'
      },
      {
        id: 'd2',
        title: 'Follow-up request',
        subtitle: 'System - support@nurturer.ai',
        status: 'Pending',
        statusColor: '#333',
        statusBackground: '#ffecb3',
        icon: Mail,
        iconColor: '#1976d2',
        uid: 'jane'
      },
      {
        id: 'd3',
        title: 'Admin invitation',
        subtitle: 'System - support@nurturer.ai',
        status: 'Pending',
        statusColor: '#333',
        statusBackground: '#ffecb3',
        icon: Mail,
        iconColor: '#1976d2',
        uid: 'acme'
      },
      {
        id: 'd4',
        title: 'Pending Request',
        subtitle: 'System - support@nurturer.ai',
        status: 'Pending',
        statusColor: '#333',
        statusBackground: '#ffecb3',
        icon: Mail,
        iconColor: '#1976d2',
        uid: 'system2'
      },
      {
        id: 'd5',
        title: 'New User',
        subtitle: 'System - support@nurturer.ai',
        status: 'Pending',
        statusColor: '#333',
        statusBackground: '#ffecb3',
        icon: Mail,
        iconColor: '#1976d2',
        uid: 'system3'
      }
    ];
  }

  // Process recent contacts
  let recentContacts = [];
  if (allContacts.length > 0) {
    recentContacts = [...allContacts]
      .sort((a, b) => {
        if (a.createdAt && b.createdAt) {
          return b.createdAt - a.createdAt;
        }
        return 0;
      })
      .slice(0, 5);
  }

  // If there are no recent contacts, show a small set of dummy contacts for the UI
  if (recentContacts.length === 0) {
    const now = Date.now();
    recentContacts = [
      { uid: 'u1', name: 'Alice Johnson', role: '', createdAt: now - 86400000, initials: 'AJ', photoUrl: null },
      { uid: 'u2', name: 'Bob Smith', role: '', createdAt: now - 172800000, initials: 'BS', photoUrl: null },
      { uid: 'u3', name: 'Carol Lee', role: '', createdAt: now - 259200000, initials: 'CL', photoUrl: null },
      { uid: 'u4', name: 'Gina Franklin', role: '', createdAt: now - 345600000, initials: 'GF', photoUrl: null },
      { uid: 'u5', name: 'Frank Edward', role: '', createdAt: now - 432000000, initials: 'FE', photoUrl: null }
    ];
  }

  const statsData = [
    {
      id: 1,
      icon: GroupsIcon,
      count: allContacts ? allContacts.length : 0,
      label: 'Total Users',
      color: '#03befc',
    },
    {
      id: 2,
      icon: WatchLaterIcon,
      count: touchpointData ? touchpointData.length : 0,
      label: 'Tickets',
      color: '#ca03fc',
    },
    {
      id: 3,
      icon: CalendarMonthIcon,
      count: 5,
      label: 'Users Online',
      color: '#03bafc',
    },
    {
      id: 4,
      icon: LightbulbIcon,
      count: 5,
      label: 'Smart Suggestions',
      color: '#03fc5a',
    },
  ];

  const resortFilteredUsersAndPush = (userId) => {
    const replica = [...filteredContacts];
    const index = replica.findIndex(user => user.uid === userId);

    if (index > -1) {
      const [matchedUser] = replica.splice(index, 1);
      replica.unshift(matchedUser);
    }

    // Uncomment when you have the action
    // dispatch(saveFilteredContacts(replica));

    setTimeout(() => {
      navigate('/candidates');
    }, 300);
  };

  // Removed authentication check to allow free access
  // if (!isAuth) return <Navigate to="/loginTest" replace />;

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      {/* Stats Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px"
      }}>
        {statsData.map((item) => {
          const IconComponent = item.icon;
          const isTotalContacts = item.label === 'Total Users';
          const isPendingTouchpoints = item.label === 'Pending Touchpoints';
          const isUpcomingEvents = item.label === 'Upcoming Events';
          
          const handleClick = () => {
            if (isTotalContacts) {
              navigate('/candidates');
            } else if (isPendingTouchpoints || isUpcomingEvents) {
              navigate('/apps/inbox');
            }
          };
          
          const clickable = isTotalContacts || isPendingTouchpoints || isUpcomingEvents;
          
          return (
            <div
              key={item.id}
              style={{
                background: "#ffffff",
                padding: "16px",
                textAlign: "center",
                borderRadius: "6px",
                cursor: clickable ? "pointer" : "default",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                border: isTotalContacts
                  ? "2px solid #03befc33"
                  : isPendingTouchpoints
                  ? "2px solid #ca03fc33"
                  : isUpcomingEvents
                  ? "2px solid #03bafc33"
                  : "none"
              }}
              onClick={clickable ? handleClick : undefined}
            >
              <IconComponent sx={{ width: 45, height: 45, color: item.color }} />
              <p style={{ color: "#03befc", fontSize: "21px", fontWeight: "bold" }}>{item.count}</p>
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        margin: "26px 2px 20px 2px"
      }}>
        {/* Doughnut Chart */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginBottom: '15px', textAlign: 'center' }}>Email Distribution</h3>
          <ReactApexChart
            options={{
              chart: { type: 'donut' },
              labels: ['Touches', 'Events', 'Newsletters'],
              colors: ['#00E396', '#FEB019', '#FF4560'],
              legend: { position: 'bottom' },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: { width: 200 },
                  legend: { position: 'bottom' }
                }
              }]
            }}
            series={[44, 25, 31]}
            type="donut"
            height={300}
          />
        </div>

        {/* Histogram */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginBottom: '15px', textAlign: 'center' }}>Monthly Activity</h3>
          <ReactApexChart
            options={{
              chart: { type: 'bar', toolbar: { show: false } },
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
              colors: ['#008FFB'],
              plotOptions: {
                bar: { borderRadius: 4, horizontal: false }
              },
              dataLabels: { enabled: false }
            }}
            series={[{
              name: 'Activity',
              data: [44, 55, 57, 56, 61, 58]
            }]}
            type="bar"
            height={300}
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "16px",
        margin: "26px 2px"
      }}>
        {/* Recent Touchpoints */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <SendIcon sx={{ width: 25, height: 25, marginRight: "4px" }} />
              <h3>Recent Tickets</h3>
            </div>
            <button
              style={{
                border: `2px solid grey`,
                padding: "4px 7px",
                borderRadius: "6px",
                color: "grey",
                background: "transparent",
                cursor: "pointer"
              }}
              onClick={() => navigate('/apps/inbox')}
            >
              View All
            </button>
          </div>

          <div style={{ background: "white", borderRadius: "4px", marginTop: "18px", padding: "42px 12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            {touchpointData.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#888', padding: '16px 0' }}>No pending messages found.</div>
            ) : (
              touchpointData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <IconComponent
                        sx={{
                          width: 16,
                          height: 16,
                          marginRight: "6px",
                          color: item.iconColor
                        }}
                      />
                      <div>
                        <p style={{ fontSize: "14px", fontWeight: "bold" }}>{item.title}</p>
                        <p style={{ fontSize: "12px" }}>{item.subtitle}</p>
                      </div>
                    </div>
                    <p
                      style={{
                        padding: "4px 12px",
                        background: item.statusBackground,
                        color: item.statusColor,
                        borderRadius: "4px"
                      }}
                    >
                      {item.status ? item.status : "Pending"}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Recently Active Users */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <PersonAddAltIcon sx={{ width: 25, height: 25, marginRight: "4px" }} />
              <h3>Recently Active Users</h3>
            </div>
            <button
              style={{
                border: `2px solid grey`,
                padding: "4px 7px",
                borderRadius: "6px",
                color: "grey",
                background: "transparent",
                cursor: "pointer"
              }}
              onClick={() => navigate('/candidates')}
            >
              View All
            </button>
          </div>

          <div style={{ background: "white", borderRadius: "4px", marginTop: "18px", padding: "42px 12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            {recentContacts.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#888', padding: '16px 0' }}>No contacts found.</div>
            ) : (
              recentContacts.map((user, idx) => {
                const initials = user.initials || (user.name ? user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : '?');
                const name = user.name || 'Unknown';
                const role = user.role || user.companyName || '';
                const date = user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '';
                const photoUrl = user.photoUrl;
                
                return (
                  <div
                    key={user.id || idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px"
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", width: "100%" }}
                    >
                      {photoUrl ? (
                        <img
                          src={photoUrl}
                          alt={name}
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            marginRight: "12px",
                            objectFit: "cover",
                            border: "2px solid #01bcc0"
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            marginRight: "12px",
                            marginBottom: '0.5rem',
                            background: "#01bcc0",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            fontSize: "12px"
                          }}
                        >
                          {initials}
                        </div>
                      )}
                      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                        <p style={{ fontSize: "14px", fontWeight: "bold", margin: 0 }}>{name}</p>
                      </div>
                    </div>
                    <p
                      style={{
                        padding: "4px 12px",
                        borderRadius: "4px"
                      }}
                    >
                      {date}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
