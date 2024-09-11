import { clsx } from 'clsx';

// Font Awesome
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProp {
  icon: IconDefinition;
  quantity?: number;
  styles?: string;
}
export const Icon = ({ icon, quantity, styles }: IconProp) => {
  return (
    <div className={clsx('flex gap-3 items-center', styles)}>
      <FontAwesomeIcon icon={icon} />

      <p>{quantity}</p>
    </div>
  );
};
