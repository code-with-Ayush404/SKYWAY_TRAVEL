"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Plane, Menu, X, User, LogOut, ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isToursDropdownOpen, setIsToursDropdownOpen] = useState(false);
  
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const toursDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const role = localStorage.getItem("userRole");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (role === "ADMIN") {
          setIsAdminLoggedIn(true);
          setAdminUser(parsedUser);
          setIsUserLoggedIn(false);
          setCurrentUser(null);
        } else {
          setIsAdminLoggedIn(false);
          setAdminUser(null);
          setIsUserLoggedIn(true);
          setCurrentUser(parsedUser);
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      setIsAdminLoggedIn(false);
      setAdminUser(null);
      setIsUserLoggedIn(false);
      setCurrentUser(null);
    }
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toursDropdownRef.current &&
        !toursDropdownRef.current.contains(event.target)
      ) {
        setIsToursDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tour-packages" },
    { name: "Taxi Service", href: "/taxi-service" },
    { name: "Wedding Rentals", href: "/wedding-rentals" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const tourDropdownItems = [
    { name: "Best 3 Days Kathmandu Tour", href: "/tour-packages/best-3-days-kathmandu-tour" },
    { name: "Best 3 Days Pokhara Tour", href: "/tour-packages/best-3-days-pokhara-tour" },
    { name: "Best 4 Day Manakamna Tour", href: "/tour-packages/best-4-day-manakamna-tour" },
    { name: "Best 5 Day Katmandu Tour", href: "/tour-packages/best-5-day-katmandu-tour" },
    { name: "Best 6 Day Nepal Tour", href: "/tour-packages/best-6-day-nepal-tour" },
    { name: "View More", href: "/tour-packages" },
  ];

  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) {
      return parts[0].substring(0, 2).toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("user");
    setIsAdminLoggedIn(false);
    setAdminUser(null);
    setIsAdminDropdownOpen(false);
    router.push("/");
  };

  const handleUserLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("user");
    setIsUserLoggedIn(false);
    setCurrentUser(null);
    if (session) {
      signOut({ callbackUrl: "/" });
    } else {
      router.push("/");
    }
  };

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const brandName = "Skyway";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary-teal text-white p-2 rounded-btn transition-transform group-hover:-rotate-12 duration-300">
            <Plane className="h-5 w-5 rotate-45" />
          </div>
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-primary-teal flex items-center gap-1">
            {brandName}{" "}
            <span className="italic-accent text-lg md:text-xl font-normal lowercase">
              travel
            </span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.name === "Tours") {
              return (
                <div key={link.href} ref={toursDropdownRef} className="relative py-2 flex items-center gap-1">
                  <Link
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent-gold cursor-pointer ${
                      isActive(link.href)
                        ? "text-primary-teal border-b-2 border-accent-gold pb-0.5 font-semibold"
                        : "text-text-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                  <button
                    onClick={() => setIsToursDropdownOpen(!isToursDropdownOpen)}
                    className="text-text-muted hover:text-accent-gold focus:outline-none cursor-pointer flex items-center"
                    aria-label="Toggle Tours Dropdown"
                  >
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isToursDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isToursDropdownOpen && (
                    <div className="absolute left-0 top-full mt-1 w-64 bg-white border border-border-soft border-b-2 border-b-sky-500 rounded-md shadow-lg py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                      {tourDropdownItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={() => setIsToursDropdownOpen(false)}
                          className="group px-4 py-2.5 text-sm text-text-dark flex items-center gap-2 transition-all duration-200 relative overflow-hidden"
                        >
                          <span className="w-0 overflow-hidden opacity-0 transition-all duration-200 group-hover:w-4 group-hover:opacity-100 flex items-center shrink-0">
                            <Plane className="h-3.5 w-3.5 rotate-90 text-sky-500" />
                          </span>
                          <span className="transition-colors duration-200 group-hover:text-sky-500 font-medium">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent-gold ${
                  isActive(link.href)
                    ? "text-primary-teal border-b-2 border-accent-gold pb-1 font-semibold"
                    : "text-text-muted"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {status === "loading" ? (
            <div className="h-10 w-24 bg-border-soft animate-pulse rounded-btn"></div>
          ) : isAdminLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setIsAdminDropdownOpen(!isAdminDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-border-soft hover:border-primary-teal rounded-btn text-primary-teal font-semibold text-sm transition-all duration-200 cursor-pointer"
              >
                <User className="h-4 w-4 text-accent-gold" />
                <span>Admin Dashboard</span>
              </button>
              {isAdminDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-border-soft rounded-card shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="px-4 py-2 border-b border-border-soft text-xs text-text-muted">
                    Signed in as Admin
                    <p className="font-semibold text-text-dark truncate">
                      {adminUser?.email || "admin@skyway.com"}
                    </p>
                  </div>
                  <Link
                    href="/admin"
                    onClick={() => setIsAdminDropdownOpen(false)}
                    className="w-full text-left px-4 py-2 text-sm text-primary-teal hover:bg-bg-cream flex items-center gap-2 transition-colors duration-200 font-medium"
                  >
                    <User className="h-4 w-4" />
                    <span>Go to Dashboard</span>
                  </Link>
                  <button
                    onClick={handleAdminLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-bg-cream flex items-center gap-2 transition-colors duration-200 cursor-pointer font-medium"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (session || isUserLoggedIn) ? (
            <div className="relative group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-teal hover:bg-primary-teal-dk text-white font-bold text-sm tracking-wide shadow-sm border border-primary-teal-dk select-none cursor-pointer transition-all duration-200">
                {getInitials(session?.user?.name || currentUser?.name || currentUser?.email)}
              </div>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="w-48 bg-white border border-border-soft rounded-card shadow-lg py-2">
                  <div className="px-4 py-2 border-b border-border-soft text-xs text-text-muted">
                    Signed in as
                    <p className="font-semibold text-text-dark truncate">
                      {session?.user?.email || currentUser?.email}
                    </p>
                  </div>
                  <button
                    onClick={handleUserLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-bg-cream flex items-center gap-2 transition-colors duration-200 cursor-pointer font-medium"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link
              href="/auth"
              className="text-sm font-semibold text-primary-teal border border-primary-teal px-5 py-2.5 rounded-btn hover:bg-primary-teal hover:text-white transition-all duration-200"
            >
              Sign In
            </Link>
          )}

          <Link
            href="/tour-packages"
            className="text-sm font-semibold bg-accent-gold text-white px-6 py-2.5 rounded-btn hover:bg-primary-teal hover:shadow-lg transition-all duration-300"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 lg:hidden text-primary-teal hover:bg-bg-cream rounded-btn transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border-soft shadow-xl p-6 flex flex-col gap-5 z-40 fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium py-1 transition-colors hover:text-accent-gold ${
                  isActive(link.href)
                    ? "text-primary-teal font-semibold pl-2 border-l-2 border-accent-gold"
                    : "text-text-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <hr className="border-border-soft" />

          <div className="flex flex-col gap-3">
            {isAdminLoggedIn ? (
              <div className="flex flex-col gap-2">
                <div className="text-xs text-text-muted px-2">
                  Signed in as Admin
                  <span className="font-semibold text-text-dark block truncate">
                    {adminUser?.email || "admin@skyway.com"}
                  </span>
                </div>
                <Link
                  href="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 border border-primary-teal text-primary-teal rounded-btn hover:bg-primary-teal hover:text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <User className="h-4 w-4" />
                  Admin Dashboard
                </Link>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleAdminLogout();
                  }}
                  className="w-full text-center py-2.5 border border-red-200 text-red-600 rounded-btn hover:bg-red-50 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            ) : (session || isUserLoggedIn) ? (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-2 py-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-teal text-white font-bold text-sm tracking-wide border border-primary-teal-dk select-none">
                    {getInitials(session?.user?.name || currentUser?.name || currentUser?.email)}
                  </div>
                  <div className="text-xs text-text-muted">
                    Signed in as
                    <span className="font-semibold text-text-dark block truncate">
                      {session?.user?.email || currentUser?.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleUserLogout();
                  }}
                  className="w-full text-center py-2.5 border border-red-200 text-red-600 rounded-btn hover:bg-red-50 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/auth"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 border border-primary-teal text-primary-teal rounded-btn hover:bg-primary-teal hover:text-white text-sm font-semibold transition-colors duration-200"
              >
                Sign In
              </Link>
            )}

            <Link
              href="/tour-packages"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-accent-gold text-white rounded-btn hover:bg-primary-teal text-sm font-semibold transition-colors duration-200 shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
