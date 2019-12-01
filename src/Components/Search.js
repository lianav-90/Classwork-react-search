import React, { Component} from 'react';
import AppContext from '../Context/app-context'


class Search extends Component {

    static contextType = AppContext;
    
    url = 'https://it-blog-posts.herokuapp.com/api/posts?filter=';

    fetchData = (event) => {
        const str = event.target.value;
        const filter = JSON.stringify({where:{title: {like: str}}});
        fetch(`${this.url}${filter}`).then(response => response.json()).then(data => this.context.onDataSet(data))
    }

    render() {
        return (
         <input onChange={this.fetchData} />
        );
    }
}

export default Search

