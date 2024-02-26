import Fork from '../../../assets/icons/fork.svg';
import Star from '../../../assets/icons/star.svg';

const Footer = ({ stars, forks }) => (
  <footer className="footer">
    <a
      href="https://github.com/mdoudy90/website-v2"
      target='_blank'
      rel='noopener noreferrer'
    >
      <p>Site template by M Doudy</p>
      <div className="footer__github-stats">
        <Star />
        <p>Star {stars}</p>
        <Fork />
        <p>Fork {forks}</p>
      </div>
    </a>
  </footer>
);

export default Footer;