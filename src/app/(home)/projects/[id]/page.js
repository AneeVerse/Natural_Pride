import ProjectDescription from '@/components/detailsProjects/ProjectDescription';
import ProjectEnquireForm from '@/components/detailsProjects/ProjectEnquireForm';
import ProjectGallery from '@/components/detailsProjects/ProjectGallery';
import ProjectHeader from '@/components/detailsProjects/ProjectHeader'
import ProjectKeyFeatures from '@/components/detailsProjects/ProjectKeyFeatures';
import ProjectPriceArea from '@/components/detailsProjects/ProjectPriceArea';
import React from 'react'

const page = () => {
    const project = {
        name: 'Prime Residential Land in City A',
        location: 'City A, Region X',
      };
  return (
    <div>
         <ProjectHeader name={project.name} location={project.location} />
         <ProjectGallery/>
         <ProjectDescription/>
         <ProjectKeyFeatures/>
         <ProjectPriceArea/>
         <ProjectEnquireForm/>
    
    </div>
  )
}

export default page
