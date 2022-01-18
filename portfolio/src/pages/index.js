import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <div className="nav-container"><Navbar/></div>
      <Layout>
        <section className={styles.header}>
          <div>
            <h2>Design</h2>
            <h3>Develop & Deploy</h3>
            <p>UX designer & web developer based in Manchester.</p>
            <Link className={styles.btn} to="/projects">
              My Portfolio Projects
            </Link>
          </div>
          <StaticImage
            src="../images/banner.png"
            alt="Banner"
            placeholder="BLURRED"
          />
        </section>
      </Layout>
      <Layout>
      <div>
          <h1>About Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            consequatur vitae voluptas, blanditiis consectetur repudiandae,
            deserunt ut dolorum possimus iste ex minus odit saepe expedita rem
            nemo sequi odio exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            consequatur vitae voluptas, blanditiis consectetur repudiandae,
            deserunt ut dolorum possimus iste ex minus odit saepe expedita rem
            nemo sequi odio exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            consequatur vitae voluptas, blanditiis consectetur repudiandae,
            deserunt ut dolorum possimus iste ex minus odit saepe expedita rem
            nemo sequi odio exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            consequatur vitae voluptas, blanditiis consectetur repudiandae,
            deserunt ut dolorum possimus iste ex minus odit saepe expedita rem
            nemo sequi odio exercitationem.
          </p>
        </div>
      </Layout>
    </div>
  )
}
