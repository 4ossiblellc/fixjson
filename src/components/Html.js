/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { analytics } from '../config';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    style: PropTypes.string,
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    children: PropTypes.string,
  };

  render() {
    const { title, description, style, scripts, children } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="google-site-verification" content="PMf4KljGYydEedDYg9leicBHpz-UIPzZ9XM1QnFqess" />
          <meta name="keywords" content="fix, json, auto, format, fixjson, jsonlint, missing, quotes, invalid" />
          <meta name="robots" content="index, follow">
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" sizes="57x57" href="https://s3.amazonaws.com/fixjson-web-prod/icon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="https://s3.amazonaws.com/fixjson-web-prod/icon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="https://s3.amazonaws.com/fixjson-web-prod/icon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="https://s3.amazonaws.com/fixjson-web-prod/icon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="https://s3.amazonaws.com/fixjson-web-prod/icon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="https://s3.amazonaws.com/fixjson-web-prod/icon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="https://s3.amazonaws.com/fixjson-web-prod/icon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="https://s3.amazonaws.com/fixjson-web-prod/icon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://s3.amazonaws.com/fixjson-web-prod/icon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="https://s3.amazonaws.com/fixjson-web-prod/icon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          {style && <style id="css" dangerouslySetInnerHTML={{ __html: style }} />}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          {scripts && scripts.map(script => <script key={script} src={script} />)}
          {analytics.google.trackingId &&
            <script
              dangerouslySetInnerHTML={{ __html:
              'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
              `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
            />
          }
          {analytics.google.trackingId &&
            <script src="https://www.google-analytics.com/analytics.js" async defer />
          }
        </body>
      </html>
    );
  }
}

export default Html;
