import { TypeAnimation } from 'react-type-animation';
 
const TypingComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'f', 
        100, 
        'fr', 
        100, 
        'fro', 
        100,
        'fron',
        100,
        'fronte',
        100,
        'fronten',
        100,
        'frontend',
        100,
        'frontend ',
        100,
        'frontend d',
        100,
        'frontend de',
        100,
        'frontend dev',
        100,
        'frontend deve',
        100,
        'frontend devel',
        100,
        'frontend develo',
        100,
        'frontend develop',
        100,
        'frontend develope',
        100,
        'frontend developer',
    
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block',textTransform : 'uppercase', color : "white", textAlign: 'left',marginTop : "25px",letterSpacing : "3px" }}
    />
  );
};
export default TypingComponent;