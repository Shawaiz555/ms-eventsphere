import Link from 'next/link';
import { IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

export default function Footer() {
    return (
        <div className="w-full bg-gray-50 py-10 px-10 rounded-xl md:w-full grid justify-center grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-3">
            <div>
                <h1 className="text-center text-xl md:text-3xl font-semibold tracking-wide">Social Links</h1>
                <div className='flex justify-center gap-2 mt-10'>
                    <Link href="https://facebook.com">
                        <div>
                            <IconButton
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'rgba(0,0,0,0.1)',
                                    },
                                }}
                                component="a"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"

                            >
                                <Facebook color="primary" className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] hover:scale-95' />
                            </IconButton>
                        </div>
                    </Link>
                    <Link href="https://instagram.com">
                        <div>
                            <IconButton
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'rgba(0,0,0,0.1)',
                                    },
                                }}
                                component="a"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"

                            >
                                <Instagram sx={{ color: '#E4405F' }} className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] hover:scale-95' />
                            </IconButton>
                        </div>
                    </Link>
                    <Link href="https://twitter.com">
                        <div>
                            <IconButton
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'rgba(0,0,0,0.1)',
                                    },
                                }}
                                component="a"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"

                            >
                                <Twitter sx={{ color: '#1DA1F2' }} className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] hover:scale-95' />
                            </IconButton>
                        </div>
                    </Link>
                </div>

            </div>
            <div>
                <h1 className="text-center text-xl md:text-3xl font-semibold tracking-wide">Page links</h1>
                <div className='flex justify-center mt-8'>
                    <ul>
                        <li className='py-1 text-lg tracking-wide hover:scale-95'><Link href="/">Home</Link></li>
                        <li className='py-1 text-lg tracking-wide hover:scale-95'><Link href="/About">About</Link></li>
                        <li className='py-1 text-lg tracking-wide hover:scale-95'><Link href="/Events">Events</Link></li>
                        <li className='py-1 text-lg tracking-wide hover:scale-95'><Link href="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="text-center text-xl md:text-3xl font-semibold tracking-wide">News Letter</h1>
                <div className='mt-10'>
                    <input type="text" placeholder='Enter the Email...' className='w-full text-black border-[1px] border-gray-300 rounded-lg px-3 py-2' />
                    <div className='flex justify-end'>
                        <button className='bg-black text-white px-7 py-2 tracking-wide font-semibold rounded-xl mt-4 hover:scale-95'>Send Email</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
