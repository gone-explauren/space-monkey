@import url('https://fonts.googleapis.com/css?family=Caveat:400,700&display=swap&subset=cyrillic');

:root {
  --yellow: #FED636;
  --white: #FFFFFF;
  --black: #000000;
}

::selection {
  color: #FFFFFF;
  color: var(--white, #FFFFFF);
  background: #FED636;
  background: var(--yellow, #FED636);
}

* {
  box-sizing: border-box;
}

body {
  background: url(../img/SpaceBG.png);
  position: relative;
  border-style: ridge;
  /*border-width: 15px;
  height: 1000px*/
  min-height: 50%;
  min-width: 1024px;
  /* Set up proportionate scaling 
  width: 100%;
  height: 100vh;*/
  overflow: hidden;

}

body::after {
  content: '';
  position: fixed;
  top: 0;
  width: 100%;
  height: 50%;
  background-image: linear-gradient(0deg, transparent, black 60%);
}

.navlinks2 {
  color: whitesmoke;
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  top: 0px;
  background-color: rgb(255, 255, 6);
  width: 5rem;
  padding: 6px 6px;
  border-radius: 15px;
  border: solid red;
  left: -10rem;
  position: absolute;
  text-align: center;
  height: 6rem;
}

.insideSpace {
  font-family: "Oswald", sans-serif;
  font-style: italic;
  font-size: 150px;
  font-weight: bold;
  color: whitesmoke;
  display: flex;
  /*justify-content: center;*/
  position: absolute;
  transform: translate(-50%, -50%);
  top: 5rem;
  left: 50%;
  z-index: 1;
}

.glitch {
  color: rgb(223, 191, 191);
  position: relative;
  font-size: 9vw;
  animation: glitch 5s 5s infinite;

}

.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: -5px 0 magenta;
  overflow: hidden;
  top: 0;
  animation: noise-1 3s linear infinite alternate-reverse, glitch 5s 5.05s, infinite;
}

.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -5px 0 lightgreen;
  overflow: hidden;
  top: 0;
  animation: noise -2 3s linear infinite alternate-reverse, glitch 5s 5s infinite;
}

@keyframes glitch {
  1% {
    transform: rotateX(10deg) skewX(90deg);
  }

  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}

@keyframes noise-1 {
  $steps: 30;

  @for $i from 1 through $steps {
    #{percentage($i*(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);

      clip-path: inset(# {
          $top
        }

        px 0 #{$bottom}px 0);
    }
  }
}

@keyframes noise-2 {
  $steps: 30;

  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);

      clip-path: inset(# {
          $top
        }

        px 0 #{$bottom}px 0);
    }
  }
}


.glow {
  @extend .glitch;
  text-shadow: 0 0 1000px rgb(223, 191, 191);
  color: transparent;
  position: absolute;
  top: 0;
}


@keyframes glitch-2 {
  1% {
    transform: rotateX(10deg) skewX(70deg);
  }

  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}

main {
  position: relative;
  width: 100%;
  padding-top: 50%;
  margin: auto;
  font-family: 'Caveat';
  /*   font-family: 'Roboto'; */
  font-size: 44px;
  font-size: calc(22px + (36 - 22) * ((100vw - 980px) / (1400 - 980)));
  white-space: nowrap;
  color: #FFFFFF;
  color: var(--white, #FFFFFF);
  overflow: hidden;
}

/*@media only screen and (max-width: 980px) {
  main {
    font-size: 22px;
  }
}

@media only screen and (min-width: 1400px) {
  main {
    font-size: 36px;
  }
}
*/
/* Scroller */
div {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  /*animation: scroll 10s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite*/
  animation: scroll 30s linear infinite
}

@keyframes scroll {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }

  2% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  95% {
    opacity: 1;
    transform: translate3d(0, -100%, 0);
  }

  100% {
    transform: translate3d(0, -100%, 0);
    opacity: 0;
  }
}

/* Sections */
section {
  position: relative;
  padding-top: 50%;
  border-bottom: 0;

}


section:last-child {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
}

.one {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  height: 15%;
  border-radius: 15px;
}

.two {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
  height: 25%;
  border-radius: 15px;
}

.three {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  height: 10%;
  border-radius: 15px;

}
/* Typography */
h3,
p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backface-visibility: hidden;
}

/*h2 {
  font-weight: 400;
  font-size: .8em;
  text-align: center;
  margin-bottom: 1em;
}*/

h3 {
  font-weight: 400;
  font-size: 1.5em;
}

p {
  font-weight: 400;
  color: #FED636;
  color: var(--yellow, #FED636);
}

span {
  text-transform: uppercase;
  color: #FFFFFF;
  color: var(--white, #FFFFFF);
}

b {
  font-weight: 700;
}
