gsap.to('.container', { duration: 0.1, ease: "circ.out", y: -500, x:-700 });
gsap.to('.container', { duration: 1, ease: "circ.out", y: 0,x:0 });
// h2 animation
gsap.to('.nav >h2', { duration: 0.8, ease: "circ.out", y: -800, x:-300 });
gsap.to('.nav >h2', { duration: 1,delay:0.8, ease: "circ.out", y: 0,x:0 });
//nav lest animation
gsap.from('.nav__text li', { duration: 0.8, ease: "circ.out", y: -800, x:-300 });
gsap.to('.nav__text li', { duration: 1,delay : 0.5, ease: "circ.out", y: 0,x:0 });
