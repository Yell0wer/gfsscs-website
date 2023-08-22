'use client'
import React from 'react'
import { motion } from 'framer-motion'
import clsx from "clsx";
import Image from 'next/image'
import Nav from '@/app/nav.component'
import Footer from '@/app/footer.component'
import FolderClose from '@/public/folderclose.png'
import FolderOpen from '@/public/folderopen.png'
import { growIn, slideInDown } from '@/app/general.animations'

export default function Resources() {
  const [categories, setCategories] = React.useState({})
  const [resources, setResources] = React.useState([])
  const [currentCategory, setCurrentCategory] = React.useState('general')

  React.useEffect(() => {
    fetch('https://gfsscs-website-backend.onrender.com/resources', {cache: 'no-store'}).then(res => res.json()).then(data => {
      data.sort((a, b) => a.priority - b.priority)
      console.log(data)
      setResources(data)
    })
    fetch('https://gfsscs-website-backend.onrender.com/categories/resources', {cache: 'no-store'}).then(res => res.json()).then(data => {
      setCategories(data[0].categories)
    })
  }, []) // TODO: refactor into separate components
  
  return (
    <div>
      <Nav page="/resources" />

      <div className="pt-8 pb-16 px-15vw">
        <motion.h1 className="text-4xl text-center text-white font-mono" variants={slideInDown} initial="hidden" animate="visible"><b className="text-gold">Learning</b> Resources</motion.h1>

        <div className="flex mt-10">
            {Object.keys(categories).length ? 
            
              <motion.div className="px-6 w-1/4 flex flex-col" variants={slideInDown} initial="hidden" animate="visible">
                {Object.keys(categories).map((category, index) => (

                  <motion.div key={index} className="mb-8 w-3/5 flex flex-col items-center text-white hover:text-gold transition-text hover:duration-200 cursor-pointer" variants={slideInDown} onClick={() => {
                    setCurrentCategory(category)
                  }}>
                    {category === currentCategory ? <Image src={FolderOpen} alt="open folder" /> : <Image src={FolderClose} alt="closed folder" />}

                    <h1 className={clsx(
                      "text-1xl text-center font-mono",
                      {
                        "text-gold": category === currentCategory,
                      }
                    )}>{categories[category].name}</h1>

                  </motion.div>

                ))}
              </motion.div>

            : 
            <div className="h-screen" />}
          
          {Object.keys(categories).length && resources.length ? 
            <motion.div key={currentCategory} className="px-6 w-3/4 flex-col" variants={growIn} initial="hidden" animate="visible">
              {Object.keys(categories[currentCategory].subcategories).map((subcategory, index) => (
                <motion.div className="mb-6 p-8 flex flex-col bg-medium border-solid border-4 border-light" key={index} variants={growIn}>
                  <h1 className="text-3xl text-white font-mono font-bold">{categories[currentCategory].subcategories[subcategory]}</h1>
                  
                  <ul className="mt-4 ml-6 list-disc">
                    {resources.map(resource => {
                      if(resource['category'] === currentCategory && resource['subcategory'] === subcategory) {
                        return (
                          <li key={resource['_id']} className="text-1xl text-white font-sans leading-loose tracking-wide">
                            <b><a href={resource['url']} target="_blank" className="underline hover:text-gold transition-all duration-200">{resource['name']}</a></b>: {resource['description']}
                          </li>
                        )
                      }
                    })}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          : ''}
        </div>
      </div>

      <Footer />
    </div>
  )
}