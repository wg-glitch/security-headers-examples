/**
 * LAMBDA EDGE ORIGIN OR VIEWER RESPONSE
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
 exports.handler = (event, context, callback) => {
  let response = event.Records[0].cf.response;

  // TRANSPORT SECURITY
  response.headers['strict-transport-security'] = [{
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubdomains; preload'
  }];
  // CONTENT SECURITY POLICY
  response.headers['content-security-policy'] = [{
    key: 'Content-Security-Policy',
    value: "default-src 'self'"
  }];
  // CONTENT TYPE
  response.headers['x-content-type-options'] = [{
    key: 'X-Content-Type-Options', value: 'nosniff'
  }];
  // X-FRAME OPTIONS
  response.headers['x-frame-options'] = [{
    key: 'X-Frame-Options', value: 'DENY'
  }];
  // XSS PROTECTION
  response.headers['x-xss-protection'] = [{
    key: 'X-XSS-Protection', value: '1; mode=block'
  }];
  // REFERRER POLICY
  response.headers['referrer-policy'] = [{
    key: 'Referrer-Policy', value: 'same-origin'
  }];
  // PERMISSIONS POLICY
  response.headers['permissions-policy'] = [{
    key: 'Permissions-Policy', value: 'camera=(), microphone=()'
  }];
  
  callback(null, response);
};
