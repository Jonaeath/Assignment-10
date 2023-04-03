import React, {useContext, useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';

const LeftSideNav = () => {
    const [topics, setTopic] = useState([]);

    const handalwithGoogle =()=>{
  

   }

//    const {signInWithGoogle} = useContext(AuthContext);

//    const googleProvider = new GoogleAuthProvider();

//    const handalwithGoogle = () =>{
//     signInWithGoogle(googleProvider)
//     .then(result =>{
//         const user = result.user;
//         console.log(user);
//     })
//         .catch(error=>console.error(error))
//    }
   
   useEffect( ()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(result=>result.json())
            .then(alldata=>setTopic(alldata));
   }, []);
     
      

       return (
        <div>
            <Button onClick={handalwithGoogle}>
                <FaGoogle></FaGoogle> Log In Google
            </Button> 
             {
                 topics?.data?.map(topic=> <div key ={topic.id}>
                    <div>
                    {topic.name}
                    <Image src={topic.logo} style={{height:'30px'}}></Image>
                    </div>
                 </div>)
            }
           
        </div>
    );
};

export default LeftSideNav;