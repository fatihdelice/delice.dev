import Card from '../components/card';
import { playApps } from '../util/api';
import { PlayStoreIcon } from '../components/icons';


const Apps = () => {
  return (
    <div className='w-main-content max-w-full w-full mv-0 mx-auto grid'>
      <h1 className='text-2xl mb-4 font-bold flex items-center gap-2'><PlayStoreIcon />Play Store</h1>
      <div className='grid gap-4 md:gap-8'>
        {
          playApps.map((item) => {
            return (
              <Card item={item}/>
            );
          })
        }
      </div>
    </div>
  )
}

export default Apps;