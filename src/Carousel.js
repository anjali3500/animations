import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel'; 
import CardsCat from './CardsCat'; 
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import background from "./background.gif"
import './Carousel.css';  
import Heading from "./heading.js"
function Owldemo1() {  

    const img = [
        "https://images.unsplash.com/photo-1638913662584-731da41f5a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60 ",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1638913662584-731da41f5a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60 ",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
      
    ];
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: false,
        // navText: ["<", ">"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 4,
            }
            // 1000: {
            //     items: 5,
    
            // }
        },
    };
          
          return (  
            <div style={{
                // backgroundImage: "url(" + background + ")",
                backgroundColor:"#2e4057",
                backgroundSize: "cover",
                height: "100vh",
              }}>  
          <div class='container-fluid' >      
           <Heading/>
       </div>  
       <div class='container-fluid' >            
        {/* <OwlCarousel items={4}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >   */}
          <OwlCarousel className="slider-items owl-carousel owl-theme" 
          loop
          nav
           {...options}>
          
           <div>
               <CardsCat/>
           </div>
           <div>
               <CardsCat/>
           </div>
           <div>
               <CardsCat/>
           </div>
           <div>
               <CardsCat/>
           </div>
           <div>
               <CardsCat/>
           </div>
           <div>
               <CardsCat/>
           </div>
           <div>
               <CardsCat/>
           </div>
           <div>
               <CardsCat/>
           </div>
      </OwlCarousel>  
      </div>  
  
      </div>  
          )  
        }  
       
        
  
export default Owldemo1  