import './_title.scss';
import { TitleProps } from '../../types/components/componentType';
import blockImage from '../../img/block.svg';

const Title: React.FC<TitleProps> = ({ headerText }) => {
  return (
    <>
      <img className="title-img" src={blockImage} alt="block" />
      <h1 className="title-text">{headerText}</h1>
    </>
  );
};

export default Title;
