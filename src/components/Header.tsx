import { useEffect, useRef, useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import me from "../assets/face.png";
import "../css/Header.css";
import { useDispatch } from 'react-redux';
import { setHeaderHeight } from "../store/headerSlice";

const sections = [
  { label: "HOME", id: "home" },
  { label: "WHAT I DO", id: "ido" },
  { label: "MY PORTFOLIO", id: "portfolio" },
  { label: "ABOUT ME", id: "about" },
];

export default function Header() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (headerRef.current) {
      dispatch(setHeaderHeight(headerRef.current.offsetHeight));
    }
  }, [headerRef, dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = <T extends HTMLElement>(e: React.MouseEvent<T>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`header`}
    >
      <div className="header-left">
        <img src={me} alt="profile" />
        <h1 className="title">NIZAM</h1>
      </div>

      <nav className="nav desktop-nav">
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={active === s.id ? "active" : ""}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, s.id)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <IconButton
        className={`mobile-menu-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(true)}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <Drawer
        variant="temporary"
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            position: 'fixed',
            backgroundColor: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
            color: "#ccc",
          },
        }}
        ModalProps={{
          keepMounted: false,
        }}
      >
        <div className="drawer glass">
          <IconButton
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>

          <List className="drawer-list">
            {sections.map((s) => (
              <ListItem
                key={s.id}
                className={active === s.id ? "active" : ""}
                onClick={(e: React.MouseEvent<HTMLLIElement>) => handleClick(e, s.id)}
              >
                <ListItemText primary={s.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </header>
  );
}
