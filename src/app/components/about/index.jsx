
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

        <p className="font-light text-xs sm:text-sm md:text-base">I am a Computer Science graduate with a diploma and a strong foundation in modern web technologies including HTML, CSS, JavaScript, React, TypeScript, Firebase, and PostgreSQL. Over the years, I have built multiple projects that showcase my expertise, with a strong focus on the React ecosystem.

One of my key projects, EduJourney, is an LMS platform that demonstrates my ability to design and develop full-stack applications, integrating dynamic features and scalable solutions. Initially specializing in the PERN stack, I have expanded my skills into the MERN stack, while also exploring cloud computing and AI to stay aligned with evolving industry trends.

I am now seeking a challenging and growth-oriented opportunity where I can contribute my skills, collaborate with talented teams, and continue to advance as a proficient full-stack developer. My goal is to bring value to innovative projects while consistently enhancing my technical and problem-solving abilities.</p>
    </ItemLayout>
        
       < ItemLayout  className='col-span-full xs:col-span-6 lg:col-span-4 text-accent'>
       <div className="font-semibold w-full text-left text-2xl sm:text-5xl">
          Fresher
        </div>
       </ItemLayout>

       < ItemLayout className='col-span-full xs:col-span-6 lg:col-span-4 text-accent '>
       <div className="font-semibold w-full text-left text-2xl sm:text-5xl">
          Computer Science graduate with hands-on experience in React, TypeScript, PostgreSQL, and Firebase, specializing in full-stack development.
Completed a 3-month internship at Synexoo as a Software Developer, where I contributed to building a Remote Code Execution (RCE) system.
Passionate about the React ecosystem, currently expanding into MERN stack, cloud computing, and AI, while seeking a growth-oriented developer role.
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
