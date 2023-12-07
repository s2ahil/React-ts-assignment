// import React, { useEffect, useState } from "react";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import Box from "@mui/material/Box";

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// const SecondPage = () => {
//   const [posts, setPosts] = useState<Post[]>([]);



//   useEffect(() => {
//     // Fetch data from the API
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => setPosts(data));
//   }, []);

//   const columns: GridColDef[] = [
//     { field: "id", headerName: "ID", width:90 },
//     { field: "title", headerName: "Title", flex: 1 },
//     { field: "body", headerName: "Body", flex: 1 },
//   ];

//   return (
//     <>
//       <h2>Second Page</h2>
//       <Box sx={{ height: 400, width: "100%" }}>
//         <DataGrid
//           rows={posts}
//           columns={columns}
//           // initialState={{
//           //   pagination: {
//           //     paginationModel: {
//           //       pageSize: 5,
//           //     },
//           //   },
//           // }}
//           disableRowSelectionOnClick
//           checkboxSelection
//           pageSizeOptions={[5]}
//         />
//       </Box>
//     </>
//   );
// };

// export { SecondPage };


import React from 'react';
import DataGridComponent from '../reusable components/DataGridComponent1';
import DepartmentListComponent from '../reusable components/DepartmentListComponent2';

const SecondPage = () => {
  return (
    <div>
      <h2>Second Page</h2>


      <p style={{margin:"10px"}}>component 1</p>
      <DataGridComponent />
      <p  style={{margin:"10px"}}>component 2</p>
      <DepartmentListComponent />
    </div>
  );
};

export { SecondPage};