import Card from '../components/card';
import { posts } from '../util/api';
import { PlayStoreIcon } from '../components/icons';


const Apps = () => {
  const filteredData = posts.filter(item => item.pinned === true);
  const restOfData = posts.filter(item => item.pinned !== true);
  return (
    <div className='w-main-content max-w-full w-full mv-0 mx-auto '>
      <h1 className='text-2xl py-4 font-bold flex items-center gap-2'><PlayStoreIcon />Play Store</h1>
      <div className='flex gap-4 md:gap-8 flex-wrap'>
        {
          filteredData.map((item) => {
            return (
              <Card item={item} user={user} />
            );
          })
        }
        {
          restOfData.map((item) => {
            return (
              <Card item={item} />
            );
          })
        }
      </div>
    </div>
  )
}

export default Apps;