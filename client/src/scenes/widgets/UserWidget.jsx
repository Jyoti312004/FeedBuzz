// import {
//   ManageAccountsOutlined,
//   EditOutlined,
//   LocationOnOutlined,
//   WorkOutlineOutlined,
// } from "@mui/icons-material";
// import { Box, Typography, Divider, useTheme } from "@mui/material";
// import UserImage from "../../components/UserImage";
// import FlexBetween from "../../components/FlexBetween";
// import WidgetWrapper from "../../components/WidgetWrapper";
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UserWidget = ({ userId, picturePath }) => {
//   const [user, setUser] = useState(null);
//   const { palette } = useTheme();
//   const navigate = useNavigate();
//   const token = useSelector((state) => state.token);
//   const dark = palette.neutral.dark;
//   const medium = palette.neutral.medium;
//   const main = palette.neutral.main;

//   const getUser = async () => {
//     try {
//       const response = await fetch(`https://feedbuzz.onrender.com/users/${userId}`, {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await response.json();
//       setUser(data);
//     } catch (error) {
//       console.error("Error fetching user:", error);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   if (!user) {
//     return null;
//   }

//   const {
//     firstName,
//     lastName,
//     location,
//     occupation,
//     viewedProfile,
//     impressions,
//     friends,
//   } = user;

//   return (
//     <WidgetWrapper>
//       {/* FIRST ROW */}
//       <FlexBetween
//         gap="0.5rem"
//         pb="1.1rem"
//         onClick={() => navigate(`/profile/${userId}`)}
//       >
//         <FlexBetween gap="1rem">
//           <UserImage image={picturePath} />
//           <Box>
//             <Typography
//               variant="h4"
//               color={dark}
//               fontWeight="500"
//               sx={{
//                 "&:hover": {
//                   color: palette.primary.light,
//                   cursor: "pointer",
//                 },
//               }}
//             >
//               {firstName} {lastName}
//             </Typography>
//             <Typography color={medium}>{friends.length} friends</Typography>
//           </Box>
//         </FlexBetween>
//         <ManageAccountsOutlined />
//       </FlexBetween>

//       <Divider />

//       {/* SECOND ROW */}
//       <Box p="1rem 0">
//         <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
//           <LocationOnOutlined fontSize="large" sx={{ color: main }} />
//           <Typography color={medium}>{location}</Typography>
//         </Box>
//         <Box display="flex" alignItems="center" gap="1rem">
//           <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
//           <Typography color={medium}>{occupation}</Typography>
//         </Box>
//       </Box>

//       <Divider />

//       {/* THIRD ROW */}
//       <Box p="1rem 0">
//         <FlexBetween mb="0.5rem">
//           <Typography color={medium}>Who's viewed your profile</Typography>
//           <Typography color={main} fontWeight="500">
//             {viewedProfile}
//           </Typography>
//         </FlexBetween>
//         <FlexBetween>
//           <Typography color={medium}>Impressions of your post</Typography>
//           <Typography color={main} fontWeight="500">
//             {impressions}
//           </Typography>
//         </FlexBetween>
//       </Box>

//       <Divider />

//       {/* FOURTH ROW */}
//       <Box p="1rem 0">
//         <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
//           Social Profiles
//         </Typography>

//         <FlexBetween gap="1rem" mb="0.5rem">
//           <FlexBetween gap="1rem">
//             <img src="https://feedbuzz.onrender.com/assets/twitter.png" alt="twitter" />
//             <Box>
//               <Typography color={main} fontWeight="500">
//                 Twitter
//               </Typography>
//               <Typography color={medium}>Social Network</Typography>
//             </Box>
//           </FlexBetween>
//           <EditOutlined sx={{ color: main }} />
//         </FlexBetween>

//         <FlexBetween gap="1rem">
//           <FlexBetween gap="1rem">
//             <img src="https://feedbuzz.onrender.com/assets/linkedin.png" alt="linkedin" />
//             <Box>
//               <Typography color={main} fontWeight="500">
//                 Linkedin
//               </Typography>
//               <Typography color={medium}>Network Platform</Typography>
//             </Box>
//           </FlexBetween>
//           <EditOutlined sx={{ color: main }} />
//         </FlexBetween>
//       </Box>
//     </WidgetWrapper>
//   );
// };

// export default UserWidget;

// import {
//   ManageAccountsOutlined,
//   EditOutlined,
//   LocationOnOutlined,
//   WorkOutlineOutlined,
// } from "@mui/icons-material";
// import { Box, Typography, Divider, useTheme, TextField, Button } from "@mui/material";
// import UserImage from "../../components/UserImage";
// import FlexBetween from "../../components/FlexBetween";
// import WidgetWrapper from "../../components/WidgetWrapper";
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UserWidget = ({ userId, picturePath }) => {
//   const [user, setUser] = useState(null);
//   const [editingTwitter, setEditingTwitter] = useState(false);
//   const [editingLinkedin, setEditingLinkedin] = useState(false);
//   const [twitterHandle, setTwitterHandle] = useState('');
//   const [linkedinProfile, setLinkedinProfile] = useState('');
//   const { palette } = useTheme();
//   const navigate = useNavigate();
//   const token = useSelector((state) => state.token);
//   const dark = palette.neutral.dark;
//   const medium = palette.neutral.medium;
//   const main = palette.neutral.main;

//   const getUser = async () => {
//     try {
//       const response = await fetch(`https://feedbuzz.onrender.com/users/${userId}`, {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await response.json();
//       setUser(data);
//     } catch (error) {
//       console.error("Error fetching user:", error);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   const handleTwitterEdit = () => {
//     setEditingTwitter(true);
//     setTwitterHandle(user.socialProfiles.twitter);
//   };

//   const handleLinkedinEdit = () => {
//     setEditingLinkedin(true);
//     setLinkedinProfile(user.socialProfiles.linkedin);
//   };

//   const handleTwitterSave = () => {
//     // Save Twitter handle
//     setEditingTwitter(false);
//     // Make API call to save changes
//   };

//   const handleLinkedinSave = () => {
//     // Save Linkedin profile
//     setEditingLinkedin(false);
//     // Make API call to save changes
//   };

//   if (!user) {
//     return null;
//   }

//   const {
//     firstName,
//     lastName,
//     location,
//     occupation,
//     viewedProfile,
//     impressions,
//     friends,
//   } = user;

//   return (
//     <WidgetWrapper>
//       {/* FIRST ROW */}
//       <FlexBetween
//         gap="0.5rem"
//         pb="1.1rem"
//         onClick={() => navigate(`/profile/${userId}`)}
//       >
//         <FlexBetween gap="1rem">
//           <UserImage image={picturePath} />
//           <Box>
//             <Typography
//               variant="h4"
//               color={dark}
//               fontWeight="500"
//               sx={{
//                 "&:hover": {
//                   color: palette.primary.light,
//                   cursor: "pointer",
//                 },
//               }}
//             >
//               {firstName} {lastName}
//             </Typography>
//             <Typography color={medium}>{friends.length} friends</Typography>
//           </Box>
//         </FlexBetween>
//         <ManageAccountsOutlined />
//       </FlexBetween>

//       <Divider />

//       {/* SECOND ROW */}
//       <Box p="1rem 0">
//         <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
//           <LocationOnOutlined fontSize="large" sx={{ color: main }} />
//           <Typography color={medium}>{location}</Typography>
//         </Box>
//         <Box display="flex" alignItems="center" gap="1rem">
//           <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
//           <Typography color={medium}>{occupation}</Typography>
//         </Box>
//       </Box>

//       <Divider />

//       {/* THIRD ROW */}
//       <Box p="1rem 0">
//         <FlexBetween mb="0.5rem">
//           <Typography color={medium}>Who's viewed your profile</Typography>
//           <Typography color={main} fontWeight="500">
//             {viewedProfile}
//           </Typography>
//         </FlexBetween>
//         <FlexBetween>
//           <Typography color={medium}>Impressions of your post</Typography>
//           <Typography color={main} fontWeight="500">
//             {impressions}
//           </Typography>
//         </FlexBetween>
//       </Box>

//       <Divider />

//       {/* FOURTH ROW */}
//       <Box p="1rem 0">
//         <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
//           Social Profiles
//         </Typography>

//         {/* Twitter Edit */}
//         <FlexBetween gap="1rem" mb="0.5rem">
//           {!editingTwitter ? (
//             <FlexBetween gap="1rem">
//               <img src="https://feedbuzz.onrender.com/assets/twitter.png" alt="twitter" />
//               <Box>
//                 <Typography color={main} fontWeight="500">
//                   Twitter
//                 </Typography>
//                 <Typography color={medium}>Social Network</Typography>
//               </Box>
//             </FlexBetween>
//           ) : (
//             <FlexBetween gap="1rem">
//               <TextField
//                 label="Twitter Handle"
//                 value={twitterHandle}
//                 onChange={(e) => setTwitterHandle(e.target.value)}
//               />
//               <Button variant="contained" onClick={handleTwitterSave}>Save</Button>
//             </FlexBetween>
//           )}
//           <EditOutlined sx={{ color: main }} onClick={handleTwitterEdit} />
//         </FlexBetween>

//         {/* LinkedIn Edit */}
//         <FlexBetween gap="1rem">
//           {!editingLinkedin ? (
//             <FlexBetween gap="1rem">
//               <img src="https://feedbuzz.onrender.com/assets/linkedin.png" alt="linkedin" />
//               <Box>
//                 <Typography color={main} fontWeight="500">
//                   Linkedin
//                 </Typography>
//                 <Typography color={medium}>Network Platform</Typography>
//               </Box>
//             </FlexBetween>
//           ) : (
//             <FlexBetween gap="1rem">
//               <TextField
//                 label="Linkedin Profile"
//                 value={linkedinProfile}
//                 onChange={(e) => setLinkedinProfile(e.target.value)}
//               />
//               <Button variant="contained" onClick={handleLinkedinSave}>Save</Button>
//             </FlexBetween>
//           )}
//           <EditOutlined sx={{ color: main }} onClick={handleLinkedinEdit} />
//         </FlexBetween>
//       </Box>
//     </WidgetWrapper>
//   );
// };

// export default UserWidget;

// import {
//   ManageAccountsOutlined,
//   EditOutlined,
//   LocationOnOutlined,
//   WorkOutlineOutlined,
// } from "@mui/icons-material";
// import { Box, Typography, Divider, useTheme, TextField, Button } from "@mui/material";
// import UserImage from "../../components/UserImage";
// import FlexBetween from "../../components/FlexBetween";
// import WidgetWrapper from "../../components/WidgetWrapper";
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UserWidget = ({ userId, picturePath }) => {
//   const [user, setUser] = useState(null);
//   const [editingTwitter, setEditingTwitter] = useState(false);
//   const [editingLinkedin, setEditingLinkedin] = useState(false);
//   const [twitterHandle, setTwitterHandle] = useState('');
//   const [linkedinProfile, setLinkedinProfile] = useState('');
//   const { palette } = useTheme();
//   const navigate = useNavigate();
//   const token = useSelector((state) => state.token);
//   const dark = palette.neutral.dark;
//   const medium = palette.neutral.medium;
//   const main = palette.neutral.main;

//   const getUser = async () => {
//     try {
//       const response = await fetch(`https://feedbuzz.onrender.com/users/${userId}`, {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const user = await response.json(); // Corrected 'data' to 'user'
//       setUser(user);
//       setTwitterHandle(user.socialProfiles.twitter || '');
//       setLinkedinProfile(user.socialProfiles.linkedin || '');
//     } catch (error) {
//       console.error("Error fetching user:", error);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   const handleTwitterEdit = () => {
//     setEditingTwitter(true);
//   };

//   const handleLinkedinEdit = () => {
//     setEditingLinkedin(true);
//   };

//   const handleTwitterSave = () => {
//     setEditingTwitter(false);
//     setUser(prevUser => ({ ...prevUser, socialProfiles: { ...prevUser.socialProfiles, twitter: twitterHandle } }));
//   };

//   const handleLinkedinSave = () => {
//     setEditingLinkedin(false);
//     setUser(prevUser => ({ ...prevUser, socialProfiles: { ...prevUser.socialProfiles, linkedin: linkedinProfile } }));
//   };

//   if (!user) {
//     return null;
//   }

//   const {
//     firstName,
//     lastName,
//     location,
//     occupation,
//     viewedProfile,
//     impressions,
//     friends,
//   } = user;

//   return (
//     <WidgetWrapper>
//       {/* FIRST ROW */}
//       <FlexBetween
//         gap="0.5rem"
//         pb="1.1rem"
//         onClick={() => navigate(`/profile/${userId}`)}
//       >
//         <FlexBetween gap="1rem">
//           <UserImage image={picturePath} />
//           <Box>
//             <Typography
//               variant="h4"
//               color={dark}
//               fontWeight="500"
//               sx={{
//                 "&:hover": {
//                   color: palette.primary.light,
//                   cursor: "pointer",
//                 },
//               }}
//             >
//               {firstName} {lastName}
//             </Typography>
//             <Typography color={medium}>{friends.length} friends</Typography>
//           </Box>
//         </FlexBetween>
//         <ManageAccountsOutlined />
//       </FlexBetween>

//       <Divider />

//       {/* SECOND ROW */}
//       <Box p="1rem 0">
//         <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
//           <LocationOnOutlined fontSize="large" sx={{ color: main }} />
//           <Typography color={medium}>{location}</Typography>
//         </Box>
//         <Box display="flex" alignItems="center" gap="1rem">
//           <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
//           <Typography color={medium}>{occupation}</Typography>
//         </Box>
//       </Box>

//       <Divider />

//       {/* THIRD ROW */}
//       <Box p="1rem 0">
//         <FlexBetween mb="0.5rem">
//           <Typography color={medium}>Who's viewed your profile</Typography>
//           <Typography color={main} fontWeight="500">
//             {viewedProfile}
//           </Typography>
//         </FlexBetween>
//         <FlexBetween>
//           <Typography color={medium}>Impressions of your post</Typography>
//           <Typography color={main} fontWeight="500">
//             {impressions}
//           </Typography>
//         </FlexBetween>
//       </Box>

//       <Divider />

//       {/* FOURTH ROW */}
//       <Box p="1rem 0">
//         <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
//           Social Profiles
//         </Typography>

//         {/* Twitter Edit */}
//         <FlexBetween gap="1rem" mb="0.5rem">
//           {!editingTwitter ? (
//             <FlexBetween gap="1rem">
//               <img src="https://feedbuzz.onrender.com/assets/twitter.png" alt="twitter" />
//               <Box>
//                 <Typography color={main} fontWeight="500">
//                   Twitter
//                 </Typography>
//                 <Typography color={medium}>Social Network</Typography>
//                 <Typography color={main}><a href={`${twitterHandle}`} target="_blank" rel="noopener noreferrer">{twitterHandle}</a></Typography>
//               </Box>
//             </FlexBetween>
//           ) : (
//             <FlexBetween gap="1rem">
//               <TextField
//                 label="Twitter Handle"
//                 value={twitterHandle}
//                 onChange={(e) => setTwitterHandle(e.target.value)}
//               />
//               <Button variant="contained" onClick={handleTwitterSave}>Save</Button>
//             </FlexBetween>
//           )}

//           <EditOutlined sx={{ color: main }} onClick={handleTwitterEdit} />
//         </FlexBetween>

//         {/* LinkedIn Edit */}
//         <FlexBetween gap="1rem">
//           {!editingLinkedin ? (
//             <FlexBetween gap="1rem">
//               <img src="https://feedbuzz.onrender.com/assets/linkedin.png" alt="linkedin" />
//               <Box>
//                 <Typography color={main} fontWeight="500">
//                   Linkedin
//                 </Typography>
//                 <Typography color={medium}>Network Platform</Typography>
//                 <Typography color={main}><a href={linkedinProfile} target="_blank" rel="noopener noreferrer">{linkedinProfile}</a></Typography>
//               </Box>
//             </FlexBetween>
//           ) : (
//             <FlexBetween gap="1rem">
//               <TextField
//                 label="Linkedin Profile"
//                 value={linkedinProfile}
//                 onChange={(e) => setLinkedinProfile(e.target.value)}
//               />
//               <Button variant="contained" onClick={handleLinkedinSave}>Save</Button>
//             </FlexBetween>
//           )}

//           <EditOutlined sx={{ color: main }} onClick={handleLinkedinEdit} />
//         </FlexBetween>
//       </Box>
//     </WidgetWrapper>
//   );
// };

// export default UserWidget;


import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme, TextField, Button } from "@mui/material";
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [editingTwitter, setEditingTwitter] = useState(false);
  const [editingLinkedin, setEditingLinkedin] = useState(false);
  const [twitterHandle, setTwitterHandle] = useState('');
  const [linkedinProfile, setLinkedinProfile] = useState('');
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    try {
      const response = await fetch(`https://feedbuzz.onrender.com/users/${userId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await response.json();
      setUser(user);
      if (user.socialProfiles.twitter) {
        setTwitterHandle(user.socialProfiles.twitter);
      }
      if (user.socialProfiles.linkedin) {
        setLinkedinProfile(user.socialProfiles.linkedin);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTwitterEdit = () => {
    setEditingTwitter(true);
  };

  const handleLinkedinEdit = () => {
    setEditingLinkedin(true);
  };

  const handleTwitterSave = async () => {
    setEditingTwitter(false);
    setUser(prevUser => ({ ...prevUser, socialProfiles: { ...prevUser.socialProfiles, twitter: twitterHandle } }));
    // Make API call to save changes
    ///posts/:userId/social-profiles

      const response = await fetch(
        `https://localhost:3001/posts/${userId}/social-profiles`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      dispatch(setPosts({ posts: data }));

      

  };

  const handleLinkedinSave = () => {
    setEditingLinkedin(false);
    setUser(prevUser => ({ ...prevUser, socialProfiles: { ...prevUser.socialProfiles, linkedin: linkedinProfile } }));
    // Make API call to save changes
  };

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>

      <Divider />

      {/* THIRD ROW */}
      <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <Typography color={medium}>Who's viewed your profile</Typography>
          <Typography color={main} fontWeight="500">
            {viewedProfile}
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color={medium}>Impressions of your post</Typography>
          <Typography color={main} fontWeight="500">
            {impressions}
          </Typography>
        </FlexBetween>
      </Box>

      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        {/* Twitter Edit */}
        <FlexBetween gap="1rem" mb="0.5rem">
          {!editingTwitter ? (
            <FlexBetween gap="1rem">
              <img src="https://feedbuzz.onrender.com/assets/twitter.png" alt="twitter" />
              <Box>
                <Typography color={main} fontWeight="500">
                  Twitter
                </Typography>
                <Typography color={medium}>Social Network</Typography>
                <Typography color={main}><a href={`${twitterHandle}`} target="_blank" rel="noopener noreferrer">{twitterHandle}</a></Typography>
              </Box>
            </FlexBetween>
          ) : (
            <FlexBetween gap="1rem">
              <TextField
                label="Twitter Handle"
                value={twitterHandle}
                onChange={(e) => setTwitterHandle(e.target.value)}
              />
              <Button variant="contained" onClick={handleTwitterSave}>Save</Button>
            </FlexBetween>
          )}

          <EditOutlined sx={{ color: main }} onClick={handleTwitterEdit} />
        </FlexBetween>

        {/* LinkedIn Edit */}
        <FlexBetween gap="1rem">
          {!editingLinkedin ? (
            <FlexBetween gap="1rem">
              <img src="https://feedbuzz.onrender.com/assets/linkedin.png" alt="linkedin" />
              <Box>
                <Typography color={main} fontWeight="500">
                  Linkedin
                </Typography>
                <Typography color={medium}>Network Platform</Typography>
                <Typography color={main}><a href={linkedinProfile} target="_blank" rel="noopener noreferrer">{linkedinProfile}</a></Typography>
              </Box>
            </FlexBetween>
          ) : (
            <FlexBetween gap="1rem">
              <TextField
                label="Linkedin Profile"
                value={linkedinProfile}
                onChange={(e) => setLinkedinProfile(e.target.value)}
              />
              <Button variant="contained" onClick={handleLinkedinSave}>Save</Button>
            </FlexBetween>
          )}

          <EditOutlined sx={{ color: main }} onClick={handleLinkedinEdit} />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;

