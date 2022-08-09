import React from 'react';
import './UrlContainer.css';

const UrlContainer = (props) => {
  const urlEls = props.urls.map(url => {
    return (
      <div className="url">
        <h3 data-cy="title">{url.title}</h3>
        <a href={url.short_url} data-cy="short" target="blank">{url.short_url}</a>
        <p data-cy="long">{url.long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
