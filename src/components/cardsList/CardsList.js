import React, {useEffect, useState} from 'react';

import {Card} from "../Card/Card";
import {commentService} from "../../services/comment.service";
import css from "./CardsList.module.css";


const CardsList = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(value => setComments([...value]))
    }, [])

    return (<div className={css.body}>
        {
            comments.length !== 0 && comments.map(value => <Card key={value._id} data={value}/>)
        }
    </div>);
};

// export default CardsList;
export {CardsList};