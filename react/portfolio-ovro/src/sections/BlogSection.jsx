import React from 'react'
import Section from './Section'
import BlogCard from '../ui/BlogCard'
import img1 from '../assets/images/blog-img1.png'
import img2 from '../assets/images/blog-img2.png'
import img3 from '../assets/images/blog-img3.png'
import img4 from '../assets/images/blog-img4.png'

const BlogSection = () => {
  return (
    <Section sectionId="our-blog" header="Our Latest Blog Idea UI/UX" highlight="Trends" subheader="Our Blog">
        <div className='grid lg:grid-cols-2 gap-10 px-10 mt-10'>
            {[{img: img1, header: 'Behind the Pixels: My Favorite Design Projects'}, {img: img2, header: 'Crafting Seamless Experiences: My UI/UX Design Philosophy'}, {img: img3, header: 'Staying Ahead: Trends Shaping UI/UX in 2024'}, {img: img4, header: 'From Concept to Reality: My Design Process'}].map((blog, index) => <BlogCard key={index} img={blog.img} header={blog.header} />)}
        </div>
        <div className='flex gap-2 justify-center my-10'>
            {["<", "1", "2", "...", "12", ">"].map((page, i) => <div className='dark:text-white dark:bg-white/10 bg-secondary/10 h-14 w-14 flex items-center justify-center hover:bg-accent dark:hover:bg-accent transition duration-500 rounded-md font-bold border-[1px] border-white/10 cursor-pointer'>{page}</div>)}
        </div>
    </Section>
  )
}

export default BlogSection
