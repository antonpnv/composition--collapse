import { useState } from 'react';
import { ICollapseProps } from '../../models';

export const Collapse: React.FC<ICollapseProps> = ({ collapsedLabel = 'Развернуть', expandedLabel = 'Свернуть' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = 'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.';

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigator.clipboard.writeText(text)
      .then(() => console.log('Текст скопирован в буфер!'))
      .catch((error) => console.log(`Ошибка копирования текста: ${error}`));
  }

  return (
    <div className="collapse-widget">
      <button className="collapse__btn" onClick={handleToggle}>
        {isExpanded ? expandedLabel : collapsedLabel}
      </button>

      <div className={`show__description ${isExpanded ? 'show' : ''}`}>
        <p className="text">{text}</p>
      </div>

      <div className="copy">
        <a href="#" className="copy__text" onClick={handleCopy}>Copy</a>
      </div>
    </div>
  );
}
