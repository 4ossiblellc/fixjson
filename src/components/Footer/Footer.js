/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h4>What is JSON?</h4>
          <p className={s.contentText}>
            JSON or JavaScript Object Notation is a language-independent open data format that uses human-readable text
            to express data objects consisting of attribute-value pairs.</p>

          <p className={s.contentText}>Although originally derived from the JavaScript scripting language, JSON data can
            be generated and parsed with a wide variety of programming languages including JavaScript, PHP, Python, Ruby
            and Java.
          </p>

          <h4>Why we use JSON?</h4>
          <p className={s.contentText}>Since the JSON format is text only, it can easily be sent to and from a server,
            and used as a data format by any programming language.</p>

          <p className={s.contentText}>JavaScript has a built in function to convert a string, written in JSON format,
            into native JavaScript objects:</p>

          <pre className={s.contentText}>JSON.parse()</pre>

          <p className={s.contentText}>So, if you receive data from a server, in JSON format, you can use it like any
            other JavaScript object.
          </p>

          <h4>The JSON standard</h4>

          <p className={s.contentText}>JSON syntax is derived from JavaScript object notation syntax:</p>

          <ul className={s.contentText}>
            <li>Data is in name/value pairs</li>
            <li>Data is separated by commas</li>
            <li>Curly braces hold objects</li>
            <li>Square brackets hold arrays</li>
          </ul>

          <span className={s.text}>© Fixjson</span>

        </div>
      </div>
    );
  }
}
// <span className={s.spacer}>·</span>
// <Link className={s.link} to="/">Home</Link>
// <span className={s.spacer}>·</span>
// <Link className={s.link} to="/admin">Admin</Link>
// <span className={s.spacer}>·</span>
// <Link className={s.link} to="/privacy">Privacy</Link>
// <span className={s.spacer}>·</span>
// <Link className={s.link} to="/not-found">Not Found</Link>

export default withStyles(s)(Footer);
