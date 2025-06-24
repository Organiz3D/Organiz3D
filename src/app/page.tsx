import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEtsy, faInstagram, faTiktok, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import clsx from 'clsx';

export default function Home() {
  const links = [
    {
      "icon": faEtsy,
      "text": "Visiter la boutique Etsy",
      "url": "https://www.etsy.com/fr/shop/Organiz3DFrance",
      "isPrimary": true,
    },
    {
      "icon": faInstagram,
      "text": "Instagram",
      "url": "https://www.instagram.com/organiz3d_/",
      "isPrimary": false,
    },
    {
      "icon": faTiktok,
      "text": "Tiktok",
      "url": "https://www.tiktok.com/@organiz3d_",
      "isPrimary": false,
    },
    {
      "icon": faPinterestP,
      "text": "Pinterest",
      "url": "https://fr.pinterest.com/Organiz3D",
      "isPrimary": false,
    },
  ]

  return (
    <nav 
      aria-label="Liens vers les réseaux sociaux et la boutique"
      className="w-full"
    >
      <ul className="flex flex-col gap-[16px] ">
        { links.map((link) => (
          <li key={link.text}>
            <a 
              className={clsx(
                "btn btn-block btn-primary",
                !link.isPrimary && "btn-outline",
              )} 
              href={link.url}
              target="_blank"
            >
              <FontAwesomeIcon icon={link.icon} className="size-[1.2em]" />
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
