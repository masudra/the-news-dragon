import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebookF,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import './RightNav.css'


const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary mb-2"><FaGoogle className='me-2'/>Login With Google</Button>
            <br/>
      <Button variant="outline-primary"><FaGithub  className='me-2'/>Login With GitHub</Button>

      <div className='mt-5'>
        <h4>Flow us </h4>
        
      <ListGroup>
      <ListGroup.Item><FaFacebookF></FaFacebookF>FaceBook</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
      <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
      <ListGroup.Item><FaLinkedin></FaLinkedin>Linkedin</ListGroup.Item>
    </ListGroup>
      </div>

      <Qzone></Qzone>

      <div className='bg-img'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, impedit illum quos amet porro sint reiciendis obcaecati officiis labore aspernatur!</p>
      </div>
            
        </div>
    );
};

export default RightNav;