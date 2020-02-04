import React from 'react';

export function UnknownMessage({ message }) {
  return <>UNRECOGNIZED!</>;
}

export function Message({ message, name, children }) {
  return (
    <article className="midi-message">
      <header>
        <time>{message.time}</time>
        <h2>{name}</h2>
      </header>
      <div className="message-info">{children}</div>
    </article>
  );
}

export function Hex({ data }) {
  return (
    <>
      {[...data]
        .map(n => n.toString(16).padStart(2, '0'))
        .join(' ')
        .toUpperCase()}
    </>
  );
}

export function Info({ label, children }) {
  return (
    <div>
      <h3>{label}:&nbsp;</h3>
      {children}
    </div>
  );
}
