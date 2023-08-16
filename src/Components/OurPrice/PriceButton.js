import React from 'react';
import { Link } from 'react-router-dom';

const PriceButton = () => {
    return (
        <div class="flex justify-center rounded shadow-sm p-5 mt-10 mb-10" role="group">
        <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border  hover:bg-gradient-to-br from-primary to-secondary hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gradient-to-br from-primary to-secondary focus:text-white dark:text-white dark:hover:text-white  dark:focus:bg-gray-700">
       <Link to="/ourServices">SEO</Link>
        </button>
        <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border hover:bg-gradient-to-br from-primary to-secondary hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gradient-to-br from-primary to-secondary focus:text-white dark:text-white dark:hover:text-white  dark:focus:bg-gray-700">
         <Link to="/uiuxDesign">Ui Ux Design</Link> 
        </button>
        <button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border  hover:bg-gradient-to-br from-primary to-secondary hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gradient-to-br from-primary to-secondary focus:text-white dark:text-white dark:hover:text-white  dark:focus:bg-gray-700">
        <Link to="/OurContent"> Content Writing</Link> 
        </button>
      </div>
    );
};

export default PriceButton;