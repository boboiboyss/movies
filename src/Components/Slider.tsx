import {useEffect, useState, useRef} from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight,} from 'react-icons/hi2'
const IMAGE_BASE_URL='https://image.tmdb.org/t/p/original'
const screenWidth = window.innerWidth;

interface ISlider {
    // movieListt : {
    // adult : boolean,
    // backdrop_path : string,
    // genre_ids : [],
    // id : [],
    // media_type : string,
    // original_language : string,
    // overview : string,
    // popularity : number,
    // poster_path : string,
    // release_date : Date,
    // title : string,
    // video : boolean,
    // vote_average : number
    // vote_count : 4606
    // }
    backdrop_path : string
}
function Slider() {
    const [movieList, setMovieList] = useState<ISlider[]>([])
    const elementRef = useRef(null)
    useEffect(() => {
        getTrendingMovies()
        console.log(elementRef)
    }, [])

    const getTrendingMovies =  () =>  {
         GlobalApi.getTrendingVideos.then(res => {
            setMovieList(res.data.results)
        })
    }

    const sliderRight=(element:any) => {
        element.scrollLeft+= screenWidth-110
    }

    const sliderLeft=(element:any) => {
        element.scrollLeft-= screenWidth-110
    }

  return (
    <div>
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)} />

        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)} />
    
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
        {movieList.map((item, index) => (
            <img key={index} src={IMAGE_BASE_URL + item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
            )
        )}
    </div>
    </div>
  )
}

export default Slider