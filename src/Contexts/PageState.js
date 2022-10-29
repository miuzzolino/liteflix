import Container from '@mui/material/Container'
import { useEffect, useState } from "react"
import { getBackgroundMovie, getListMovie } from "../Services/MovieServices"
import { PageContext } from "./PageContext"

export const PageState = ({ children }) => {
    useEffect(() => {
        getBackgroundMovieData()
        getMovieListData()
    }, [])

    const [background, setBackground] = useState('')
    const [title, setTitle] = useState('')
    const [movieList, setMovieList] = useState('')

    const getBackgroundMovieData = () => {
        fetch(getBackgroundMovie()).then(resolve => {
            return resolve.json();
        }).then(data => {
            setBackground(`https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`)
            setTitle(data.results[0].title)
        });
    }

    const getMovieListData = () => {
        fetch(getListMovie()).then(resolve => {
            return resolve.json();
        }).then(data => {
            setMovieList(data.results.slice(1, 5))
        });
    }

    return (
        <>
            <PageContext.Provider value={{
                background,
                title,
                movieList
            }}>
                <Container sx={{ mt: 4 }}>
                    {children}
                </Container>
            </PageContext.Provider>

        </>
    )
}