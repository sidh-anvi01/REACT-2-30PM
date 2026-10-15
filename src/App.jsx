// // import React, { Component } from 'react'

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>

// //       </div>
// //     )
// //   }
// // }




// // import React from 'react'

// // export default function App() {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }




// // import React from 'react'

// // function App() {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default App

// // import React from 'react'

// // const App = () => {

// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default App





// // import React from 'react'

// // const App = () => {
// //   return (
// //     <div>
// //       <h1 style={{color:"blue",fontSize:100,
// // backgroundColor:"orangered",


// //       }}>this is khushman</h1>

// // <div style={{height:100,
// //   width:100,
// //   backgroundColor:"blue"
// // }}>

// // </div>

// //     </div>
// //   )
// // }

// // export default App



// import React, { useState } from 'react'
// import HomePage from './pages/HomePage'
// import PlantPage from './pages/PlantPage'
// import BootStrapPage from './pages/BootStrapPage'
// import ExternalStyle from './pages/ExternalStyle'
// import StateEx from './components/StateEx'
// import LoginScreen from './auth/LoginScreen'
// import FormHandling from './components/FormHandling'
// import ListRendring from './components/ListRendring'
// import ListDoubt from './components/ListDoubt'
// import UseEffectEx from './components/UseEffectEx'
// import FetchEx from './components/FetchEx'
// const App = () => {

// const [isUser,setIsUser]=useState(true)

// if(isUser){
//   return <FetchEx/> 
// }
// else{
//   return <HomePage/>
// }

//   return (
//     <div>
//       {/* <HomePage/> */}
//       {/* <PlantPage/> */}
// {/* <BootStrapPage/> */}
// {/* <ExternalStyle/> */}
// {/*  */}
// {/* <StateEx/> */}
// {/* <FormHandling/> */}

// {/* <ListRendring/> */}
// {/* <ListDoubt/> */}


// {/* <UseEffectEx/> */}
// <FetchEx/>


// {/* {
//   isUser ? <HomePage/> : <LoginScreen/>
// } */}






//     </div>
//   )
// }

// export default App










// import React from 'react'
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import NavBar from './components/NavBar'
// import Footer from './components/Footer'
// import HomePage from './pages/HomePage'
// import BootStrapPage from './pages/BootStrapPage'
// import PlantPage from './pages/PlantPage'


// const App = () => {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/boot' element={<BootStrapPage />} />
//         <Route path='/plant' element={<PlantPage />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   )
// }

// export default App




// import React from 'react'
// import UseRefEx from './components/UseRefEx'
// import UseMemeoEx from './components/UseMemeoEx'

// const App = () => {
//   return (
// <UseMemeoEx/>
//   )
// }

// export default App



// import React from 'react'
// import UserContext from './context/userContext'
// import UserScreen from './components/UserScreen'
// import UseMemeoEx from './components/UseMemeoEx'

// const App = () => {
//   const name="rohan verma"
//   return ( 
//     <UserContext.Provider value={name}>
//       <UserScreen />
//     <UseMemeoEx/>
//     </UserContext.Provider>
//   )
// }

// export default App





// your code for 10:30am 


// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>hello bootstrap </h1>
//       <button className='btn btn-info'>click</button>
      

// <>
//   {/* Hello world */}
//   {/* <div id="carouselExample" className="carousel carousel-overlay slide">
//     <div className="carousel-inner rounded-5">
//       <div className="carousel-item active">
//         <img src="https://srv.carbonads.net/static/30242/271dc4f12a21734321a8a7c91a983d2402f2b34e" className="d-block w-100" alt="..." />
//       </div>
//       <div className="carousel-item">
//         <img src="https://srv.carbonads.net/static/30242/271dc4f12a21734321a8a7c91a983d2402f2b34e" className="d-block w-100" alt="..." />
//       </div>
//       <div className="carousel-item">
//         <img src="https://srv.carbonads.net/static/30242/271dc4f12a21734321a8a7c91a983d2402f2b34e" className="d-block w-100" alt="..." />
//       </div>
//     </div>
//     <div className="carousel-overlay-controls">
//       <div>
//         <button
//           className="btn-icon btn-sm btn-subtle theme-secondary"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-icon-prev" aria-hidden="true" />
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="btn-icon btn-sm btn-subtle theme-secondary"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="next"
//         >
//           <span className="carousel-icon-next" aria-hidden="true" />
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//       <div className="carousel-indicators">
//         <button
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide-to={0}
//           className="active"
//           aria-current="true"
//           aria-label="Slide 1"
//         />
//         <button
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide-to={1}
//           aria-label="Slide 2"
//         />
//         <button
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide-to={2}
//           aria-label="Slide 3"
//         />
//       </div>
//     </div>
//   </div> */}

// <button type="button" class="btn-solid theme-primary" commandfor="invokerDrawer" command="show-modal">
//   Open drawer
// </button>

// <dialog class="drawer drawer-start" tabindex="-1" id="invokerDrawer" aria-labelledby="invokerDrawerLabel">
//   <div class="drawer-header">
//     <h5 class="drawer-title" id="invokerDrawerLabel">Invoker Commands</h5>
//     <button type="button" class="btn-close" commandfor="invokerDrawer" command="close" aria-label="Close"></button>
//   </div>
//   <div class="drawer-body">
//     <p>This drawer opens with <code>command="show-modal"</code> and closes with <code>command="close"</code>. No Bootstrap JavaScript is involved.</p>
//   </div>
// </dialog>




// </>


      
//     </div>
//   )
// }

// export default App




import React from 'react'
import './pages/HomePage'
import HomePage from './pages/HomePage'
import BootStrapPage from './pages/BootStrapPage'
const App = () => {
  return (
    <div>
      <HomePage ></HomePage>
      {/* <BootStrapPage/> */}
      
    </div>
  )
}

export default App
