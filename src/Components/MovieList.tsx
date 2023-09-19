import React, {useEffect, useState, useRef} from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import {IoChevronBackOutline, IoChevronForwardOutline} from 'react-icons/io5'
import HrMovieCard from './HrMovieCard'

interface IPropsMovie {
    genreId: number,
    index_ : number
}

interface IStateMovie {
    poster_path : string,
    backdrop_path : string,
    title : string
}

// const screenWidth = window.innerWidth;

function MovieList({genreId, index_}:IPropsMovie) {
    const [movieList, setMovieList] = useState<IStateMovie[]>([])

    const elementRef = useRef(null)

    useEffect(() => {
        getMovieByGenreId()
    },[movieList])

  const getMovieByGenreId = async () => {
   await GlobalApi.getMovieByGenreId(genreId).then(res => {
        // console.log(res.data.results)
        //flex overflow-x-auto gap-8 w-full scrollbar-none scroll-smooth
        setMovieList(res.data.results)
    })
  }

  const sliderRight=(element:any) => {
    element.scrollLeft+= 500
  }

  const sliderLeft=(element:any) => {
    element.scrollLeft-= 500
  }
  return (
    <div className='relative'>
       <IoChevronBackOutline onClick={() => sliderLeft(elementRef.current)} className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${index_%3==0? 'mt-[80px]':'mt-[150px]' }`} />

      <div ref={elementRef} className='flex overflow-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-5 '>
        {movieList.map((item, index) => (
          <>
            {index_%3==0? <HrMovieCard movie={item} key={index_} /> : <MovieCard movie={item} key={index}/>}
          </>
        ))}
      </div>
      
      <IoChevronForwardOutline onClick={() => sliderRight(elementRef.current)} className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${index_%3==0?'mt-[80px]':'mt-[150px]'} top-0 right-0`} />

    </div>
  )
}

export default React.memo(MovieList)
