import { useSelector } from 'react-redux'
import { FaArrowRight } from 'react-icons/fa';

function SubscriptionSidebar() {
  const loggedIn = useSelector(store => store.user.loggedIn);
  const user = useSelector(store => store.user.user);

  if (!loggedIn) {
    return <div className='w-full h-40 flex flex-col items-start justify-center'>
      <div className='flex h-12 gap-4 rounded-lg hover:bg-gray-100 justify-items-start items-center py-1 px-3 w-full mb-3'>Subscription <span><FaArrowRight/></span></div>
      <p className='text-base font-medium'>Login to see channels</p>
    </div>
  }
  return (
    <div>SubscriptionSidebar</div>
  )
}

export default SubscriptionSidebar