import Link from "next/link"
import Image from "next/image"
import profileImage from '@/public/profile-img.png'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
        <div className="w-16 rounded-full overflowp-hidden border border-solid border-dark mr-4">
            <Image src={profileImage} alt="CodeBucks" className="w-full h-auto rounded-full"/>
        </div>
        <span className="font-bold text-xl">CodeBucks</span>
    </Link>
  )
}

export default Logo