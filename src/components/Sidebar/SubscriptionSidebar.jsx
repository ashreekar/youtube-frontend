import { useSelector } from 'react-redux'
import { FaArrowRight } from 'react-icons/fa';
import WhenLogout from '../Header/LoginStates/WhenLogout';

function SubscriptionSidebar() {
  const loggedIn = useSelector(store => store.user.loggedIn);
  const user = useSelector(store => store.user.user);

  if (!loggedIn) {
    return <div className='w-full h-40 flex flex-col items-start justify-center'>
      <WhenLogout/>
      <p className='text-base font-medium'>Login to see channels likes and comments</p> 
    </div>
  }
  return (
    <div>SubscriptionSidebar</div>
  )
}

export default SubscriptionSidebar