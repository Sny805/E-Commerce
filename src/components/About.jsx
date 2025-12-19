import React from 'react'
import ProfileClass from '../ProfileClass'
import { Profile } from '../Profile'

// const About = () => {
//   return (
//     <>
//     <div>About</div>
//     <ProfileClass name="Sunny" email="sunny@gmail.com" address="Hyderabad"/>
//      <Profile name="Sunny" email="sunny@gmail.com" address="Hyderabad"/>
//     </>
    
//   )
// }

// export default About


class AboutClass extends React.Component{
  constructor(props){
    super(props)
       console.log("Parent constructor called")
  }


   componentDidMount(){
      console.log("component did mount Parent")
   }


  render(){
    console.log("Parent render called")
    return(
          <>
          
            <ProfileClass name="Sunny" email="sunny@gmail.com" address="Hyderabad"/>
          </>
    )
  }
}

export default AboutClass;