import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer pt-6 border-t border-gray-50 opacity-40">
      <div className="footer-container flex flex-col items-center gap-4">
        {/* Terms & Conditions */}
        <div className="text-center lg:text-start">
          <p>Terms & Conditions</p>
        </div>

        {/* Social Icons */}
        <div className="socials lg:justify-center">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center lg:text-end">
          <p>
            © {new Date().getFullYear()} Abderrahmane | Benamara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
