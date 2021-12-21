import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({profile}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar = () =>{
        return(
            <>
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
                </ul></>
        )
    }
    const ProfileRightbar = () =>{
        return (
            <>
            <h4 className='rightbarTitle'>Uesr information</h4>
            <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From</span>
                    <span className="rightbarInfoValue">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className='right'>Uesr friends</h4>
            <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                    <img src={`${PF}person/person1.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className='rightbarFollowingName'>John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}person/person2.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className='rightbarFollowingName'>John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}person/person3.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className='rightbarFollowingName'>John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}person/person4.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className='rightbarFollowingName'>John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}person/person5.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className='rightbarFollowingName'>John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}person/person6.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className='rightbarFollowingName'>John Carter</span>
                </div>
            </div>

            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
             {profile ?<ProfileRightbar/> : <HomeRightbar/>} 
            </div>
        </div>
    )
}
