
import React from 'react'
import "./home.css"
import Product from "./Product"
import { useSpring ,animated} from 'react-spring';
function Home() {
    const props = useSpring( {opacity: 1, from: {opacity: 0},delay:500})
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/phase3/mainbank/pc/Slice_9NP.jpg" alt="vffgsh"/>
                <animated.div style={props}>
                <div className="home__productrow">
               
    
  
                    <Product key="4484878" title="Dolor officia ullamco ad mollit excepteur enim" rating={5}  cost={4} image="https://images-eu.ssl-images-amazon.com/images/I/61E40MJG%2B4L.__BG0,0,0,0_FMpng_AC_UL270_SR188,270_.jpg"
                    />
                    <Product key="64846" title="Dolor officia ullamco ad mollit excepteur enim"rating={5}  cost={6666} image="https://images-eu.ssl-images-amazon.com/images/I/71cnuWb2i-L._AC_UL270_SR270,270_.jpg"
                    />
                    <Product key="1564544" title="Eu in in excepteur pariatur.Elit aliqua aliqua commodo est consectetur ut." rating={5}  cost={556}  image="https://images-eu.ssl-images-amazon.com/images/I/81DPTref3fL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL270_SR180,270_.jpg"
                     />  
                       
                </div>
                <div className="home__productrow">
                <Product key="654654" title="Nulla aliqua quis laborum ipsum." rating={5}  cost={4566}image="https://images-eu.ssl-images-amazon.com/images/I/41F5JSDWcfL._AC_SX184_.jpg"
                 />
                <Product key="6454" title="Quis tempor ad mollit quis consectetur laboris ." rating={5} cost={60000}  image="https://images-eu.ssl-images-amazon.com/images/I/81B3KQ5LYTL._AC_UL270_SR270,270_.jpg"
                 />
                <Product key="645456" title="Incididunt dolore culpa et deserunt tempor proident " rating={5} cost={760} image="https://images-eu.ssl-images-amazon.com/images/I/31ACGPsSANL._AC_SX184_.jpg"
                 />
                </div>
            </animated.div> 

            </div>
        </div>
    )
}

export default Home
