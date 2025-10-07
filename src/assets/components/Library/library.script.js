"use strict";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';


const container = document.querySelector('.libraryWrapper .container')
const halfX = container.clientWidth / 2
const wrapX = gsap.utils.wrap(-halfX, 0)
const xTo = gsap.quickTo(container, "x", {
  duration: 1.5s
  ease: "power4"
})
