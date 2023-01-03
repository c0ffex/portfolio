import React, { Fragment } from "react";
import design from '../public/design.png'
import code from '../public/code.png'
import consulting  from '../public/consulting.png'
import Image from "next/image"

const Section2 = () => {
  return (
    <>
      <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis modi itaque illo ipsum voluptas dolores numquam optio nulla deserunt velit, reprehenderit nihil exercitationem aspernatur obcaecati explicabo architecto aperiam unde.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis mnde.
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={design} width={100} height={100} alt={""}/>
            <h3 className="text-lg font-medium pt-8 pb-2">Beatiful Designs</h3>
            <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla magni quos blanditiis assumenda odio aspernatur, iusto cum doloremque libero ipsum facere quasi natus repellat, porro distinctio explicabo voluptatem repellendus?</p>
            
          <div>
            
          </div>

            <h4 className="py-4 text-teal-600">Programming tools I use</h4>
            <p className="text-gray-800 py-1">HTML5</p>
            <p className="text-gray-800 py-1">CSS3</p>
            <p className="text-gray-800 py-1">NodeJS</p>
            <p className="text-gray-800 py-1">Typescript</p>
            <p className="text-gray-800 py-1">React</p>
            <p className="text-gray-800 py-1">Express</p>
            <p className="text-gray-800 py-1">mongoDB</p>
            <p className="text-gray-800 py-1">Sequelize</p>
          </div>
    </>
  );
};

export default Section2;
