import React from 'react'
import FirstBlogImage from "../images/first-blog.png"
import SecondBlogImage from "../images/second-blog.png"
import ThirdBlogImage from "../images/third-blog.png"
import LatestPostCard from './LatestPostCard'

const PostsData = [
    {
        image: FirstBlogImage,
        type: "Agency",
        date: "June 2023",
        title: "Designing Filters that work best Practices and Guidelines",
        content: "Laboratories used for scientific research take many forms because of the differing Read more..."
    },

    {
        image: SecondBlogImage,
        type: "Education",
        date: "June 2023",
        title: "Designing Birthday picker UX is simply Better!",
        content: "Laboratories used for scientific research take many forms Read more..."
    },
    {
        image: ThirdBlogImage,
        type: "Portfolio",
        date: "June 2023",
        title: "Usability Pitfalls of Disabled buttons and How to avoid them.",
        content: "Laboratories used for scientific research take many forms Read more..."
    },


]

const Tags = [
    {

        text: "Creative",
        bg: "#F0E1FF",
    },
    {
        text: "Design",
        bg: "#FCBBD1"
    },
    {
        text: "Fashion",
        bg: "#F8E7AA"
    }, {
        text: "Portfolio",
        bg: "#FCBBD1"
    }, {
        text: "UI",
        bg: "#FCBBD1"
    }, {
        text: "Music",
        bg: "#FCBBD1"
    },

    {
        text: "Style",
        bg: "#F8E7AA"
    },
    {
        text: "Women",
        bg: "#FCBBD1"
    },
    {
        text: "Men",
        bg: "#F8E7AA"
    },
    {
        text: "UX",
        bg: "#FCBBD1"
    },
]

const LatestPostsSection = () => {
    return (
        <div className='md:p-10'>
            <h1 className='text-3xl font-medium'>Latest Posts</h1>
            {/* Posts */}
            <div className='flex mt-10 flex-col gap-8'>

                {
                    PostsData.map((post, index) => (
                        <LatestPostCard post={post} key={index} />
                    ))
                }
            </div>

            <h1 className='text-3xl mt-6 font-semibold'>Tag Colud</h1>

            <div className='grid mt-6 gap-4 md:grid-cols-3 grid-cols-2'>
                {
                    Tags.map((tag, index) => (
                        <span style={{ background: `${tag.bg}` }} key={index} className='px-6 py-3 rounded-lg text-center font-medium md:text-xl'>
                            {tag.text}
                        </span>
                    ))
                }
            </div>

        </div>
    )
}

export default LatestPostsSection