import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import {
	AiFillInstagram,
	AiFillTwitterCircle,
	AiFillGithub,
	AiFillWindows,
	AiFillAndroid,
} from 'react-icons/ai';
import { FaLinux } from 'react-icons/fa';
import { FaAppStoreIos } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='bg-primaryBlue py-8'>
			<div className='flex container max-w-6xl md:items-center justify-between md:p-8 mx-auto flex-col md:flex-row pl-10'>
				<div className=''>
					<div className='flex items-center space-x-2 md:pb-3 '>
						<img
							src='img/pmlogo-removebg-preview.png'
							alt=''
							className='w-16'
						/>
						<span className='text-lightColor font-semibold text-2xl '>
							Encrypt
						</span>
					</div>
					<div className=' space-x-1 items-center pt-5 hidden md:flex'>
						
						<div className='flex text-lightColor space-x-3 text-2xl cursor-pointer'>
							<BsFacebook />
							<AiFillInstagram />
							<AiFillTwitterCircle />
							<AiFillGithub />
						</div>
					</div>
				</div>

				<div className=''>
					<h4 className=' font-bold text-lightColor tracking-wide text-xl'>
						Features
					</h4>
					<ul className=''>
						<li>test</li>
						<li>test</li>
						<li>test</li>
					</ul>
				</div>
				<div className=''>
					<h4 className=' font-bold text-lightColor tracking-wide text-xl'>
						Encrypt
					</h4>
					<ul className=''>
						<li>test</li>
						<li>test</li>
						<div className='flex space-x-3 mt-3  text-2xl md:text-xl text-lightColor cursor-pointer'>
							<AiFillWindows />
							<FaLinux />
							<AiFillAndroid />
							<FaAppStoreIos />
						</div>
					</ul>
					<div className=' space-x-1 items-center pt-5 flex md:hidden'>
						
						<div className='flex text-lightColor space-x-1 text-2xl cursor-pointer'>
							<BsFacebook />
							<AiFillInstagram />
							<AiFillTwitterCircle />
							<AiFillGithub />
						</div>
					</div>
				</div>
			</div>
			<p className='text-center hidden md:block text-lightColor'>
				Copyright &copy; 2022, All Rights Reserved
			</p>
		</footer>
	);
};

export default Footer;