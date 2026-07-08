import { useEffect } from 'react';

/**
 * Lightweight SEO helper — updates document title and meta description
 * per page without pulling in react-helmet as a dependency.
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | AxonAuto` : 'AxonAuto | Doorstep Car Care in Hyderabad';
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
