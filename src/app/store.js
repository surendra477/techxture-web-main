import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';
export default configureStore({
  reducer: {
    user: userReducer,
    app:appReducer
  },
});

// import React, { Component } from 'react';

// class store extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     );
//   }
// }

// export default store;