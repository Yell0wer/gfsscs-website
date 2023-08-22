export const growIn = {
  visible: {scale: 1, opacity: 1, transition: { 
    staggerChildren: 0.3,
    duration: 0.6
  }},
  hidden: {scale: 0.5, opacity: 0}
}
export const growInSlow = {
  visible: {scale: 1, opacity: 1, transition: { 
    staggerChildren: 0.3,
    delay: 0.2,
    duration: 0.8
  }},
  hidden: {scale: 0.8, opacity: 0}
}

export const slideInLeft = {
  visible: {x: 0, opacity: 1, transition: { 
    staggerChildren: 0.3,
    duration: 0.6
  }},
  hidden: {x: 100, opacity: 0}
}
export const slideInLeftSlow = {
  visible: {x: 0, opacity: 1, transition: { 
    staggerChildren: 0.3,
    duration: 0.8
  }},
  hidden: {x: 50, opacity: 0}
}
export const slideInRight = {
  visible: {x: 0, opacity: 1, transition: { 
    staggerChildren: 0.3,
    duration: 0.6
  }},
  hidden: {x: -100, opacity: 0}
}

export const slideInDown = {
  visible: {y: 0, opacity: 1, transition: { 
    staggerChildren: 0.3,
    duration: 0.6
  }},
  hidden: {y: -50, opacity: 0}
}
export const slideInDownSlow = {
  visible: {y: 0, opacity: 1, transition: { 
    staggerChildren: 0.6,
    duration: 0.9
  }},
  hidden: {y: -40, opacity: 0}
}