import style from "./AppNav.module.scss";
import Image from "next/image";
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
          <a id="recent" className={`${style.item} ${style.recent}`}>
            Recent Articles
          </a>
          <a id="about" className={`${style.item} ${style.about}`}>
            About
          </a>
        </div>

        <div className={style.right_items}>
          <div className={style.signin}>
            <a id="login" className={style.login}>
              Log in
            </a>
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
