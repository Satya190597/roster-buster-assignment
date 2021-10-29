import React from 'react';
import TodayTask from '../TodayTask.js/TodayTask';

const Home = (props) => {
    return (
        <>
            <TodayTask todayTask = {props.todayTask}/>
        </>
    )
}

export default Home;