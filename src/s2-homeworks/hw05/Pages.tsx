import React from 'react'
import {Routes, Route, Navigate, NavLink} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import s from './pages/Pages.module.css'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    Error404: '/pages/Error404'
}

function Pages() {
    return (
        <div className={s.wrap}>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                <Route path={"/"} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                {/*<Route ...*/}

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                {/*<Route ...*/}
                {/*<Route ...*/}
                {/*<Route ...*/}

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                {/*<Route ...*/}
                <Route path={PATH.Error404} element={<Error404/>}/>
                <Route path={'/*'} element={<Navigate to={PATH.Error404}/>}/>
            </Routes>
        </div>
    )
}

export default Pages