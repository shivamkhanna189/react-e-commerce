import React from 'react';
import "./homepage.style.scss";
import Directory from '../../components/directory/directory.component'
import {HomePageContainer} from "./homepage.style";


const HomePage = (props)=>{
    return (
        <HomePageContainer>
           <Directory ></Directory>
        </HomePageContainer>
    )
    
}
    
export default HomePage;