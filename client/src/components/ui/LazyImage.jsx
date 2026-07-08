import { useState } from 'react'

export function LazyImage({ src, alt, className, placeholderSrc, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`lazy-image-container ${className || ''}`}>
      {!isLoaded && placeholderSrc && (
        <img
          src={placeholderSrc}
          alt=""
          className="lazy-image-placeholder"
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`lazy-image ${isLoaded ? 'lazy-image-loaded' : ''}`}
        {...props}
      />
    </div>
  )
}
