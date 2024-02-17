"use client"

import User from "@modules/common/icons/user"
import BrandLogo from "@modules/layout/components/brand-logo"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"

const Nav = () => {
  return (
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group fixed")}
    >
      <header
        className={clsx(
          "relative h-16 px-8 mx-auto transition-colors duration-200 bg-white border border-b",
        )}
      >
        <nav
          className={clsx(
            "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
          )}
        >


          <div className="flex items-center h-full">
            <BrandLogo withWording={false} />
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            {/* <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <Link href="/account">
                <User />
              </Link>
            </div>
            <CartDropdown /> */}
            Comming Soon!
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
