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
import jsonic from 'jsonic';
import jsonFormat from 'json-format';
import ua from 'universal-analytics';
import { analytics } from '../../config';


class Home extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      value: ''
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

  processJson(obj) {
    let parsed;
    // fix the json as possible
    parsed = jsonic(obj);

    // format json
    parsed = jsonFormat(parsed, {
      type: 'tab'
    });
    return parsed;
  }

  sendGAEvent(callback) {
    let visitor = ua(analytics.google.trackingId);
    visitor.event({
      ec: "Home",
      ea: "Submit",
      el: "Cannot Process",
      ev: JSON.stringify(this.state.value),
    }, callback);
  }

  postInput() {
    let parsed;

    try{
        parsed = this.processJson(this.state.value);
        this.setState( {
          error: {
            type:'success',
            message: 'Finished parsing.'
          },
          value: parsed
        });
    } catch (e){
        this.setState({
          error: {
            type:'error',
            message:e.name + " : " + e.message}
          }
        );
        this.sendGAEvent(function(err){
          if (err)
            console.error(err);
        });
    }

  }



  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2 className={s.title}>Current support:</h2>
          <div>
             <ul>
             <li>add missing double quote(s)</li>
             <li>format json with indentations</li>
             <li>remove trailing commas</li>
             </ul>
          </div>
          <h2 className={s.title}>Place your json object here:</h2>

             <div>{(function(error) {
                      if (error) {
                        return (<div className={error.type === 'error'?s.error:s.success}>{error.message}</div>);
                      }
                    })(this.state.error)}</div>
          <textarea rows="20" placeholder="Put your JSON object here." cols="120" value={this.state.value} onChange={this.handleChange}>
          </textarea>
          <button onClick={this.postInput}>Submit</button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
