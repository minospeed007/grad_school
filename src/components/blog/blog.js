import dos from '../../assests/dos.png';
import './blog.css';

const Blog=()=>{


    return(
        <div className="blog-root-div">
            <div className="blog-div">

            <div className="text-div">
                
<div className='container-blog'>
    <div className='blog'>
    <h2 className='h2-blog'>What is Denial of Service (DoS)?</h2>
    <div className="img-div-blog">
                <img src={dos} alt='' className="dos-img"/>
            </div>

                <p className='blog-text-p'>
                Denial of Service is a form of cyberattack that aims to disrupt a system’s availability by overwhelming it with traffic or requests. DoS is executed using compromised devices known as zombies controlled by an attacker, often part of a botnet.
The zombies often flood the target system with massive volumes of malicious traffic, such as HTTP requests or UDP packets, exhausting resources like bandwidth or server capacity, causing the system to become unavailable to genuine requests.
Machine learning models, such as Random Forests and Neural Networks, are effective in detecting DoS attacks.

                </p>
                
                </div>
                
                
            </div>
            </div>
            
            </div>
        </div>
    )

}

export default Blog;