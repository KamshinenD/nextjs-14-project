"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./navlinks.module.css";
import SingleLink from "./SingleLink";
import { usePathname } from "next/navigation";

const links = [
    {
        title: "HomePage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];
const NavLinks = () => {
    const pathname = usePathname()
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setOpen(false);
        }, 500); // 3 seconds in milliseconds

        return () => clearTimeout(timeout);
    }, [pathname]);

    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link, index) => (
                    <SingleLink key={index} item={link} />
                ))}
                {session ? (
                    <>
                        {isAdmin && <SingleLink item={{ title: "Admin", path: "/admin" }} />}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <SingleLink item={{ title: "login", path: "/login" }} />
                )}
            </div>
            <button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link, index) => (
                        <SingleLink key={index} item={link} />
                    ))}
                </div>
            }
        </div>
    );
};

export default NavLinks;
