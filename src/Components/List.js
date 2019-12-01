import React, { Component } from 'react';
import AppContext from '../Context/app-context'


class List extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {(context) => context.data.map((post) => {
                    return (
                        <div className="card" key="post.id">
                            <div className="card-body">
                                <h3 className="card-title">{post.title}</h3>
                                <h4 className="card-subtitle">{post.author}</h4>
                                <p className="card-text">{post.description}</p>
                            </div>
                        </div>

                       )} 
                    )
                }
            </AppContext.Consumer>
        );
    }
}

export default List