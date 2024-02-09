import { TitleProps } from '../../types/components/componentType';
import blockImage from '../../img/block.svg';

import titleStyle from './_title.module.scss';

export const Title: React.FC<TitleProps> = ({ headerText }) => {
  return (
    <>
      <img className={titleStyle['title-img']} src={blockImage} alt="block" />
      <h1 className={titleStyle['title-text']}>{headerText}</h1>
    </>
  );
};
