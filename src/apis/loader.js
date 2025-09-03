

export const detailFilm = async ({params}) => {
  try {
    const res = await fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=758cc45e`)
 
    return res
  } catch (error) {
    throw error
  }
    
}