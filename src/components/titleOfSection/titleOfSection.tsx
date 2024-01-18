import './_titleOfSection.scss';
import { TitleOfSectionProps } from '../../types/components/componentType';

const TitleOfSection: React.FC<TitleOfSectionProps> = ({ titleText }) => {
  return (
    <>
      <h1 className="title-text">{titleText}</h1>
    </>
  );
};

export default TitleOfSection;
