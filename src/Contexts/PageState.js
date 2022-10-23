import Container from '@mui/material/Container'
import { useContext, useEffect, useState } from "react"
import { getBackgroundMovie } from "../Services/MovieServices"
import { PageContext } from "./PageContext"

export const PageState = ({ children }) => {
    useEffect(() => {
        getBackgroundMovieData()
    }, [])

    const [background, setBackground] = useState('')

    const getBackgroundMovieData = () => {
        fetch(getBackgroundMovie()).then( resolve => {            
            return resolve.json();
        }).then( data => {
            setBackground(`https://image.tmdb.org/t/p/w500${data.results[0].backdrop_path}`)
        });
    }

    return (
        <>
            <PageContext.Provider value={{
                background
            }}>
                <Container sx={{ mt: 4 }}>
                    {children}
                </Container>
            </PageContext.Provider>

        </>
    )
}