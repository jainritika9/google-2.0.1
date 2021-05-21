import Image from 'next/image';
import {useRouter} from 'next/router';
import {useRef} from 'react';
import Avatar from '../components/Avatar'
import HeaderOptions from '../components/HeaderOptions'
import {XIcon,MicrophoneIcon,SearchIcon} from '@heroicons/react/solid';
function Header() {
    const router= useRouter();
    const searchInputRef=useRef(null);

    const search=(e)=>{
        e.preventDefault();
        const term=searchInputRef.current.value;

        if(!term) return;

        router.push(`/search?term=${term}`);
    }
    return (
        <header className='sticky top=0 bg-white '>
            <div className='flex w-full p-6 items-center'>
            <Image onClick={()=>router.push('/')} src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' height={40} width={120} className='cursor-pointer'/>
            <form className='flex flex-grow px-5 py-2 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
            <input ref={searchInputRef} type='text' className='flex-grow w-4 focus:outline-none'/>
            <XIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' 
            onClick={()=> (searchInputRef.current.value="")}/>
            <MicrophoneIcon className='m-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'/>
            <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex '/>
            <button hidden type='submit' onClick={search}>Search</button>
            </form>
            <Avatar url='https://media-exp1.licdn.com/dms/image/C5603AQGC_atJuVepuA/profile-displayphoto-shrink_200_200/0/1603608808268?e=1626912000&v=beta&t=flB6o1NJdqAc9SlnaGp_bnN3L21MPuPZ21lNXPc2XRc' className='ml-auto'/>
            </div>
            <HeaderOptions/>
        </header>
    )
}

export default Header
