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

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };

  addDoubleQuotes(txt) {
    sonString = txt.replaceAll("([\\w]+)[ ]*=", "\"$1\" ="); // to quote before = value
    jsonString = txt.replaceAll("=[ ]*([\\w@\\.]+)", "= \"$1\""); // to quote after = value, add special character as needed to the exclusion list in regex
    jsonString = txt.replaceAll("=[ ]*\"([\\d]+)\"", "= $1"); // to un-quote decimal value
    jsonString = txt.replaceAll("\"true\"", "true"); // to un-quote boolean
    jsonString = txt.replaceAll("\"false\"", "false"); // to un-quote boolean
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>Place your json object here:</h1>
          <textarea rows="20" cols="120">
 
          </textarea>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
