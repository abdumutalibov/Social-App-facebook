import './topbar.css'
import { Person, Search, Chat, Notifications } from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className= 'topbarContainer'>
<div className='topbarLeft'>
<span className='logo'>Lamasocial</span>
</div>
<div className='topbarCenter'>
    <div className='searchbar'>
<Search/>
<input placeholder='Search for friend, post or video' className='searchInput'/>
    </div>
</div>
<div className='topbarRight'>
    <div className='topBarLinks'>
        <span className='topbarLink'>Homepage</span>
        <span className='topbarLink'>Timeline</span>
    </div>
    <div className='topbarIcons'>
    <div className='topbarIconItem'> <Person/>
        <span className='topbarIconBadge'>1</span>
        </div>
        <div className='topbarIconItem'> <Chat/>
        <span className='topbarIconBadge'>1</span>
        </div>
        <div className='topbarIconItem'> <Notifications/>
        <span className='topbarIconBadge'>1</span>
        </div>
       
    </div>
<img src='/assets/person/1.png' alt='' className='topbarImg '/>
</div>
        </div>
    )
}
