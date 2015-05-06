import React from 'react';

export default class Logo extends React.Component {
  displayName = 'Logo'

  static propTypes = {
    className: React.PropTypes.string.isRequired
  };

  /*eslint-disable max-len*/
  render() {
    return (
      <svg className={this.props.className} role="link" aria-label="GoCardless" width="157" height="16" viewBox="0 0 157 16">
          <title>GoCardless</title>
          <g fill="#000">
              <path d="M8.394 15.983C3.472 15.983.07 12.615.07 8.05V8C.07 3.62 3.574.017 8.36.017c2.85 0 4.56.758 6.217 2.122L12.4 4.715c-1.225-.994-2.313-1.567-4.144-1.567-2.54 0-4.543 2.19-4.543 4.8V8c0 2.83 1.987 4.9 4.802 4.9 1.26 0 2.4-.302 3.282-.925V9.768H8.29v-2.93h6.875v6.703c-1.624 1.332-3.87 2.443-6.77 2.443" id="Shape"/>
              <path d="M25.873 15.983c-4.888 0-8.394-3.554-8.394-7.932V8c0-4.38 3.54-7.983 8.428-7.983 4.887 0 8.394 3.554 8.394 7.932V8c0 4.38-3.54 7.983-8.43 7.983zM30.657 8c0-2.644-1.986-4.85-4.784-4.85s-4.75 2.155-4.75 4.8V8c0 2.644 1.987 4.85 4.802 4.85 2.815 0 4.75-2.155 4.75-4.8V8h-.018zM44.337 15.983c-4.56 0-7.928-3.503-7.928-7.966 0-4.413 3.35-8 7.996-8 2.867 0 4.594.994 6.166 2.442l-1.227 1.28c-1.33-1.23-2.832-2.123-4.974-2.123-3.505 0-6.13 2.762-6.13 6.35 0 3.587 2.642 6.4 6.13 6.4 2.177 0 3.594-.81 5.113-2.224l1.175 1.13c-1.64 1.632-3.454 2.71-6.32 2.71" id="Shape"/>
              <path d="M68.206 15.714H66.29l-1.866-4.076h-8.62l-1.882 4.076h-1.83L59.312.168h1.674l7.22 15.546zM60.14 2.206l-3.61 7.866h7.203L60.14 2.206zM81.678 15.714l-4.594-5.996H72.56v5.996h-1.78V.286h6.805c3.488 0 5.717 1.836 5.717 4.615 0 2.578-1.814 4.077-4.3 4.515l4.852 6.3h-2.176zM77.446 1.886H72.56v6.266h4.852c2.366 0 4.076-1.196 4.076-3.2 0-1.92-1.485-3.066-4.042-3.066zM92.248 15.714h-5.492V.286h5.492c4.975 0 8.412 3.335 8.412 7.697s-3.437 7.73-8.412 7.73m0-13.827h-3.713v12.21h3.713c4.007 0 6.564-2.643 6.564-6.08 0-3.435-2.557-6.13-6.564-6.13" id="Shape"/>
              <path d="M104.028.286h1.78v13.828h8.91v1.6h-10.69V.286zM128.795 1.87h-9.655v5.27h8.636v1.584h-8.636v5.407h9.776v1.584H117.36V.286h11.435V1.87zM137.777 7.158c3.523.758 5.147 2.004 5.147 4.38 0 2.66-2.263 4.378-5.407 4.378-2.504 0-4.56-.81-6.46-2.476l1.106-1.28c1.658 1.448 3.23 2.19 5.424 2.19 2.124 0 3.523-1.078 3.523-2.645 0-1.448-.794-2.273-4.11-2.947-3.645-.775-5.32-1.92-5.32-4.48 0-2.476 2.193-4.227 5.198-4.227 2.315 0 3.956.64 5.562 1.904L141.404 3.3c-1.468-1.16-2.937-1.666-4.56-1.666-2.055 0-3.368 1.094-3.368 2.51.017 1.48.83 2.29 4.3 3.014M151.818 7.158c3.524.758 5.147 2.004 5.147 4.38 0 2.66-2.262 4.378-5.406 4.378-2.505 0-4.56-.81-6.46-2.476l1.105-1.28c1.658 1.448 3.23 2.19 5.423 2.19 2.125 0 3.524-1.078 3.524-2.645 0-1.448-.795-2.273-4.11-2.947-3.645-.775-5.32-1.92-5.32-4.48 0-2.476 2.193-4.227 5.198-4.227 2.315 0 3.956.64 5.562 1.904L155.446 3.3c-1.47-1.16-2.937-1.666-4.56-1.666-2.056 0-3.368 1.094-3.368 2.51 0 1.48.812 2.29 4.3 3.014"/>
          </g>
      </svg>
    );
  }
}
