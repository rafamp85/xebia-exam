import React from 'react';
import { PropTypes } from 'prop-types';

import {
    useQuery,
    gql
  } from "@apollo/client";



const Topic = ({selectedTopic}) => {

    const {id, name} = selectedTopic;

    const TOPIC = gql`
        query GetTopics { 
            topic(name: "${name}") {
                stargazerCount
            }
        }
    `;

    const { loading, error, data } = useQuery(TOPIC);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const { topic } = data;

    return(
        <div className="card-panel teal lighten-2 col s12 flexible-box">
            <div className="black-text">
            {
                selectedTopic.name !== '' 
                ? 
                    <div>
                        <p className="topic-selected">{name}</p>

                        <div className="card-content">
                            <p>Total Topic: {topic.stargazerCount}</p>
                            <p>ID: {id}</p>
                        </div>
                    </div>
                : 
                    <p className="topic-selected">Select a Topic</p>
            }
                
            </div>
        </div>
    );
};

export default Topic;

Topic.propTypes = {
    setSelectTopic: PropTypes.func
}