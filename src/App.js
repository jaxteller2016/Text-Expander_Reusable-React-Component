import { useState } from 'react';
import './styles.css';

export default function App() {
  return (
    <div>
      <TextExpander
        expandButtonText='Show more'
        collapseButtonText='Show less'
        buttonColor='#2552ce'
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText='Show text'
        collapseButtonText='Collapse text'
        buttonColor='#ff6622'
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        expanded={true}
        className='box'
        expandButtonText='Show more'
        collapseButtonText='Show less'
        buttonColor='#2552ce'
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = 'Show more',
  collapseButtonText = 'Show less',
  buttonColor = '#1f09cd',
  expanded = false,
  className
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const buttonStyle = {
    color: buttonColor,
    border: 'none',
    background: 'transparent',
    font: 'inherit',
    cursor: 'pointer',
    marginLeft: '6px'
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const words = children.split(' ');
  const shouldShowExpandButton =
    !isExpanded && words.length > collapsedNumWords;
  const shouldShowCollapseButton = isExpanded;

  const displayedText = isExpanded
    ? words.join(' ')
    : words.slice(0, collapsedNumWords).join(' ');

  return (
    <div className={className}>
      <p>
        {displayedText}
        <span>
          {shouldShowExpandButton && (
            <>
              <span>...</span>
              <button onClick={toggleExpansion} style={buttonStyle}>
                {expandButtonText}
              </button>
            </>
          )}

          {shouldShowCollapseButton && (
            <button onClick={toggleExpansion} style={buttonStyle}>
              {collapseButtonText}
            </button>
          )}
        </span>
      </p>
    </div>
  );
}
