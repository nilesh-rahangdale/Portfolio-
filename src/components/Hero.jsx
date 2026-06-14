import React from "react";

const Hero = () => {

  return (

    <section id="hero" style={styles.section}>


      {/* GIF BACKGROUND */}
      <div style={styles.videoBg}>

        <img
          src="/hero.gif"
          alt="background animation"
          style={styles.gif}
        />

      </div>



      {/* DARK OVERLAY */}
      <div style={styles.overlay}></div>



      {/* CONTENT */}

      <div style={styles.container}>


        <div style={styles.content}>


          <h1 style={styles.heading}>
            I'm <span>Nilesh Rahangdale</span>
          </h1>


          <h2 style={styles.role}>
            <span className="text-italic-serif">a software developer</span>
          </h2>


          <p style={styles.description}>
            Transforming ideas into scalable products through modern UI experiences, robust backend systems, cloud-native architecture, and blockchain technology.

          </p>

          <a href="mailto:nileshrahangdale08@gmail.com" style={styles.button}>
            Let's Connect →
          </a>


        </div>


      </div>



    </section>

  );

};



const styles = {


  section: {


    height: "100vh",

    position: "relative",

    overflow: "hidden",

    display: "flex",

    alignItems: "flex-end",

    background: "#050505",

    paddingBottom: "80px"


  },



  videoBg: {


    position: "absolute",

    inset: 0,

    zIndex: 0,

    display: "flex",

    justifyContent: "center",

    alignItems: "center",


  },



  gif: {


    width: "100%",

    height: "100%",

    objectFit: "cover",


  },




  overlay: {


    position: "absolute",

    inset: 0,


    background:
      "linear-gradient(0deg,#050505 10%,rgba(5,5,5,.7),transparent)",


    zIndex: 1,


  },




  container: {


    position: "relative",

    zIndex: 2,


    width: "100%",


    padding: "0 8%",


  },




  content: {


    maxWidth: "650px",


  },


}


export default Hero;