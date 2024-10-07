import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Pagination from '@/components/projects/Pagination';
import ProjectCategories from '@/components/projects/ProjectCategories';
import ProjectListings from '@/components/projects/ProjectListings';
import React from 'react'

const page = () => {
    const currentPage = 1;
    const totalPages = 5;
  
    return (
      <div className="bg-gray-50 min-h-screen">
        {/* <ProjectCategories /> */}
        <ProjectListings />
        {/* <Pagination currentPage={currentPage} totalPages={totalPages} /> */}
      </div>

    )}

export default page
