import { Link } from 'react-router-dom';
import useRipple from '../hooks/useRipple.jsx';

/**
 * Drop-in replacement for react-router's <Link>, with the ripple
 * micro-interaction built in. Needed anywhere a button/link is rendered
 * inside a .map() loop, since hooks can't be called conditionally per item.
 */
export default function RippleLink({ to, className, children, ...rest }) {
  const { onClick, ripples } = useRipple();

  return (
    <Link to={to} className={className} onClick={onClick} {...rest}>
      {children}
      {ripples}
    </Link>
  );
}
