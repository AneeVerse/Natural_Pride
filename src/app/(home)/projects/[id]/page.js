"use client"
import InquiryFormPopup from '@/components/detailsProjects/InquiryFormPopup ';
import ProjectDescription from '@/components/detailsProjects/ProjectDescription';
import ProjectEnquireForm from '@/components/detailsProjects/ProjectEnquireForm';
import ProjectGallery from '@/components/detailsProjects/ProjectGallery';
import ProjectHeader from '@/components/detailsProjects/ProjectHeader'
import ProjectKeyFeatures from '@/components/detailsProjects/ProjectKeyFeatures';
import ProjectPriceArea from '@/components/detailsProjects/ProjectPriceArea';
import projects from '@/data/projects';

const page = ({params}) => {
  const {id} = params;
      const project = projects.find((val) => val.id === id);

  return (
    <div>
         <ProjectHeader name={project.title}/>
         <ProjectGallery images={project.images}/>
         <ProjectDescription projectDesImage={project.projectDesImage}/>
         <ProjectKeyFeatures features={project.keyfeatures}/>
         <ProjectPriceArea price={project.price} area={project.area}/>
         <ProjectEnquireForm/>
         <InquiryFormPopup/>
    </div>
  )
}

export default page
