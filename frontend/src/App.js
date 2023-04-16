import { Container } from "react-bootstrap";
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Footer from "./components/Footer";
import React from "react";



function clickMe(){
  alert('You clicked me!');
}
// const Category = ({cat}) => ['Music', 'Sports&Fitness', 'Food&Drink']

// // return (
//   <div className='CategoryName'>
//     {
// button.Category.map((cat, index) => <div className='CategoryName'>key={}{cat}</div>)
// }

// </div>
// // );


function App () {
  // const Category = ({cat}) => ['Music', 'Sports&Fitness', 'Food&Drink']
  return ( 
      <>
      <Header />
      <main>
      <Container>
      <h3>Check Out These Trending Categories!</h3>
    
      <button class= "M" onClick={clickMe}>
            Music
      </button>
    
      <button class= "S" onClick={clickMe}>
            Sports&Fitness
      </button>

      <button class="F" onClick={clickMe}>
            Food&Drink      
      </button>
    

</Container>
        <HomeScreen />
        </main>
        <Footer />
      </>
  );
}
  

//   return () {
//       this.state = [
//       { cat: "Music" },
//       { cat: "Sports&Fitness" },
//       { cat: "Food&Drink" },
//   ];
// }
//   return (
//     <div>
//     {this.state.map((cat) = {
//         return (
//       <div>
//        <h1>{cat.index}</h1>
//       </div>
//   );
//   })}
//  </div>
// );
  
      export default App;
