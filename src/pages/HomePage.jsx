// import React from 'react'
// import '../style/HomePage.css'
// import Footer from '../components/Footer'
// import NavBar from '../components/NavBar'
// import { useNavigate } from 'react-router-dom'
// const categories = [
//   { id: 1, icon: '🐶', name: 'Dogs', count: '120+ breeds' },
//   { id: 2, icon: '🐱', name: 'Cats', count: '80+ breeds' },
//   { id: 3, icon: '🐦', name: 'Birds', count: '45+ species' },
//   { id: 4, icon: '🐠', name: 'Fish', count: '60+ varieties' },
//   { id: 5, icon: '🐹', name: 'Small Pets', count: '30+ kinds' },
//   { id: 6, icon: '🦎', name: 'Reptiles', count: '25+ kinds' },
// ]

// const products = [
//   {
//     id: 1,
//     emoji: '🦴',
//     tag: 'Best Seller',
//     name: 'Premium Chew Bones',
//     desc: 'Dental care treats for adult dogs',
//     price: 349,
//     old: 499,
//   },
//   {
//     id: 2,
//     emoji: '🐾',
//     tag: 'New',
//     name: 'Cozy Cat Bed',
//     desc: 'Soft plush nest, machine washable',
//     price: 899,
//     old: 1299,
//   },
//   {
//     id: 3,
//     emoji: '🦜',
//     tag: 'Popular',
//     name: 'Bird Seed Mix 1kg',
//     desc: 'Balanced nutrition for parrots',
//     price: 259,
//     old: 349,
//   },
//   {
//     id: 4,
//     emoji: '🐟',
//     tag: 'Combo',
//     name: 'Aquarium Starter Kit',
//     desc: 'Tank, filter, light & fish food',
//     price: 1899,
//     old: 2499,
//   },
// ]

// const features = [
//   { icon: '🚚', title: 'Free Delivery', text: 'On all orders above ₹499' },
//   { icon: '🩺', title: 'Vet Approved', text: 'Curated by certified vets' },
//   { icon: '🔄', title: 'Easy Returns', text: '7-day no-questions returns' },
//   { icon: '🎁', title: 'Pet Points', text: 'Earn rewards on every order' },
// ]

// const testimonials = [
//   {
//     id: 1,
//     text: 'Bruno absolutely loves the chew bones. Delivery was super fast and the packaging was adorable!',
//     name: 'Ananya Sharma',
//     pet: 'Golden Retriever parent',
//     avatar: '👩',
//   },
//   {
//     id: 2,
//     text: 'I got my aquarium kit here for half the price of local stores. Quality is genuinely great.',
//     name: 'Rohan Mehta',
//     pet: 'Aquarium hobbyist',
//     avatar: '👨',
//   },
//   {
//     id: 3,
//     text: 'The team helped me pick the right food for my senior cat. Real care, not just selling.',
//     name: 'Priya Nair',
//     pet: 'Persian cat parent',
//     avatar: '👩‍🦰',
//   },
// ]

// const HomePage = () => {


// function printHello(){
//   // alert("helo")
//   console.log("hello")
// }
// printHello()


// const isLoggin=true 


// const user={
//   name:"rohan",
//   age:32,
//   phone:3456789,
//   email:"roohan@gmail.com"
// }


// const navigate=useNavigate()

//   return (
//    <>
   
//    <h1>hello</h1>


// <h1>{!isLoggin ? "this is home page" :"this is login page"}</h1>

// <h1>{user.name}</h1>
// <h1>{user.age}</h1>



// <button onClick={()=>navigate("/boot")}>click</button>

//     <div id="carouselExampleIndicators" className="carousel slide">
//   <div className="carousel-indicators">
//     <button
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to={0}
//       className="active"
//       aria-current="true"
//       aria-label="Slide 1"
//     />
//     <button
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to={1}
//       aria-label="Slide 2"
//     />
//     <button
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to={2}
//       aria-label="Slide 3"
//     />
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src="..." className="d-block w-100" alt="..." />
//     </div>
//     <div className="carousel-item">
//       <img src="..." className="d-block w-100" alt="..." />
//     </div>
//     <div className="carousel-item">
//       <img src="..." className="d-block w-100" alt="..." />
//     </div>
//   </div>
//   <button
//     className="carousel-control-prev"
//     type="button"
//     data-bs-target="#carouselExampleIndicators"
//     data-bs-slide="prev"
//   >
//     <span className="carousel-control-prev-icon" aria-hidden="true" />
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button
//     className="carousel-control-next"
//     type="button"
//     data-bs-target="#carouselExampleIndicators"
//     data-bs-slide="next"
//   >
//     <span className="carousel-control-next-icon" aria-hidden="true" />
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//    </>
//   )
// }

// export default HomePage




// import React from 'react'

// const HomePage = () => {
//   const name="rohan" 
//   return (
//     <div>
//       <h1>home page</h1>
//       <h1>home page</h1>
//       <h1>home page</h1>
//       <h1>{name}</h1>
//       <h1>home page</h1>
//       <h1>home page</h1>
//       <h1>home page</h1>
//       <h1>home page</h1>
//     </div>
//   )
// }

// export default HomePage



// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// const HomePage = () => {
// const navigate=useNavigate()


// const user={
//   name:"rohan",
//   age:21,
//   email:"rohan@gmail.com" ,
// }


//   return (
//     <div>
//       <button onClick={()=>navigate("/about",{state:user})}>  click to about</button>
      
//     </div>
//   )
// }

// export default HomePage



import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
const navigate=useNavigate()

  const user=[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]
  return (
    <div>
      {
        user.map((u)=>(
          <div style={{height:300,width:300,backgroundColor:"blue",marginTop:30}}>
            <h1>{u.name}</h1>
            <h1>{u.email}</h1>
            <h1>{u.phone}</h1>
             <button onClick={()=>navigate("/about",{state:u})}>go to about</button>
          </div>
        ))
      }
      
    </div>
  )
}

export default HomePage
