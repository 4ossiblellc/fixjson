/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
var jsonic = require('jsonic');

class Home extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      value: 'Put your json object here.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.postInput = this.postInput.bind(this);
  }
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };

 handleChange(event) {
    this.setState({value: event.target.value});
  }

  postInput(){
    var parsed;
    try{
        parsed = jsonic(this.state.value);
        this.setState({error: null});
        this.setState({value: JSON.stringify(parsed)});
    } catch (e){
        this.setState({error: e.name + " : " + e.message});
    }
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>Place your json object here:</h1>
             <div>{(function(error) {
                      if (error) {
                        return (<div>{error}</div>);
                      }
                    })(this.state.error)}</div>
          <textarea rows="20" cols="120" value={this.state.value} onChange={this.handleChange}>
          </textarea>
          <button onClick={this.postInput}>Submit</button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
