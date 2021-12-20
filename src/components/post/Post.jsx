import './post.css'
import { MoreVert } from '@material-ui/icons'
export default function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src='/assets/person/person1.jpg'/>
                        <span className='postUsername'> Safak Kocaoglu</span>
                        <span className='postDate'>5 mins ago</span>
                    </div>
                    <div className="postTopRight">
<MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className='postText'>Hey! Its my first post:)</span>
                    <img className='postBottom' src="assets/metro.jfif" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="assets/like.png" alt="" />
                        <img className='likeIcon' src="assets/heart.jpg" alt="" />
                        <span className='postLikeCounter'>32 people liked it</span>
                    </div>
                    <div className="postBottomRight"></div>
                </div>
            </div>
        </div>
    );
    }
