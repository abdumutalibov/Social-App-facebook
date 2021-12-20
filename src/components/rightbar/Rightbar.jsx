import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar() {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assets/bithday.jpg" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today
                    </span>
                </div>
                <img className='rightbarAd' src="assets/more3.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
            {Users.map((u) => (
                <Online key={u.id} user={u}/>
            ))}
                </ul>

            </div>
        </div>
    )
}
