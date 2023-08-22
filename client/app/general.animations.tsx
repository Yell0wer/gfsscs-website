export const growIn = {
  visible: {scale: 1, opacity: 1, transition: { 
    staggerChildren: 0.3,
    duration: 0.6
  }},
  hidden: {scale: 0.5, opacity: 0}
}

export const slideInLeft = {
  visible: {x: 0, opacity: 1, transition: { 
    staggerChildren: 0.3,
    duration: 0.6
  }},
  hidden: {x: 100, opacity: 0}
}

export const slideInDown = {
  visible: {y: 0, opacity: 1, transition: { 
    staggerChildren: 0.3,
    duration: 0.6
  }},
  hidden: {y: -50, opacity: 0}
}