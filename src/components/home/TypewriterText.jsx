import { TypeAnimation } from 'react-type-animation';

function TypewriterText() {
  return (
    <TypeAnimation
      sequence={[
        'car',
        2000,
        'home',
        2000,
        'business',
        2000,
        'life',
        2000,
        'marine',
        2000,
      ]}
      wrapper="span"
      speed={50}
      className="text-primary mr-2"
      repeat={Infinity}
      cursor={true}
    />
  );
}

export default TypewriterText;