
import React from "react";
import ItemLayout from './ItemLayout'


function AboutDetails() {
  return (
    <section className="py-20 w-full ">
        
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full ">

      <ItemLayout className='col-span-full lg:col-span-8 row-span-2 felx-col items-center'>
      <h2 className=" text-xl md:text-2xl text-left width-full capitalize">
          info
        </h2>

        <p className="font-light text-xs sm:text-sm md:text-base">I am a third-year Computer Science undergraduate student with a completed diploma, actively working with various tools and technologies such as HTML, CSS, JavaScript, React, TypeScript, Firebase, and PostgreSQL. I have created multiple projects based on these technologies and have a strong interest in working within the React ecosystem. Currently, I am working on an LMS project called EduJourney. Initially a PERN stack developer, I am now expanding my expertise by learning MERN stack technologies to further enhance my skills. My goal is to become a proficient coder and continuously improve by exploring new technologies like cloud computing and AI. I am dedicated to leveraging my skills and knowledge to contribute effectively to any project or team.</p>
    </ItemLayout>
        
       < ItemLayout  className='col-span-full xs:col-span-6 lg:col-span-4 text-accent'>
       <div className="font-semibold w-full text-left text-2xl sm:text-5xl">
          Fresher
        </div>
       </ItemLayout>

       < ItemLayout className='col-span-full xs:col-span-6 lg:col-span-4 text-accent '>
       <div className="font-semibold w-full text-left text-2xl sm:text-5xl">
          0 year experience
        </div>
       </ItemLayout>

        <ItemLayout className='col-span-full sm:col-span-full md:col-span-4 !p-0'>
            <img className='w-full h-auto ' src="https://github-readme-stats.vercel.app/api/top-langs?username=priyanka-is-on-github&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FFFFFF&text-bold=false" alt="priyanka" loading="lazy"/>
        </ItemLayout>
        
        <ItemLayout className='col-span-full md:col-span-8 !p-0'>
            <img className='w-full h-auto ' src="https://github-readme-stats.vercel.app/api?username=priyanka-is-on-github&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FFFFFF&text-bold=false" alt="priyanka" loading="lazy"/>
        </ItemLayout>

        <ItemLayout className='col-span-full '>
            <img className='w-full h-auto ' src="https://skillicons.dev/icons?i=js,html,css,react,nextjs,tailwind,materialui,scss,c,cpp,postman,firebase,vscode,discord,threejs,git,github,postgres,vite,npm, " alt="priyanka" loading="lazy"/>
        </ItemLayout>

        <ItemLayout className='col-span-full md:col-span-6 !p-0'>
        <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=priyanka-is-on-github&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"  alt="priyanka" loading="lazy"/>
        </ItemLayout>

       
        <ItemLayout className='col-span-full md:col-span-6 !p-0'>
            <img className='w-full h-auto ' src="https://github-readme-stats.vercel.app/api/pin/?username=priyanka-is-on-github&repo=edu-journey&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FFFFFF&text-bold=false&description_lines_count=1" alt="priyanka" loading="lazy"/>
        </ItemLayout>
       
      </div>
    </section>
  );
}

export default AboutDetails;
