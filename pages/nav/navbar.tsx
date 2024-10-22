import Link from 'next/link';
import  styles from '@/pages/nav/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="#aboutMe">A propos de moi</Link>
        </li>
        <li>
          <Link href="#projects">Mes projets</Link>
        </li>
        <li>
          <Link href="#comments">Commentaires</Link>
        </li>
      </ul>
    </nav>
  );
};



export default Navbar;