import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';

import {
    useQuery,
    gql
  } from "@apollo/client";

import { TopicsContext } from '../../context/TopicsContext';


const Topics = ({setSelectTopic}) => {

    const { search } = useContext(TopicsContext);

    const TOPICS = gql`
        query GetTopics { 
            topic(name: "${search}") {
            id
            name
            relatedTopics(first: 10) {
                id
                name
            }
            stargazerCount
            }
        }
    `;

    const { loading, error, data } = useQuery(TOPICS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    const { topic } = data;

    const selectTopic = (topic) => {
        setSelectTopic(topic);
    }

    return (
        <>
            {
                topic !== null 
                ? 
                    <div>
                        {
                            topic.relatedTopics.map( topic => (
                                <div 
                                    key={topic.id}
                                    className="list-topics"
                                >
                                    <a 
                                        href="#!" 
                                        onClick={() => selectTopic(topic)} 
                                        className="waves-effect waves-teal btn-flat"
                                    >
                                        <span>{topic.name}</span>
                                    </a>
                                </div>
                            ))
                        }

                        <p className="green darken-2 box-info">Total: {topic.stargazerCount}</p>
                    </div>
                :
                    <p className="red darken-4 box-info">No Topics</p>
            }

            
        </>
    )
}

export default Topics;

Topics.propTypes = {
    setSelectTopic: PropTypes.func
}