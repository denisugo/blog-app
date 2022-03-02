import style from "./AppNav.module.scss";
import Image from "next/image";
import Link from "next/link";

function AppNav() {
  return (
    <div className={style.nav}>
      <div className={style.container}>
        <div className={style.logo}>
          <Image
            src={"/logo.png"}
            width={39}
            height={44}
            layout="responsive"
            alt="Logo"
          />
        </div>
        <div className={style.menu_items}>
          <Link href="/">
            <a id="recent" className={`${style.item} ${style.recent}`}>
              Recent Articles
            </a>
          </Link>
          <Link href="/about">
            <a id="about" className={`${style.item} ${style.about}`}>
              About
            </a>
          </Link>
        </div>

        <div className={style.right_items}>
          <div className={style.signin}>
            <Link href="/login">
              <a id="login" className={style.login}>
                Log in
              </a>
            </Link>
            <div className={style.ri_logo}>
              <Image
                src={"/icons/arrow.svg"}
                width={14}
                height={10}
                layout="responsive"
                alt="Login arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppNav;
