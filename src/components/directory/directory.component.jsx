import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component'
import {connect} from "react-redux";
import {selectDirectorySections} from "../../redux/directory/directory.selector";
import {createStructuredSelector}  from "reselect";

const  Directory =({sectionData})=>{
  return (
    <div className="directory-menu">
        {sectionData.map(({id,...remsectionData})=>
        (<MenuItem key={id} {...remsectionData} />))
        
        }
    </div>
  )

}

const mapStateToProps = createStructuredSelector({
  sectionData : selectDirectorySections
});
  
 export default connect(mapStateToProps)(Directory);