import { ThreeDots } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen' >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#6600FF"
        ariaLabel="loading"
        
      />
    </div>
  )
}

export default Loader;